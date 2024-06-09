import { screen, waitFor } from '@testing-library/react';
import { http, HttpResponse } from 'msw';

import constants from '@/constants';

import { server } from '../../../mocks/node';
import { renderWithProviders } from '../../../mocks/Wrapper';
import { Users } from '..';

describe('Users', () => {
  test('should render Users', async() => {
    renderWithProviders(<Users />);

    await waitFor(() => {
      expect(screen.getByText('Leanne Graham')).toBeInTheDocument();
      expect(screen.getByText('hildegard.org')).toBeInTheDocument();
    });
  });

  test('should handle scenario when web feature flag is off', async() => {
    server.use(
      http.get('http://localhost:4242/api/frontend', () => HttpResponse.json({
        toggles: [
          {
            enabled: false,
            name: 'web.instead.email',
          },
        ],
      })),
    );

    renderWithProviders(<Users />);

    await waitFor(() => {
      expect(screen.getByText('Leanne Graham')).toBeInTheDocument();
      expect(screen.queryByText('hildegard.org')).not.toBeInTheDocument();
    });
  });

  test('should handle fetch error', async() => {
    server.use(
      http.get(`${constants.base}/users`, () => HttpResponse.error()),
    );

    renderWithProviders(<Users />);

    await waitFor(() => {
      expect(screen.getByText('Error fetching users')).toBeInTheDocument();
    });
  });
});
