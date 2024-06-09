/* eslint-disable no-duplicate-imports */
import { createRootRoute, createRouter, RouterProvider } from '@tanstack/react-router';
import type { RenderOptions } from '@testing-library/react';
import { render } from '@testing-library/react';
import { FlagProvider } from '@unleash/proxy-client-react';
import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

import type { AppStore, RootState } from '@/store';
import { setupStore } from '@/store';

type ExtendedRenderOptions = {
  preloadedState?: Partial<RootState>;
  store?: AppStore;
} & Omit<RenderOptions, 'queries'>;

const config = {
  appName: 'react-unleash',
  clientKey: import.meta.env.VITE_UNLEASH_TOKEN as string,
  disableRefresh: true,
  refreshInterval: 15,
  url: import.meta.env.VITE_UNLEASH_API_URL as string,
};

function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  function Wrapper({ children }: PropsWithChildren<object>): JSX.Element {
    const router = createRouter({ routeTree: createRootRoute({ component: () => children }) });

    return (
      <FlagProvider config={config}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </FlagProvider>
    );
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export { renderWithProviders };
