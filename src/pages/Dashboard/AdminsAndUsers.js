import { signOut } from 'firebase/auth';
import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../authentication/firebase.init';
import PageLoading from '../../components/PageLoading';
import RowOfAdminAndUser from './RowOfAdminAndUser';

const AdminsAndUsers = () => {
    const navigate = useNavigate();
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://blooming-caverns-13229.herokuapp.com/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
        if (res.status === 401 || res.status === 403) {
            signOut(auth)
            localStorage.removeItem('accessToken')
            navigate('/login')
        }
        return res.json()
    }))
    if (isLoading) {
        return <PageLoading />
    }
    return (
        <section className='bg-slate-100 p-4 lg:p-8 h-screen overflow-scroll w-full'>
            {
                users &&
                <div>
                    <h1 className='text-xl font-semibold mb-5'>Admins &amp; Users</h1>
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Email</th>
                                        <th className='text-right'>Make admin</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users?.map((user, index) => <RowOfAdminAndUser
                                            key={user._id}
                                            user={user}
                                            refetch={refetch}
                                            index={index} />)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            }
        </section>
    );
};

export default AdminsAndUsers;