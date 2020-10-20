import { ISocial } from './@types-social';

const { REACT_APP_UPLOADS_DIR } = process.env;

const initialState: ISocial = {
  items: [
    {
      title: 'Instagram',
      link: 'https://www.instagram.com/basak_beykoz/',
      icon: REACT_APP_UPLOADS_DIR + '/instagram.svg',
    },
    {
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/basakbeykoz/',
      icon: REACT_APP_UPLOADS_DIR + '/linkedin.svg',
    },
  ],
};

export default function (state = initialState): ISocial {
  return state;
}
