import { render, screen } from '@testing-library/react';

import { Header } from './Header';

describe('Header', () => {
  test('should render the Header', () => {
    render(<Header title="test" />);

    expect(screen.queryByText('test')).toBeTruthy();
  });

  test('should render the Header with default title', () => {
    render(<Header />);

    expect(screen.queryByText('React Seed')).toBeTruthy();
  });
});
