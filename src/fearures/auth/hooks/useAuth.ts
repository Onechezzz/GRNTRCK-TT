import { useMemo } from 'react';
import { BehaviorSubject } from 'rxjs';

import AuthService from '../../../core/services/AuthService';
import container from '../../../core/DI/Container';

export const useAuth = () => {
  const authService = useMemo(
    () => container.resolve<AuthService>('AuthService'),
    []
  );
  const isAuthenticated$ = useMemo(
    () => new BehaviorSubject<boolean>(false),
    []
  );
  const userId$ = useMemo(() => new BehaviorSubject<string | null>(null), []);

  const signIn = async (
    email: string,
    password: string
  ): Promise<{ isAuthenticated: boolean; userId?: string }> => {
    const result = await authService.signIn(email, password).toPromise();
    console.log('useAuth - signIn result:', result);
    return result || { isAuthenticated: false, userId: undefined };
  };

  const logOut = () => {
    authService.logOut();
  };

  return {
    authService,
    isAuthenticated$,
    userId$,
    signIn,
    logOut,
  };
};
