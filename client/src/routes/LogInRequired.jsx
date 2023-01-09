import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import Loading from '../components/loading/Loading';
import { useUserAuth } from '../context/AuthProvider';

const LogInRequired = () => {

  const { user } = useUserAuth();

  return typeof user === 'undefined' ? (
    <Loading/> ) :
    user? ( <Outlet/> ) : (<Navigate to="/login"/>
  )
}

export default LogInRequired