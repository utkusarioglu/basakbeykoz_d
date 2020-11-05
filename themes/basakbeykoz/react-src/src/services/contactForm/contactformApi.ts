import { AxiosResponse } from 'axios';
import restApi from '../restApi/restApi';

export interface ContactFormValues {
  'your-name': string;
  'your-email'?: string;
  'your-subject'?: string;
  'your-message'?: string;
}

interface ContactFormOptions {
  formId: number;
}

class ContactForm<T> {
  private values!: T;
  private options!: ContactFormOptions;

  constructor(options: ContactFormOptions) {
    this.setOptions(options);
  }

  private setOptions(options: ContactFormOptions) {
    this.options = options;
    return this;
  }

  public setValues(values: T) {
    this.values = values;
    return this;
  }

  public sendPost() {
    if (!this.values) {
      return Promise.resolve(false);
    }
    const { formId } = this.options;

    restApi
      .post(
        `/contact-form-7/v1/contact-forms/${formId.toString()}/feedback`,
        this.createFormData(this.values),
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )
      .then((response: AxiosResponse<any>) => {
        console.warn(response);
      });
  }

  private createFormData(valuesObject: T): FormData {
    const formData = new FormData();
    Object.entries(valuesObject).forEach(([key, value]) => {
      formData.append(key, value);
    });
    return formData;
  }
}

export default ContactForm;
