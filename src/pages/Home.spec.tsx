import { screen, waitFor } from '@testing-library/react';

import { renderWithProviders } from '../../mocks/Wrapper';
import { Home } from './Home';

describe('Home page', () => {
  test('should render Home', async() => {
    renderWithProviders(<Home />);

    await waitFor(() => {
      expect(screen.getByText('Leanne Graham')).toBeInTheDocument();
    });
  });
});
