import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useUserAuth } from '../context/AuthProvider';

const PrivateRoutes = () => {

  const { user } = useUserAuth();

  return typeof user === 'undefined' ? (
    <h1>Loading.....</h1> ) :
    user? ( <Outlet/> ) : (<Navigate to="/login"/>
  )
}

export default PrivateRoutes