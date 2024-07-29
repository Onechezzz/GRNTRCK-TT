// This file is auto-generated by TanStack Router
import { createFileRoute } from '@tanstack/react-router';
import { NotFoundRoute } from '@tanstack/react-router';

// Import Routes
import { Route as rootRoute } from './pages/routes/__root';
import { Route as IndexImport } from './pages/routes/index';
import { Route as UserUserIdImport } from './pages/routes/user/$userId';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

// Create Virtual Routes
const UserIndexLazyImport = createFileRoute('/user/')();
const AuthSignInLazyImport = createFileRoute('/auth/sign-in')();

// Create/Update Routes
const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
});

const UserIndexLazyRoute = UserIndexLazyImport.update({
  path: '/user/',
  getParentRoute: () => rootRoute,
}).lazy(() => import('./pages/routes/user/$userId').then((d) => d.Route));

const AuthSignInLazyRoute = AuthSignInLazyImport.update({
  path: '/auth/sign-in',
  getParentRoute: () => rootRoute,
}).lazy(() => import('./pages/routes/auth/sign-in.lazy').then((d) => d.Route));

const UserUserIdRoute = UserUserIdImport.update({
  path: '/user/$userId',
  getParentRoute: () => rootRoute,
});

const notFoundRoute = new NotFoundRoute({
  getParentRoute: () => rootRoute,
  component: NotFoundPage,
});

// Populate the FileRoutesByPath interface
declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/';
      path: '/';
      fullPath: '/';
      preLoaderRoute: typeof IndexImport;
      parentRoute: typeof rootRoute;
    };
    '/user/$userId': {
      id: '/user/$userId';
      path: '/user/$userId';
      fullPath: '/user/$userId';
      preLoaderRoute: typeof UserUserIdImport;
      parentRoute: typeof rootRoute;
    };
    '/auth/sign-in': {
      id: '/auth/sign-in';
      path: '/auth/sign-in';
      fullPath: '/auth/sign-in';
      preLoaderRoute: typeof AuthSignInLazyImport;
      parentRoute: typeof rootRoute;
    };
    '/user/': {
      id: '/user/';
      path: '/user/';
      fullPath: '/user/';
      preLoaderRoute: typeof UserIndexLazyImport;
      parentRoute: typeof rootRoute;
    };
    '*': {
      id: '*';
      path: '*';
      fullPath: '*';
      preLoaderRoute: typeof NotFoundRoute;
      parentRoute: typeof rootRoute;
    };
  }
}

// Create and export the route tree
export const routeTree = rootRoute.addChildren({
  IndexRoute,
  UserUserIdRoute,
  AuthSignInLazyRoute,
  UserIndexLazyRoute,
  notFoundRoute,
});