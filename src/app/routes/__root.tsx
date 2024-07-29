// src/routes/__root.tsx
import React from 'react';
import { Link, Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

export const Route = createRootRoute({
  component: () => (
    <>
      <NavigationMenu.Root className="relative z-10 flex w-screen justify-center p-4 bg-gray-100">
        <NavigationMenu.List className="flex list-none rounded-lg bg-white p-2 shadow-md space-x-4">
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="text-violet-700 hover:bg-violet-300 focus:shadow-outline-violet flex items-center justify-between gap-2 rounded-lg px-4 py-2 text-lg font-medium leading-none outline-none">
              Menu
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="absolute top-full left-0 mt-1 w-full bg-white rounded-lg shadow-lg">
              <ul className="list-none p-4 space-y-2">
                <li>
                  <Link
                    to="/"
                    className="block rounded-lg px-4 py-2 text-lg font-medium hover:bg-violet-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="block rounded-lg px-4 py-2 text-lg font-medium hover:bg-violet-300"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="block rounded-lg px-4 py-2 text-lg font-medium hover:bg-violet-300"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>

      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
