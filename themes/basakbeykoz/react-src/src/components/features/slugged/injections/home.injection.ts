import OverlayScrollbars, { Options } from 'overlayscrollbars';
import { useHistory } from 'react-router-dom';
import { attachContactFormHandler } from './contactFormHandler';
import { RootState } from '../../../../store/rootReducer';
import type { UnmountFunction } from '../@types-slugged';
import { createUnmountableEventListener } from './createUnmountableEventListener';
const pauseable = require('pauseable');

type Refs = RootState['app']['refs'];

/**
 * Injects homepage enhancements
 * @param refs {@link OverlayScrollbars} refs object from the store
 * @param history {@link react-router-dom} history object
 */
export function homeInjection(
  refs: Refs,
  history: ReturnType<typeof useHistory>
): UnmountFunction {
  const unmountList = [
    injectWordPressPostEnhancements(refs, history),
    attachContactFormHandler(),
    attachCtaAction(refs),
  ];
  return () => unmountList.forEach((unmount) => unmount);
}

/**
 * Attaches wp-latest-posts related items
 * @param refs {@link OverlayScrollbars} refs object from the store
 * @param history {@link react-router-dom} history object
 */
function injectWordPressPostEnhancements(
  refs: Refs,
  history: ReturnType<typeof useHistory>
): UnmountFunction {
  /**
   * It appears that the order of this array is important for the proper
   * functioning of overlay scrollbars. Keeping the array in the order of
   * appearance on the page seems to work better
   * */
  const [success, testimonials] = Array.from(
    document.querySelectorAll<HTMLElement>('.wp-block-latest-posts')
  );
  const unmountList = [
    attachOverlayScrollbars(testimonials, {
      scrollbars: {
        autoHide: 'leave',
      },
    }),
    attachOverlayScrollbars(success, {
      scrollbars: {
        autoHide: 'leave',
      },
      overflowBehavior: {
        y: 'visible-scroll',
        x: 'scroll',
      },
    }),
    attachOnClickCorrection(testimonials, refs, history),
    attachOnClickCorrection(success, refs, history),
  ];

  replaceTestimonialSpecialChars(success);

  return () => unmountList.forEach((unmount) => unmount());
}

/**
 * Attaches a click listener to the home page call to action button.
 * The button scrolls down to the next section.
 * @param refs refs object from state.app
 */
function attachCtaAction(refs: Refs): UnmountFunction {
  const ctaButton = document.querySelector<HTMLElement>('.wp-block-button');

  if (!ctaButton) {
    return () => {};
  }

  const ctaOnClick = (e: Event) => {
    e.preventDefault();
    refs.body?.ref.current
      ?.osInstance()
      ?.scroll(
        document.getElementsByClassName('wp-block-group')[1] as HTMLElement,
        1000,
        'easeOutExpo'
      );
  };

  return createUnmountableEventListener(ctaButton, ['click'], ctaOnClick);
}

/**
 * The client uses certain dashes and slashes to distinguish the name, title
 * and the company of people featured in testimonials.
 * This function replaces these characters (listed in the finds variable) and
 * replaces them with line break
 * A similar action with these delimiters is taken with the page title
 * @param testimonials Html element that houses the testimonial <li>s
 */
function replaceTestimonialSpecialChars(testimonials: HTMLElement): void {
  if (!testimonials) {
    return;
  }
  const finds = ['-', '–', '/'];
  const substitution = '<br>';
  const testimonialTitles = testimonials.querySelectorAll('a'); // finds the title
  for (let i = 0; i < testimonialTitles.length; i++) {
    // gets the inner html and reduces all finds with substitution.
    testimonials.querySelectorAll('a')[i].innerHTML = finds.reduce((p, c) => {
      // this replaces the finds surrounded by spaces as well
      return p.replace(` ${c} `, substitution).replace(c, substitution);
    }, testimonials.querySelectorAll('a')[i].innerHTML);
  }
}

/**
 * Corrects the behavior of wordpress post block clicks
 *
 * @remarks
 * Wordpress posts block render only allows the title of the items to be
 * clickable. In addition, as this project uses react-router-dom, the
 * click action has to be prevented while the router handles the page routing.
 *
 * The function also scrolls the page to the top upon click
 *
 * @param field testimonials or posts element
 */
function attachOnClickCorrection(
  field: HTMLElement,
  refs: Refs,
  history: ReturnType<typeof useHistory>
): UnmountFunction {
  const onClick = (e: Event) => {
    const aElem = (e.target as HTMLElement).closest('li')?.querySelector('a');

    if (!aElem) {
      return;
    }

    const cardHref = aElem.href.replace(/.*:\/\/[\w.]*/g, '');

    // If it can't find the for some reason href, it clicks the link
    // conventionally
    if (!cardHref) {
      aElem.click();
      return;
    }

    refs.body?.ref.current?.osInstance()?.scroll(0, 0);
    history.push(cardHref);
  };
  return createUnmountableEventListener(field, ['click'], onClick);
}

/**
 * Attaches Overlay scrollbars to the testimonials or posts divs.
 * It also starts a basic scroll animation for the items
 * The animation stops if the user hovers over the content.
 * !but "stop" doesn't register before the current animation ends
 * @param elemToBeOverlayed - Html element to attach the scrollbars to (testimonials, posts etc)
 * @param options - OverlayScrollbars options
 */
function attachOverlayScrollbars(
  elemToBeOverlayed: HTMLElement,
  options: Options
): UnmountFunction {
  const SCROLL_DURATION = 1500;
  const LINGER_DURATION = 3000;
  const ANIMATION_ENABLED = true;

  const scrollbarRef = OverlayScrollbars(elemToBeOverlayed, options);

  if (!scrollbarRef) {
    return () => {};
  }

  const osContent = elemToBeOverlayed.querySelector<HTMLElement>('.os-content');

  if (!osContent) {
    return () => {};
  }

  const children = osContent.children;
  let currentChild = 1;

  if (!ANIMATION_ENABLED) {
    return () => {};
  }

  const animation = pauseable.setInterval(() => {
    scrollbarRef.scroll(
      {
        el: children[currentChild] as HTMLElement,
        margin: true,
      },
      SCROLL_DURATION,
      'easeInOutSine'
    );
    // !TODO there is error in this, off by one
    currentChild = (currentChild % children.length) + 1;
  }, LINGER_DURATION);

  const pauseAnimation = () => {
    scrollbarRef.scrollStop();
    animation.pause();
  };

  const resumeAnimation = () => {
    animation.resume();
  };

  const unmountList = [
    createUnmountableEventListener(
      elemToBeOverlayed,
      ['mouseover', 'touchstart', 'touchmove'],
      pauseAnimation
    ),
    createUnmountableEventListener(
      elemToBeOverlayed,
      ['mouseleave', 'touchend', 'touchcancel'],
      resumeAnimation
    ),
  ];

  return () => unmountList.forEach((unmount) => unmount());
}
