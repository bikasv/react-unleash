import { createRouter, RouterProvider } from '@tanstack/react-router';
import { FlagProvider } from '@unleash/proxy-client-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Normalize } from 'styled-normalize';

import { routeTree } from '@/routeTree.gen.ts';
import { setupStore } from '@/store';

import GlobalStyle from './globalStyles';

const router = createRouter({ routeTree });

const config = {
  appName: 'react-unleash',
  clientKey: import.meta.env.VITE_UNLEASH_TOKEN as string,
  disableRefresh: false,
  refreshInterval: 15,
  url: import.meta.env.VITE_UNLEASH_API_URL as string,
};

async function enableMocking() {
  if (import.meta.env.PROD) {
    return;
  }

  const { worker } = await import('../mocks/browser');
  let started = true;

  window.stopMock = async() => {
    if (started) {
      worker.stop();
      started = false;
    } else {
      await worker.start({
        onUnhandledRequest: 'bypass',
      });

      started = true;
    }
  };

  return worker.start({
    onUnhandledRequest: 'bypass',
  });
}

function renderApp() {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <FlagProvider config={config}>
        <Provider store={setupStore({})}>
          <Normalize />
          <GlobalStyle />
          <RouterProvider router={router} />
        </Provider>
      </FlagProvider>
    </React.StrictMode>,
  );
}

enableMocking()
  .then(() => renderApp())
  .catch((err) => { throw err; });
