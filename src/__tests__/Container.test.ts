import { describe, it, expect } from 'vitest';

import { vi } from 'vitest';
import container from '../core/DI/Container';
import AuthService from '../core/services/AuthService';

describe('Container', () => {
  it('should register and resolve services', () => {
    class MockAuthService {
      signIn = vi.fn();
      logOut = vi.fn();
      getAuthState = vi.fn();
    }

    container.register('AuthService', MockAuthService as any);
    const resolvedService = container.resolve<AuthService>('AuthService');

    expect(resolvedService).toBeInstanceOf(MockAuthService);
  });

  it('should throw an error if service not found', () => {
    expect(() => container.resolve('NonExistingService')).toThrow(
      'Service not found: NonExistingService'
    );
  });
});