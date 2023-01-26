import React from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Loading from '../components/loading/Loading';
import { NotFound } from '../pages';

const HomeRedirect = () => {

    const { search } = useLocation();
    const urlQuery = new URLSearchParams(search);
    const stateParam = urlQuery.get('session_id');

    return typeof stateParam === 'undefined' ? (
      <Loading/> ) :
      stateParam? ( <Outlet /> ) : ( <NotFound/>
    )
}

export default HomeRedirect