import { render, fireEvent, screen } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
});


test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count witht of 0', () => {
  const count = screen.getByText(/0/i);
  expect(count).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  const increment = screen.getByRole('button', { name: '+' });
  fireEvent.click(increment);
  const count = screen.getByText(/1/i);
  expect(count).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
  const decrement = screen.getByRole('button', { name: '-' });
  fireEvent.click(decrement);
  const count = screen.getByText(/-1/i);
  expect(count).toBeInTheDocument();
});