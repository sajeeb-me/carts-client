import { signOut } from 'firebase/auth';
import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../authentication/firebase.init';
import PageLoading from '../../components/PageLoading';
import RowOfTools from './RowOfTools';

const ManageTools = () => {
    const navigate = useNavigate();
    const { data: tools, isLoading, refetch } = useQuery('tools', () => fetch('http://localhost:5000/part', {
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
                tools &&
                <div>
                    <h1 className='text-xl font-semibold mb-5'>Manage all Parts</h1>
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Product Name</th>
                                        <th>Price</th>
                                        <th>Available</th>
                                        <th className='text-right pr-10'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        tools?.map((tool, index) => <RowOfTools
                                            key={tool._id}
                                            tool={tool}
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
export default ManageTools;