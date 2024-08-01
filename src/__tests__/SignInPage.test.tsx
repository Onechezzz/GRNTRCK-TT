import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import container from '../core/DI/Container';
import { AuthProvider } from '../fearures/auth/AuthContext';
import SignInPage from '../pages/auth/SignInPage';

class MockAuthService {
  signIn = vi
    .fn()
    .mockResolvedValue({ isAuthenticated: true, userId: '12345' });

  getAuthState = vi
    .fn()
    .mockReturnValue({ isAuthenticated: true, userId: '12345' });
}

beforeAll(() => {
  container.register('AuthService', MockAuthService);
});

vi.mock('../../../features/forms/components/SignInForm', () => {
  return {
    default: () => <div data-testid="sign-in-form">SignInForm</div>,
  };
});

describe('SignInPage', () => {
  it('renders SignInForm', () => {
    render(
      <AuthProvider>
        <SignInPage />
      </AuthProvider>
    );

    expect(screen.getByTestId('sign-in-form')).toBeInTheDocument();
  });
});
