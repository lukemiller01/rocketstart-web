import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useUserAuth } from '../context/AuthProvider';

const PrivateRoutes = () => {

    const { user } = useUserAuth()

  return (
    user? <Outlet/> : <Navigate to="/sign_up"/>
  )
}

export default PrivateRoutes