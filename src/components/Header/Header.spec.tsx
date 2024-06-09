import { screen, waitFor } from '@testing-library/react';

import { renderWithProviders } from '../../../mocks/Wrapper';
import { Header } from './Header';

describe('Header', () => {
  test('should render the Header', async() => {
    renderWithProviders(<Header title="test" />);

    await waitFor(() => {
      expect(screen.queryByText('test')).toBeTruthy();
    });
  });

  test('should render the Header with default title', async() => {
    renderWithProviders(<Header />);

    await waitFor(() => {
      expect(screen.queryByText('React Seed')).toBeTruthy();
    });
  });
});
