import React from 'react';
import { render } from '@testing-library/react';
import AppView from '../../components/app/AppView';

test('renders learn react link', () => {
  const { getByText } = render(<AppView />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
