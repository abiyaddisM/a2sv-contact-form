import { render, screen } from '@testing-library/react';
import App from './App';

test('renders contact form', () => {
  render(<App />);
  const formTitle = screen.getByText(/get in touch/i);
  expect(formTitle).toBeInTheDocument();
});
