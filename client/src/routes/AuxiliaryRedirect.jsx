import React from 'react'
import { Outlet } from 'react-router-dom';
import { useUserAuth } from '../context/AuthProvider';

const AuxiliaryRedirect = () => {

    const { user } = useUserAuth();

    return typeof user === 'undefined' ? (
      <h1>Loading.....</h1> ) :
      user? ( <Outlet context={{ navOne: 'navbar__hidden', navTwo: '', logoURL: "/home" }}/> ) : ( <Outlet context={{ navOne: '', navTwo: 'navbar__hidden', logoURL: "/" }}/>
    )
}

export default AuxiliaryRedirect