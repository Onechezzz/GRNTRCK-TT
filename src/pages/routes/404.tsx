import { createLazyFileRoute } from '@tanstack/react-router';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

export const notFoundRoute = createLazyFileRoute('*')({
  component: NotFoundPage,
});
