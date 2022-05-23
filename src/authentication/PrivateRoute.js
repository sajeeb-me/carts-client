import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import PageLoading from '../components/PageLoading';

const PrivateRoute = () => {
    const location = useLocation();
    const [user, isLoading] = useAuthState(auth);

    if (isLoading) {
        return <PageLoading />
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />;
    }

    return <Outlet />;
};

export default PrivateRoute;