import { type ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAtomValue } from 'jotai';
import { tokenAtom } from '../../atoms/auth/auth.atoms';
import { ROUTES } from '../../constants/routes';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const token = useAtomValue(tokenAtom);
  const location = useLocation();

  if (!token) {
    return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;