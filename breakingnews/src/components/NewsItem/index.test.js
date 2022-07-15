import { render, screen } from '@testing-library/react';
import TopNews from './index';

test('renders top news component', () => {
  render(<TopNews title='Hi Juan'  />);
  const linkElement = screen.getByText(/Hi Juan/i);
  expect(linkElement).toBeInTheDocument();
});
