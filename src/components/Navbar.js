import React from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const navItems = [
        <li><NavLink className="rounded" to='/'>Home</NavLink></li>,
        <li><NavLink className="rounded" to='/purchase'>Purchase</NavLink></li>,
        <li><NavLink className="rounded" to='/dashboard/my-orders'>Dashboard</NavLink></li>,
        <li><NavLink className="rounded" to='/blogs'>Blogs</NavLink></li>,
        <li><NavLink className="rounded" to='/portfolio'>Portfolio</NavLink></li>,
        <button className="rounded btn btn-primary btn-outline" onClick={() => navigate('/login')}>Login</button>
    ]
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* <!-- Navbar --> */}
                <div className="w-full navbar bg-base-300 lg:px-20">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2 text-xl font-semibold uppercase"><Link to='/'>Carts</Link></div>
                    {
                        location?.pathname.includes('/dashboard') &&
                        <label htmlFor="dashboard-drawer" className="btn btn-square btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                        </label>
                    }
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal uppercase">
                            {/* <!-- Navbar menu content here --> */}
                            {navItems}
                        </ul>
                    </div>
                </div>
                {/* <!-- Page content here --> */}
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
                    {/* <!-- Sidebar content here --> */}
                    {navItems}

                </ul>

            </div>
        </div >
    );
};

export default Navbar;