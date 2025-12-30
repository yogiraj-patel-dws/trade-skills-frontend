import { type ReactNode } from 'react';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  // Temporarily bypass authentication - always return true
  const isAuthenticated = true;

  if (!isAuthenticated) {
    // Redirect to login when authentication is implemented
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;