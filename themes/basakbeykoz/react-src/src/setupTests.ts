// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// import "@testing-library/jest-dom/extend-expect";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

/**
 * These variables are normally prepared by public/index.php and provided to
 * js through global.window. Check src/config for changes in these values if
 * something with tests complain about window variables.
 */
global.window.config = {
  WP_PAGE_TITLE: 'PageTitle',
  WP_TITLE_SEPARATOR: ' - ',
  WP_PAGE_TAGLINE: 'Tagline',
};
