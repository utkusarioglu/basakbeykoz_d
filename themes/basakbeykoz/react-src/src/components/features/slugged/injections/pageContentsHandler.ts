import { useHistory } from 'react-router-dom';
import { RootState } from '../../../../store/rootReducer';
import { createUnmountableEventListener } from './createUnmountableEventListener';
import type { UnmountFunction } from '../@types-slugged';

type Refs = RootState['app']['refs'];

/**
 * Attaches the h2 elements as buttons inside the first wp-block-buttons element
 * if one exists on the page
 *
 * @remarks
 * This injection scans the article and collects all the h2 elements,
 * then creates synthetic wordpress buttons with them.
 *
 * If the user has placed a wp-block-buttons block on top of the page, then
 * these synthetic buttons get attached to the said block.
 *
 * The code also checks whether there are any pre-existing buttons in the
 * wp-block-buttons block. If there are, these are intended to be in-site links
 * by design. These links are processed with preventDefault and an
 * eventListener for react router dom is attached to each.
 *
 * The code returns an unmount function for all the side effects produced,
 * allowing the parent piece of code to cancel all the listeners and alike.
 *
 * @param refs - refs object from the store
 * @param history - history object from {@link react-router-dom}
 */
export function pageContentsHandler(
  refs: Refs,
  history: ReturnType<typeof useHistory>
): UnmountFunction {
  // All the listener types that will be attached
  const events = ['click'];

  // The div where the buttons will be placed
  // It's intended to be the
  const buttonContainer = document.querySelector<HTMLElement>(
    'article > .wp-block-buttons:nth-of-type(1)'
  );

  // If the button container is not the first div in article, return
  if (!buttonContainer || buttonContainer.previousElementSibling != null) {
    return () => {};
  }

  const unmountList = [
    attachRouterToWpLinks(buttonContainer, events, history),
    attachPageHeadingButtonsToContainer(buttonContainer, events, refs),
  ];

  return () => unmountList.forEach((unmountCommand) => unmountCommand());
}

/**
 * Attaches react-router-dom links to standard wp buttons while removing buttons
 * with no text.
 *
 * @remarks
 * By design the buttons that come from vanilla wp object can only contain links
 * This method finds these buttons in the buttons block, prevents their default
 * behavior and attaches the linking from react router dom for faster routing.
 *
 * The method also removes any buttons inside the buttons block that do not have
 * a href property defined. This is done to remove the empty button that wp
 * requires when a wp-block-buttons is created. This also makes sure that if
 * there are any stray buttons left by the user inside the buttons block, these
 * will be removed.
 *
 * @param buttonContainer the container that holds the buttons
 * @param events types of events for which to listen
 * @param history history object from {@link react-router-dom}
 */
function attachRouterToWpLinks(
  buttonContainer: HTMLElement,
  events: string[],
  history: ReturnType<typeof useHistory>
): UnmountFunction {
  const unmountList = Array.from(buttonContainer.children).map((wpButton) => {
    return attachRouterToWpLink(
      buttonContainer,
      wpButton as HTMLElement,
      events,
      history
    );
  });

  return () => unmountList.forEach((unmountCommand) => unmountCommand());
}

/**
 * Attaches the routing listeners for a single wp origin button
 * It also removes all the buttons that have no innerText
 *
 * @param buttonContainer The container that holds the wp buttons
 * @param wpButton wp origin button that already exists inside the buttons block
 * @param events Event list for which the listeners will be attached
 * @param history {@link react-router-dom} history object
 */
function attachRouterToWpLink(
  buttonContainer: HTMLElement,
  wpButton: HTMLElement,
  events: string[],
  history: ReturnType<typeof useHistory>
): UnmountFunction {
  // makes sure that the button is created by wordpress rather than js code
  // buttons created by js code will have the synthetic-button class attached
  if ((wpButton as HTMLElement).classList.contains('synthetic-button')) {
    return () => {};
  }

  const wpLink = wpButton.querySelector(
    '.wp-block-button__link'
  ) as HTMLElement;
  const wpHref = wpLink.getAttribute('href');

  // removes button if the button has no href property
  if (!wpHref) {
    buttonContainer.removeChild(wpButton);
    return () => {};
  }

  const pushHistory = (e: Event) => {
    e.preventDefault();
    history.push(wpHref);
  };

  const unmountFunc = createUnmountableEventListener(
    wpButton as HTMLElement,
    events,
    pushHistory
  );

  return unmountFunc;
}

/**
 * Scans the page for h2 tags and attaches their inner text as buttons
 *
 * @remarks
 * The method uses the innerText of h2 elements to create buttons inside
 * the buttonContainer element.
 *
 * These buttons will all have the .synthetic-buttons class. This is done to
 * allow the code to separate buttons created by js from the buttons that
 * came from wordpress
 *
 * @param buttonContainer Container that will hold the buttons
 * @param events The events to which the event listener will listen
 * @param refs {@link OverlayScrollbars} refs object from the store
 */
function attachPageHeadingButtonsToContainer(
  buttonContainer: HTMLElement,
  events: string[],
  refs: Refs
): UnmountFunction {
  const headings = Array.from(document.querySelectorAll('h2')) as HTMLElement[];

  if (headings.length === 0) {
    return () => {};
  }

  const unmountList = headings.map((heading) => {
    return attachPageHeadingButtonToContainer(
      buttonContainer,
      events,
      refs,
      heading
    );
  });

  return () => unmountList.forEach((unmountCommand) => unmountCommand());
}

/**
 * Attaches a single contents button to the given container
 * @param buttonContainer The container to which the button will be attached
 * @param events the events for which the listeners should be attached
 * @param refs {@link OverlayScrollbars} refs object from the store
 * @param heading the heading tag for which the button is being attached
 */
function attachPageHeadingButtonToContainer(
  buttonContainer: HTMLElement,
  events: string[],
  refs: Refs,
  heading: HTMLElement
): UnmountFunction {
  // Creates a class name for the  button by replacing spaces and
  // removing illegal chars
  const className = heading.innerText
    .replace(/\s/g, '-')
    .replace(/[.,/#!$%^&*;:{}=_`~()@+?><[\]+]/g, '')
    .toLowerCase();

  // cancels if there is another button already in the container that has the
  // same class name
  if (buttonContainer.querySelectorAll(`.${className}`).length !== 0) {
    return () => {};
  }

  const syntheticButton = createSyntheticButton(className, heading.innerText);
  const syntheticButtonOnClick = (e: Event) => {
    e.preventDefault();
    refs.body?.ref.current?.osInstance()?.scroll(
      {
        el: heading as HTMLElement,
        scroll: { x: 'never' },
        margin: 50,
      },
      1000,
      'easeOutExpo'
    );
  };
  const unmountFunc = createUnmountableEventListener(
    syntheticButton,
    events,
    syntheticButtonOnClick
  );
  buttonContainer.appendChild(syntheticButton);
  return unmountFunc;
}

/**
 * Creates a synthetic wp-block-button element
 *
 * @param className custom class name for the button
 * @param innerText text to be used in the button
 */
function createSyntheticButton(
  className: string,
  innerText: string
): HTMLElement {
  const parent = document.createElement('div');
  parent.innerHTML = [
    `<div class="wp-block-button synthetic-button ${className}">`,
    `<a class="wp-block-button__link" rel="${className}">`,
    innerText,
    `</a></div>`,
  ].join('');
  return parent.children[0] as HTMLElement;
}
