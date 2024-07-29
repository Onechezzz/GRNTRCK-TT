import { createFileRoute } from '@tanstack/react-router';
import MainPage from '../MainPage/MainPage';

export const Route = createFileRoute('/')({
  component: MainPage,
});
