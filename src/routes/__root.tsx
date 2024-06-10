import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { useFlag } from '@unleash/proxy-client-react';

import { Header } from '@/components';

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  const showPosts = useFlag('show.posts');

  return (
    <>
      <Header showPosts={showPosts} />

      <main className="page">
        <Outlet />
      </main>

      {import.meta.env.DEV && <TanStackRouterDevtools />}
    </>
  );
}
