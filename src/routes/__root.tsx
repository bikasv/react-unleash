import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { useFlag } from '@unleash/proxy-client-react';

import { Header } from '@/components';

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  const showSidebar = useFlag('show.posts');

  return (
    <>
      <Header showSidebar={showSidebar} />

      <main className="page">
        <Outlet />
      </main>

      {import.meta.env.DEV && <TanStackRouterDevtools />}
    </>
  );
}
