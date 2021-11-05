import { render, screen } from '@testing-library/react';
import App from './App';

test('Logo renders - website is up', () => {
  render(<App />);
  const linkElement = screen.getByAltText(/logo/i);
  expect(linkElement).toBeInTheDocument();
});


