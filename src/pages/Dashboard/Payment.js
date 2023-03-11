import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useQuery } from 'react-query';
import { Navigate, useParams } from 'react-router-dom';
import auth from '../../authentication/firebase.init';
import PageLoading from '../../components/PageLoading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L0e9UKXLIT8vsGRYvQEWCxHR0302RSzSjpHMvYk5uIRqJXzhEfAfXsDGSM45kzJjOXyk79u1gZmsM6KSXcULlrd00vAYSRIIu');

const Payment = () => {
    const { id } = useParams()

    const { data: parts, isLoading } = useQuery(['parts', id], () => fetch(`https://carts-server.vercel.app/order/${id}`, {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
    })
        .then(res => {
            if (res.status === 401 || res.status === 403) {
                localStorage.removeItem('accessToken')
                signOut(auth)
                Navigate('/login')
            }
            return res.json()
        }))

    if (isLoading) {
        return <PageLoading />
    }

    const { productName, unitPrice, quantity, totalPrice, name, email, address, phone } = parts;

    return (
        <section className='bg-white p-4 lg:p-8 h-screen overflow-scroll w-full'>
            <h1 className='text-xl font-semibold mb-5'>Make Payment</h1>
            <div className="hero-content flex-col lg:flex-row items-start">
                <div className="card w-full shadow-xl bg-base-100">
                    <div className="card-body">
                        <h1 className='text-primary-focus font-semibold'>Hello {name}</h1>
                        <p className='text-lg font-semibold'>Bill for : <span className='uppercase'>{productName}</span> </p>
                        <section>
                            <div className='flex justify-between'>
                                <div>
                                    <p>Unit price</p>
                                    <p>Quantity</p>
                                </div>
                                <div className='text-right'>
                                    <p>${unitPrice?.toLocaleString('en-US')}/-</p>
                                    <p>{quantity?.toLocaleString('en-US')}</p>
                                </div>
                            </div>

                            <hr className='border-secondary my-1' />

                            <div className='flex justify-between font-semibold'>
                                <div>
                                    <p>Total price</p>
                                </div>
                                <div>
                                    <p>${totalPrice?.toLocaleString('en-US')}/-</p>
                                </div>
                            </div>

                            <p className='before:border before:border-primary text-sm font-semibold mt-5 mb-2'>Additional Information</p>

                            <div className='flex justify-between text-sm'>
                                <div>
                                    <p>Name</p>
                                    <p>Email</p>
                                    <p>Delivery Address</p>
                                    <p>Contact no</p>
                                </div>
                                <div className='text-right'>
                                    <p>{name}</p>
                                    <p>{email}</p>
                                    <p>{address}</p>
                                    <p>{phone}</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="card w-full h-52 shadow-xl bg-base-100">
                    <div className="card-body">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm parts={parts} />
                        </Elements>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Payment;