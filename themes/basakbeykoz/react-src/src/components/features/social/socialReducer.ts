import { ISocial } from './@types-social';
import config from '../../../config';

const { UPLOADS_DIR } = config;

const initialState: ISocial = {
  items: [
    {
      title: 'Instagram',
      link: 'https://www.instagram.com/basak_beykoz/',
      icon: UPLOADS_DIR + '/instagram.svg',
    },
    {
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/basakbeykoz/',
      icon: UPLOADS_DIR + '/linkedin.svg',
    },
  ],
};

export default function (state = initialState): ISocial {
  return state;
}
