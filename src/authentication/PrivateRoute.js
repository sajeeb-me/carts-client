import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';

const PrivateRoute = () => {
    const location = useLocation();
    const [user] = useAuthState(auth);

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />;
    }

    return <Outlet />;
};

export default PrivateRoute;