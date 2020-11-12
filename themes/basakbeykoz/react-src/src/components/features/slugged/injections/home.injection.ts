import OverlayScrollbars from 'overlayscrollbars';
import { attachContactFormListener } from './contactFormHandler';
import { RootState } from '../../../../store/rootReducer';
const pauseable = require('pauseable');

type Refs = RootState['app']['refs'];

export function homeInjection(refs: Refs) {
  injectWpPostEnhancements(refs);
  attachContactFormListener();
}

function injectWpPostEnhancements(refs: Refs) {
  const fields = document.querySelectorAll('.wp-block-latest-posts');
  // Scrollbar for latest posts
  attachOverlayScrollbars(fields[0] as HTMLElement);
  // Scrollbar for testimonials
  attachOverlayScrollbars(fields[1] as HTMLElement);
  // Attach listener to the CTA

  substituteTestimonialChars(fields[1] as HTMLElement);

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
function substituteTestimonialChars(testimonials: HTMLElement) {
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

function attachOverlayScrollbars(elem: HTMLElement): void {
  const SCROLL_DURATION = 1500;
  const LINGER_DURATION = 3000;
  const ANIMATION_ENABLED = false; //! make this true

  const scrollbarRef = OverlayScrollbars(elem, {
    scrollbars: {
      autoHide: 'leave',
    },
  });
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
    target.addEventListener('mouseover', () => {
      scrollbarRef.scrollStop();
      animation.pause();
    });
    target.addEventListener('mouseleave', () => {
      animation.resume();
    });
  }
}
