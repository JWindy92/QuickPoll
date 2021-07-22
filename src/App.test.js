import { render, screen } from '@testing-library/react';
import App from './App';

test('header renders correctly', () => {
  render(<App />);
  const headerElement = screen.getByText('Welcome to the poll app!');
  expect(headerElement).toBeInTheDocument();
});
