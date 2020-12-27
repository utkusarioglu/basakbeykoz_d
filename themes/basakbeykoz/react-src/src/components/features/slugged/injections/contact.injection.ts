import { attachContactFormHandler } from './contactFormHandler';
import { RootState } from '../../../../store/rootReducer';
import ReactGA from 'react-ga';
import config from '../../../../config';
import { SocialItem } from '../../social/@types-social';
import envelope from '../../../../static/vectors/envelope.svg';
import { createUnmountableEventListener } from './createUnmountableEventListener';
import type { UnmountFunction } from '../@types-slugged';

type Refs = RootState['app']['refs'];

/**
 * The injection code for the contact page
 * @param refs {@link OverlayScrollbars}  refs object from the store
 */
export function contactPageInjection(refs: Refs): UnmountFunction {
  const unmountList = [
    attachContactFormHandler(),
    injectSocialFrameContent(refs),
  ];

  return () => unmountList.forEach((unmount) => unmount());
}

/**
 * Injects components that go inside the social media frame
 * @param refs {@link OverlayScrollbars} refs object from the store
 */
function injectSocialFrameContent(refs: Refs): UnmountFunction {
  const socialItemsBox = document.querySelector<HTMLElement>(
    '.contact--social-links'
  );

  if (!socialItemsBox) {
    return () => {};
  }

  const unmountList = [
    injectSocialItemButtons(socialItemsBox),
    injectContactButton(socialItemsBox, refs),
  ];

  return () => unmountList.forEach((unmount) => unmount());
}

/**
 * Adds buttons for all the social items from the config module.
 */
function injectSocialItemButtons(socialItemsBox: HTMLElement): UnmountFunction {
  const unmountList = config.SOCIAL_ITEMS.map((socialItem) => {
    return injectSocialItemButton(socialItemsBox, socialItem);
  });

  return () => unmountList.forEach((unmount) => unmount());
}

/**
 * Injects a single social item button inside the socialItemsBox
 * @param socialItemsBox The container that carries the social item buttons
 * @param socialItem object that defines the properties of social item
 */
function injectSocialItemButton(
  socialItemsBox: HTMLElement,
  socialItem: SocialItem
): UnmountFunction {
  // Create class name from the icon file's name
  const className = socialItem.icon.slice(
    socialItem.icon.lastIndexOf('/') + 1,
    socialItem.icon.lastIndexOf('.')
  );

  // return if there is a button with the same class
  if (socialItemsBox.querySelector(`.${className}`)) {
    return () => {};
  }

  // Creates the button and attaches tracking
  const socialButton = createSocialButton(socialItem, className);
  const socialButtonOnClick = (_: Event) => {
    ReactGA.outboundLink(
      {
        label: className,
      },
      () => {
        config.NODE_ENV === 'development' &&
          console.log(`hi from ga ${className}`);
      }
    );
  };
  const unmountFunc = createUnmountableEventListener(
    socialButton,
    ['click'],
    socialButtonOnClick
  );
  socialItemsBox.appendChild(socialButton);

  return unmountFunc;
}

/**
 * injects the contact form button in the social frame
 * @param refs {@link OverlayScrollbars} refs object from the store
 */
function injectContactButton(
  socialItemsBox: HTMLElement,
  refs: Refs
): UnmountFunction {
  // returns if the button is already there
  if (socialItemsBox.querySelector('.contact-form')) {
    return () => {};
  }

  //! This one may break if the page is later changed
  const contactFormTitle = document.querySelector<HTMLElement>('h3');
  // Return if there is no contact form title
  if (!contactFormTitle) {
    return () => {};
  }

  const contactFormButton = createSocialButton(
    {
      title: 'İletişim formu',
      icon: envelope,
      link: '/iletisim',
    },
    'contact-form'
  );
  const contactFormOnClick = (e: Event) => {
    e.preventDefault();
    refs.body?.ref.current?.osInstance()?.scroll(
      {
        el: contactFormTitle,
        scroll: { x: 'never' },
        margin: 50,
      },
      1000,
      'easeOutExpo'
    );
  };
  const unmountFunc = createUnmountableEventListener(
    contactFormButton,
    ['click'],
    contactFormOnClick
  );
  socialItemsBox.appendChild(contactFormButton);

  return unmountFunc;
}

/**
 * Creates a social item button
 * @param socialItem Social item object
 * @param className class name to be used for the item
 */
function createSocialButton(
  socialItem: SocialItem,
  className: string
): HTMLElement {
  const parent = document.createElement('div');
  parent.innerHTML = `
    <a 
      href="${socialItem.link}" 
      style="grid-area: ${className}"
      target="_blank" 
      class="contact--social-link ${className}"
      title="${socialItem.title}"
      >
      <div class="contact--social-link--container">
      <img 
        class="contact--social-link--image" 
        src="${socialItem.icon}"
        >
        </img>
      </div>
    </a>
  `;

  return parent.children[0] as HTMLElement;
}
