import { screen, waitFor } from '@testing-library/react';
import { http, HttpResponse } from 'msw';

import constants from '@/constants';

import { server } from '../../../mocks/node';
import { renderWithProviders } from '../../../mocks/Wrapper';
import { Users } from '..';

describe('Users', () => {
  test('should render Users', async() => {
    renderWithProviders(<Users />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('Leanne Graham')).toBeInTheDocument();
    });
  });

  test('should handle fetch error', async() => {
    server.use(
      http.get(`${constants.base}/users`, () => HttpResponse.error()),
    );

    renderWithProviders(<Users />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('Error fetching users')).toBeInTheDocument();
    });
  });
});
