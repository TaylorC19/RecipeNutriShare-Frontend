import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from './context/AuthContext';

interface PropsInterface {
  children: ReactNode;
}

function ProtectedRouteSignIn({ children }:PropsInterface) {
  const { user } = UserAuth();

  // if (Object.keys(user).length === 0) {
  if (!user) {
    return <>{children}</>;
  }
  return <Navigate to='/' />;
}

export default ProtectedRouteSignIn;