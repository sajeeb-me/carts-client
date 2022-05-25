import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../authentication/firebase.init';
import PageLoading from '../../components/PageLoading';
import CancelOrderModal from './CancelOrderModal';

const MyOrders = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth)
    const [deletingOrder, setDeletingOrder] = useState(null)

    const { data: orders, isLoading, refetch } = useQuery('order', () => fetch(`https://blooming-caverns-13229.herokuapp.com/order?email=${user?.email}`, {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => {
            if (res.status === 401 || res.status === 403) {
                signOut(auth)
                localStorage.removeItem('accessToken')
                navigate('/login')
            }
            return res.json()
        })
    )
    if (isLoading) {
        return <PageLoading />
    }


    return (
        <section className='bg-white p-4 lg:p-8 h-screen overflow-scroll w-full'>
            <h1 className='text-xl font-semibold mb-5'>My Orders</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Total Price</th>
                                <th>Status</th>
                                <th className='text-center'>Action</th>
                                <th>Trans id</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders?.map((order, index) => <tr key={order._id} className='hover'>
                                    <th>{index + 1}</th>
                                    <td>{order.productName}</td>
                                    <td>{order.quantity}</td>
                                    <td>{order.totalPrice}</td>
                                    <td>
                                        {
                                            !order.paid ?
                                                <p className='text-sm'>Pending</p>
                                                :
                                                <p className='text-green-600 font-semibold text-sm'>Shipped</p>
                                        }
                                    </td>
                                    <td>
                                        {!order.transitionId ?
                                            <div className='text-center'>
                                                <button
                                                    onClick={() => navigate(`/dashboard/payment/${order._id}`)}
                                                    className='btn btn-xs lg:btn-sm btn-primary text-white'>Pay now</button>
                                                <label
                                                    for="cancel-order-modal"
                                                    onClick={() => setDeletingOrder(order)}
                                                    className="btn btn-xs lg:btn-sm btn-link text-secondary">
                                                    Cancel
                                                </label>
                                            </div>
                                            :
                                            <p className='text-center text-green-600 font-semibold'>Paid</p>}
                                    </td>
                                    <td>
                                        {(order.transitionId) ? <span className='text-xs'>{order.transitionId}</span> : 'N/A'}
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
                <div>
                    {
                        deletingOrder && <CancelOrderModal
                            deletingOrder={deletingOrder}
                            setDeletingOrder={setDeletingOrder}
                            refetch={refetch}
                        />
                    }
                </div>
            </div>
        </section>
    );
};

export default MyOrders;