import { useEffect } from 'react';
import { createRootRoute, Link, Outlet, useNavigate } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate({to: '/chci-nabidku'});
  }, []);

  return (
    <div>
      <Outlet />
    </div>
  );
}