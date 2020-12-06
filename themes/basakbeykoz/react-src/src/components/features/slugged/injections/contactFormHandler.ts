import ContactForm from '../../../../services/contactForm/contactformApi';
import { createUnmountableEventListener } from './createUnmountableEventListener';
import type { UnmountFunction } from '../@types-slugged';

/**
 * Gathers values from the contact form component
 */
export function gatherValues(): stringMap {
  const inputFields = [
    'your-name',
    'your-email',
    'your-subject',
    'your-message',
  ];

  const values = inputFields.reduce((prev, current) => {
    prev[current] = (document.body.querySelector(
      `[name=${current}]`
    ) as HTMLInputElement).value;
    return prev;
  }, {} as stringMap);

  return values;
}

function contactFormHandler() {
  const values = gatherValues();
  new ContactForm({
    formId: 135,
  })
    .setValues(values)
    .sendPost();
}

//! this doesn't belong here
interface stringMap {
  [key: string]: string;
}

/**
 * Attaches the listener for the contact from submit
 */
export function attachContactFormHandler(): UnmountFunction {
  const contactFormElem = document.querySelector<HTMLElement>(
    'div.ContactForm-userInput-submit > input'
  );

  if (!contactFormElem) {
    return () => {};
  }

  const contactFormOnClick = (e: Event) => {
    e.preventDefault();
    contactFormHandler();
  };

  const unmountFunc = createUnmountableEventListener(
    contactFormElem,
    ['click'],
    contactFormOnClick
  );

  return unmountFunc;
}
