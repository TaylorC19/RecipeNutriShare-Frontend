import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from './context/AuthContext';

interface PropsInterface {
  children: ReactNode
}


function ProtectedRoute({ children }:PropsInterface) {
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to='/signup' />
  }
  return <>{children}</>;
}

export default ProtectedRoute