import { createRouter, RouterProvider } from '@tanstack/react-router';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Normalize } from 'styled-normalize';

import { routeTree } from '@/routeTree.gen.ts';
import { setupStore } from '@/store';

import GlobalStyle from './globalStyles';

const router = createRouter({ routeTree });

async function enableMocking() {
  if (import.meta.env.PROD) {
    return;
  }

  const { worker } = await import('../mocks/browser');

  return worker.start({
    onUnhandledRequest: 'bypass',
  });
}

function renderApp() {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <Provider store={setupStore({})}>
        <Normalize />
        <GlobalStyle />
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>,
  );
}

enableMocking()
  .then(() => renderApp())
  .catch((err) => { throw err; });
