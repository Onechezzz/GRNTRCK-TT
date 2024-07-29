import { Observable, of } from 'rxjs';

class AuthService {
  signIn(
    email: string,
    password: string
  ): Observable<{ isAuthenticated: boolean; userId?: string }> {
    const isAuthenticated =
      email === 'admin@gmail.com' && password === 'password';

    const userId = isAuthenticated ? '32228' : undefined;

    console.log('signIn - email:', email);
    console.log('signIn - password:', password);
    console.log('signIn - isAuthenticated:', isAuthenticated);
    console.log('signIn - userId:', userId);

    if (isAuthenticated && userId) {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userId', userId);
    }

    return of({ isAuthenticated, userId });
  }

  logOut(): void {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userId');
  }

  getAuthState(): { isAuthenticated: boolean; userId: string | null } {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    const userId = isAuthenticated ? localStorage.getItem('userId') : null;
    return { isAuthenticated, userId };
  }
}

export default AuthService;
