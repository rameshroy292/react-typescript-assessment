import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId('app');
  expect(linkElement).toBeInTheDocument();

  const searchBar = screen.getByTestId('search-input');
  expect(searchBar).toBeInTheDocument();
});
