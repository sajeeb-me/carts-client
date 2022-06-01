import React from 'react';
import PageLoading from '../../components/PageLoading';
import useUsers from '../../hooks/useUsers';
import RowOfAdminAndUser from './RowOfAdminAndUser';

const AdminsAndUsers = () => {
    const [users, isLoading, refetch] = useUsers();
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