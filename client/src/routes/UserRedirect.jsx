import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Loading from '../components/loading/Loading';
import { useUserAuth } from '../context/AuthProvider';

const UserRedirect = () => {

    const { user } = useUserAuth();

    return typeof user === 'undefined' ? (
      <Loading/> ) :
      user? ( <Navigate to="/message"/> ) : ( <Outlet context={{ navOne: '', navTwo: 'navbar__hidden', logoURL: "/" }}/>
    )
}

export default UserRedirect