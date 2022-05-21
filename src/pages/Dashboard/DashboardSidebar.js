import React from 'react';
import { NavLink } from 'react-router-dom';

const DashboardSidebar = ({ children }) => {
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* <!-- Page content here --> */}
                {children}


            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-300 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><NavLink to='/dashboard/my-orders'>My Orders</NavLink></li>
                    <li><NavLink to='/dashboard/add-review'>Add A Review</NavLink></li>
                    <li><NavLink to='/dashboard/my-profile'>My Profile</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default DashboardSidebar;