import { createFileRoute } from '@tanstack/react-router';
import UserPage from '../../UserPage/UserPage';

export const Route = createFileRoute('/user/$userId')({
  component: () => <UserPage />,
});
