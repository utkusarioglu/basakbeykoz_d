import ContactForm from '../../../../services/contactForm/contactformApi';

export function gatherValues() {
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

interface stringMap {
  [key: string]: string;
}

export function attachContactFormListener() {
  return document
    .querySelector('div.ContactForm-userInput-submit > input')
    ?.addEventListener('click', (event) => {
      event.preventDefault();
      contactFormHandler();
    });
}
