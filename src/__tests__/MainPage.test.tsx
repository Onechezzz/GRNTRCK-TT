import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MainPage from '../pages/MainPage/MainPage';

describe('MainPage', () => {
  it('renders MainPage with correct text', () => {
    render(<MainPage />);

    const heading = screen.getByText(/Hello world!/i);
    expect(heading).toBeInTheDocument();

    expect(heading).toHaveClass('text-ellipsis text-3xl font-bold');
  });
});
