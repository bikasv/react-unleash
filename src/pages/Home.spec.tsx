import { screen, waitFor } from '@testing-library/react';

import { renderWithProviders } from '../../mocks/Wrapper';
import { Home } from './Home';

describe('Home page', () => {
  test('should render Home', async() => {
    renderWithProviders(<Home />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('Leanne Graham')).toBeInTheDocument();
    });
  });
});
