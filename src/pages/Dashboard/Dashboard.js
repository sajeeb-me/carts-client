import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from './DashboardSidebar';

const Dashboard = () => {
    return (
        <DashboardSidebar>
            <Outlet />
        </DashboardSidebar>
    );
};

export default Dashboard;