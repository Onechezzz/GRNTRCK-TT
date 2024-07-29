import React, { Suspense } from 'react';
import { RouterProvider } from '@tanstack/react-router';
import { Theme } from '@radix-ui/themes';

import AuthService from '../core/services/AuthService';

import { router } from './router';
import '@radix-ui/themes/styles.css';
import container from '../core/DI/Container';
import { AuthProvider } from '../fearures/auth/AuthContext';

container.register('AuthService', AuthService);

const App: React.FC = () => {
  const authServiceInstance = container.resolve<AuthService>('AuthService');
  console.log('Resolved AuthService instance:', authServiceInstance);

  return (
    <AuthProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Theme>
          <div className="form-root">
            <RouterProvider router={router} />
          </div>
        </Theme>
      </Suspense>
    </AuthProvider>
  );
};
export default App;
