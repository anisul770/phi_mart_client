import React from 'react';
import useAuthContext from '../hooks/useAuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {
  const { user } = useAuthContext();
  if (user === null && localStorage.getItem("authTokens")) return (<div className='text-center py-10'>
    <span className="loading loading-xl loading-spinner text-error"></span>
  </div>);
  return user ? children : <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;