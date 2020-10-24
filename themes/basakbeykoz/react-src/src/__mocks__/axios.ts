/**
 * Mock module for axios actions
 */

const request = jest.fn(() =>
  Promise.resolve<any>(
    'set a mock value or implementation in the particular test'
  )
);
/**
 * Defines request and create mock methods for axios
 */
export default {
  request: request,
  create: jest.fn(() => ({
    request: request,
  })),
};
