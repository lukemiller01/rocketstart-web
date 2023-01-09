import React from 'react'
import { Outlet } from 'react-router-dom';
import Loading from '../components/loading/Loading';
import { useUserAuth } from '../context/AuthProvider';

const AuxiliaryRedirect = () => {

    const { user } = useUserAuth();

    return typeof user === 'undefined' ? (
      <Loading/> ) :
      user? ( <Outlet context={{ navOne: 'navbar__hidden', navTwo: '', logoURL: "/home" }}/> ) : ( <Outlet context={{ navOne: '', navTwo: 'navbar__hidden', logoURL: "/" }}/>
    )
}

export default AuxiliaryRedirect