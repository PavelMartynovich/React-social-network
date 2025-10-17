import { render, screen } from '@testing-library/react';
import { SamuraiJSapp } from './App';

test('renders app without crashing', () => {
  render(<SamuraiJSapp />);
  // например, проверим что есть навигация:
  expect(screen.getByText(/Users/i)).toBeInTheDocument();
});
