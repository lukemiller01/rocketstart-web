import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useUserAuth } from '../context/AuthProvider';

const UserRedirect = () => {

    const { user } = useUserAuth();

    return typeof user === 'undefined' ? (
      <h1>Loading.....</h1> ) :
      user? ( <Navigate to="/message"/> ) : (<Outlet/>
    )
}

export default UserRedirect