import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../authentication/firebase.init';
import PageLoading from '../../components/PageLoading';
import useAdmin from '../../hooks/useAdmin';
import { FaRegUser, FaList } from 'react-icons/fa';
import { BsChatLeftText, BsTools } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { BiMessageSquareAdd } from 'react-icons/bi';

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
                <ul className="bg-base-100 menu p-4 overflow-y-auto w-56">
                    {/* <!-- Sidebar content here --> */}
                    <li>
                        <NavLink to='/dashboard/my-profile'>
                            <FaRegUser className='text-lg' />
                            My Profile
                        </NavLink>
                    </li>

                    {
                        !admin &&
                        <div>
                            <li>
                                <NavLink to='/dashboard/my-orders'>
                                    <FaList className='text-lg' />
                                    My Orders
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/add-review'>
                                    <BsChatLeftText className='text-lg' />
                                    Add A Review
                                </NavLink>
                            </li>
                        </div>
                    }

                    {
                        admin &&
                        <div>
                            <li>
                                <NavLink to='/dashboard/admin-and-user'>
                                    <FiUsers className='text-lg' />
                                    Admins &amp; Users
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/manage-orders'>
                                    <FaList className='text-lg' />
                                    Manage all orders
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/add-part'>
                                    <BiMessageSquareAdd className='text-2xl' />
                                    Add a Part
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/manage-tools'>
                                    <BsTools className='text-lg' />
                                    Manage all Parts
                                </NavLink>
                            </li>
                        </div>
                    }
                </ul>

            </div>
        </div>
    );
};

export default DashboardSidebar;