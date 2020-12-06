import { useHistory } from 'react-router-dom';
import { RootState } from '../../../../store/rootReducer';
import { createUnmountableEventListener } from './createUnmountableEventListener';

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
) {
  // Will be populated by listeners and other side-effect creators
  const unmountList: (() => void)[] = [];
  // All the listener types that will be attached
  const listeners = ['click'];

  // The div where the buttons will be placed
  // It's intended to be the
  const buttonContainer = document.querySelector(
    'article > .wp-block-buttons:nth-of-type(1)'
  ) as HTMLElement;

  if (!buttonContainer) {
    return;
  }

  // If the button container is not the first div in article, return
  if (buttonContainer.previousElementSibling != null) {
    return;
  }

  unmountList.push(attachRouterToWpLinks(buttonContainer, listeners, history));
  unmountList.push(
    attachPageHeadingsToWpBlockButtons(buttonContainer, listeners, refs)
  );

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
 * @param listeners types of events for which to listen
 * @param history history object from {@link react-router-dom}
 */
function attachRouterToWpLinks(
  buttonContainer: HTMLElement,
  listeners: string[],
  history: ReturnType<typeof useHistory>
) {
  // Will be populated by listeners and other side-effect creators
  const unmountList: (() => void)[] = [];
  Array.from(buttonContainer.children).forEach((wpButton) => {
    // makes sure that the button is created by wordpress rather than js code
    // buttons created by js code will have the synthetic-button class attached
    if ((wpButton as HTMLElement).classList.contains('synthetic-button')) {
      return;
    }
    const wpLink = wpButton.querySelector(
      '.wp-block-button__link'
    ) as HTMLElement;
    const wpHref = wpLink.getAttribute('href');
    // removes button if the button has no href property
    if (!wpHref) {
      buttonContainer.removeChild(wpButton);
      return;
    }
    const pushHistory = (e: Event) => {
      e.preventDefault();
      history.push(wpHref);
    };
    const unmountFunc = createUnmountableEventListener(
      listeners,
      wpButton as HTMLElement,
      pushHistory
    );
    unmountList.push(unmountFunc);
  });
  return () => unmountList.forEach((unmountCommand) => unmountCommand());
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
 * @param listeners The events to which the event listener will listen
 * @param refs {@link OverlayScrollbars} refs object from the store
 */
function attachPageHeadingsToWpBlockButtons(
  buttonContainer: HTMLElement,
  listeners: string[],
  refs: Refs
) {
  // Will be populated by listeners and other side-effect creators
  const unmountList: (() => void)[] = [];
  const headings = Array.from(document.querySelectorAll('h2')) as HTMLElement[];
  headings.forEach((heading) => {
    // Creates a classname for the  button by replacing spaces and
    // removing illegal chars
    const className = heading.innerText
      .replace(/\s/g, '-')
      .replace(/[.,/#!$%^&*;:{}=_`~()@+?><[\]+]/g, '')
      .toLowerCase();
    // cancels if there is another button already in the container that has the
    // same class name
    if (buttonContainer.querySelectorAll(`.${className}`).length !== 0) {
      return;
    }

    const syntheticButton = createSyntheticButton(className, heading.innerText);
    const scrollHandler = (e: Event) => {
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
      listeners,
      syntheticButton,
      scrollHandler
    );
    unmountList.push(unmountFunc);
    buttonContainer.appendChild(syntheticButton);
  });
  return () => unmountList.forEach((unmountCommand) => unmountCommand());
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
  const syntheticButton = parent.children[0] as HTMLElement;
  return syntheticButton;
}
