import OverlayScrollbars, { Options } from 'overlayscrollbars';
import { attachContactFormHandler } from './contactFormHandler';
import { RootState } from '../../../../store/rootReducer';
const pauseable = require('pauseable');

type Refs = RootState['app']['refs'];

export function homeInjection(refs: Refs) {
  injectWordPressPostEnhancements(refs);
  attachContactFormHandler();
}

function injectWordPressPostEnhancements(refs: Refs) {
  const fields = document.querySelectorAll('.wp-block-latest-posts');
  const [testimonials, success] = (fields as unknown) as [
    HTMLElement,
    HTMLElement
  ];
  attachOverlayScrollbars(testimonials, {
    scrollbars: {
      autoHide: 'leave',
    },
  });
  attachOverlayScrollbars(success, {
    scrollbars: {
      autoHide: 'leave',
    },
    overflowBehavior: {
      y: 'visible-scroll',
      x: 'scroll',
    },
  });
  attachClickAction(testimonials);
  attachClickAction(success);
  replaceTestimonialSpecialChars(success);
  attachCtaAction(refs);
}

/**
 * Attaches a click listener to the home page call to action button.
 * The button scrolls down to the next section.
 * @param refs refs object from state.app
 */
function attachCtaAction(refs: Refs) {
  // !HACK this listener is attached every time the page is opened
  document.body
    .getElementsByClassName('wp-block-button')[0]
    ?.addEventListener('mousedown', () => {
      refs.body?.ref.current
        ?.osInstance()
        ?.scroll(
          document.getElementsByClassName('wp-block-group')[1] as HTMLElement,
          1000,
          'easeOutExpo'
        );
    });
}

/**
 * The client uses certain dashes and slashes to distinguish the name, title
 * and the company of people featured in testimonials.
 * This function replaces these characters (listed in the finds variable) and
 * replaces them with line break
 * A similar action with these delimiters is taken with the page title
 * @param testimonials Html element that houses the testimonial <li>s
 */
function replaceTestimonialSpecialChars(testimonials: HTMLElement) {
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
 * Wordpress posts block render only allows the title of the items to be
 * clickable. This fuction injection makes sure that anywhere on the card
 * triggers a click on the <a> element inside the card
 * @param field testimonials or posts element
 */
function attachClickAction(field: HTMLElement) {
  field.addEventListener('click', (e: MouseEvent) => {
    console.log((e.target as HTMLElement).closest('li'));
    (e.target as HTMLElement).closest('li')?.querySelector('a')?.click();
  });
}

/**
 * Attaches Overlay scrollbars to the testimonials or posts divs.
 * It also starts a basic scroll animation for the items
 * The animation stops if the user hovers over the content.
 * !but "stop" doesn't register before the current animation ends
 * @param elem - Html element to attach the scrollbars to (testimonials, posts etc)
 * @param options - OverlayScrollbars options
 */
function attachOverlayScrollbars(
  elem: HTMLElement,
  options: Options
): void | (() => void) {
  const SCROLL_DURATION = 1500;
  const LINGER_DURATION = 3000;
  const ANIMATION_ENABLED = true;

  const scrollbarRef = OverlayScrollbars(elem, options);
  const osContent = elem.querySelectorAll('.os-content')[0];
  const children = osContent.children;
  const childrenCount = children.length;
  let currentChild = 1;
  if (ANIMATION_ENABLED) {
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
      currentChild = (currentChild % childrenCount) + 1;
    }, LINGER_DURATION);

    const target = elem.querySelectorAll('.os-content')[0];

    const pauseEvents = ['mouseover', 'touchstart', 'touchmove'].map(
      (event) => {
        const pauseAnim = () => {
          scrollbarRef.scrollStop();
          animation.pause();
        };

        target.addEventListener(event, pauseAnim);

        return () => target.removeEventListener(event, pauseAnim);
      }
    );

    const resumeEvents = ['mouseleave', 'touchend', 'touchcancel'].map(
      (event) => {
        const resumeAnim = () => {
          animation.resume();
        };
        target.addEventListener(event, resumeAnim);
        return () => target.removeEventListener(event, resumeAnim);
      }
    );

    return () => [...pauseEvents, ...resumeEvents].forEach((event) => event());
  }
}
