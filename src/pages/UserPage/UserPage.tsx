import { useParams } from '@tanstack/react-router';
import { useAuthRedirect } from '../../fearures/auth/hooks/useAuthRedirect';
import { useAuthContext } from '../../fearures/auth/AuthContext';

const UserPage = () => {
  useAuthRedirect();
  const { userId } = useParams({ from: '/user/$userId' });
  const { userId$ } = useAuthContext();

  if (userId !== userId$.value) {
    return (
      <div className="bg-cyberBlack text-cyberPurple">Unauthorized...</div>
    );
  }

  return (
    <div className="flex lg:rt-r-fd-column items-center justify-center min-h-screen bg-cyberBlack text-cyberPurple">
      <h1 className="text-2xl font-bold">Hello User: {userId}</h1>
      <p>This ID came from local.Storage</p>
    </div>
  );
};

export default UserPage;
