import type { UnmountFunction } from '../@types-slugged';
import config from '../../../../config';

/**
 * Attaches the given listeners to the element. Function returns another
 * function that will remove the event listeners if called.
 *
 * @param events Listeners to be added
 * @param element the element to attach event listeners
 * @param eventMethod the method that will be called when the listened events
 * occur
 */
export function createUnmountableEventListener(
  element: HTMLElement,
  events: string[],
  eventMethod: (e: Event) => void
): UnmountFunction {
  if (!element) {
    if (config.NODE_ENV === 'production') {
      console.log(eventMethod);
      console.warn(
        `Listener attach failed above you can see the intended callback`
      );
    }
    return () => {};
  }
  const unmountList = events.map((event) => {
    element.addEventListener(event, eventMethod);
    return () => element.removeEventListener(event, eventMethod);
  });
  return () => unmountList.forEach((unmount) => unmount());
}
