import React from 'react'
import { useSearchParams } from 'react-router-dom';
import { ResetPassword, VerifyEmail } from './components';
import NotFound from '../notfound/NotFound';

// https://rocketstart-careers.firebaseapp.com/__/auth/action?mode=verifyEmail&oobCode=yQyK1z_KF7kAtET4rWXRVi5XVj4a3zO_S2ziU30PAGkAAAGFmRDhLw&apiKey=AIzaSyCjTBBUn1bG4keC3RhGCm85yhpcflkuycA&lang=en

// Change to:

// https://rocketstart.careers/auth/action/

// Temporarily (testing)

// http://localhost:3000/auth/action/

const Action = () => {
    
    const [searchParams] = useSearchParams();

    var mode = searchParams.get('mode');
    var actionCode = searchParams.get('oobCode');

    switch (mode) {
        case 'verifyEmail':
            return <VerifyEmail actionCode={actionCode}/>
        case 'resetPassword':
            return <ResetPassword actionCode={actionCode}/>
        default:
            return <NotFound/> // If there's no query parameter, return 404.
    }
}

export default Action