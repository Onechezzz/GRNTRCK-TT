import { act, renderHook } from '@testing-library/react';
import { useNavigate } from '@tanstack/react-router';
import { BehaviorSubject } from 'rxjs';
import { vi } from 'vitest';
import { useAuthContext } from '../fearures/auth/AuthContext';
import { useMainLayout } from '../fearures/auth/hooks/useMainLayout';

vi.mock('@tanstack/react-router', () => ({
  useNavigate: vi.fn(),
}));

vi.mock('../fearures/auth/AuthContext', () => ({
  // Corrected path
  useAuthContext: vi.fn(),
}));

describe('useMainLayout', () => {
  const mockNavigate = vi.fn();
  const mockIsAuthenticated$ = new BehaviorSubject<boolean>(false);
  const mockUserId$ = new BehaviorSubject<string | null>(null);
  const mockLogOut = vi.fn();

  beforeEach(() => {
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
    (useAuthContext as jest.Mock).mockReturnValue({
      isAuthenticated$: mockIsAuthenticated$,
      logOut: mockLogOut,
      userId$: mockUserId$,
    });

    localStorage.clear();
  });

  afterEach(() => {
    vi.clearAllMocks();
    mockIsAuthenticated$.next(false);
    mockUserId$.next(null);
  });

  it('should return initial auth state and userId', () => {
    const { result } = renderHook(() => useMainLayout());

    expect(result.current.isAuthenticated).toBe(false);
    expect(result.current.userId).toBeNull();
  });

  it('should handle log out correctly', () => {
    const { result } = renderHook(() => useMainLayout());

    act(() => {
      result.current.handleLogOut();
    });

    expect(mockLogOut).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith({ to: '/auth/sign-in' });
  });

  it('should update auth state and userId correctly', () => {
    act(() => {
      mockIsAuthenticated$.next(true);
      mockUserId$.next('32228');
    });

    const { result } = renderHook(() => useMainLayout());

    expect(result.current.isAuthenticated).toBe(true);
    expect(result.current.userId).toBe('32228');
  });
});
