import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../authentication/firebase.init';
import PageLoading from '../../components/PageLoading';
import useAdmin from '../../hooks/useAdmin';

const DashboardSidebar = ({ children }) => {
    const [user] = useAuthState(auth);
    const [admin, isAdminLoading] = useAdmin(user);

    if (isAdminLoading) {
        return <PageLoading />
    }

    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* <!-- Page content here --> */}
                {children}


            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                <ul className="bg-base-100 menu p-4 overflow-y-auto w-52">
                    {/* <!-- Sidebar content here --> */}
                    <li><NavLink to='/dashboard/my-profile'>My Profile</NavLink></li>

                    {
                        !admin &&
                        <div>
                            <li><NavLink to='/dashboard/my-orders'>My Orders</NavLink></li>
                            <li><NavLink to='/dashboard/add-review'>Add A Review</NavLink></li>
                        </div>
                    }

                    {
                        admin &&
                        <div>
                            <li><NavLink to='/dashboard/admin-and-user'>Admins &amp; Users</NavLink></li>
                            <li><NavLink to='/dashboard/manage-orders'>Manage all orders</NavLink></li>
                            <li><NavLink to='/dashboard/add-part'>Add a Part</NavLink></li>
                            <li><NavLink to='/dashboard/manage-tools'>Manage all Parts</NavLink></li>
                        </div>
                    }
                </ul>

            </div>
        </div>
    );
};

export default DashboardSidebar;