import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../../authentication/firebase.init';
import PageLoading from '../../components/PageLoading';

const CheckoutForm = ({ parts }) => {
    const stripe = useStripe();
    const navigate = useNavigate();
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    const [success, setSuccess] = useState('')
    const [processing, setProcessing] = useState(false)
    const [transID, setTransID] = useState('')
    const [clientSecret, setClientSecret] = useState("");

    const { _id, totalPrice, productName, quantity, name, email, address, phone } = parts;

    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price: totalPrice })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            })
    }, [totalPrice])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        setCardError(error?.message || '');
        setSuccess('');

        setProcessing(true);

        if (processing) {
            return <PageLoading />
        }

        // confirm payment  
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name,
                        email,
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError?.message)
            setProcessing(false);
        }
        else {
            setCardError('')
            console.log(paymentIntent);
            setTransID(paymentIntent.id);
            setSuccess('Congratulations! Your payment is completed.')

            // payment information 
            const payment = {
                orderId: _id,
                transitionId: paymentIntent.id,
                totalPrice,
                productName,
                quantity,
                name,
                email,
                address,
                phone
            }

            fetch(`http://localhost:5000/order/${_id}`, {
                method: "PATCH",
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        localStorage.removeItem('accessToken')
                        signOut(auth)
                        navigate('/login')
                    }
                    return res.json()
                })
                .then(data => {
                    setProcessing(false);
                    console.log(data);
                })
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className='flex items-end'>
                    <button
                        type="submit"
                        className='btn btn-primary btn-outline btn-sm mt-5'
                        disabled={!stripe || !clientSecret || success}>
                        Pay Now
                    </button>
                    {
                        success && <button onClick={() => navigate('/dashboard/my-orders')} className='btn btn-link btn-xs'>Go to Dashboard</button>
                    }
                </div>
            </form>
            <div>
                {cardError && <p className='text-pink-600'>{cardError}</p>}
                {success && <p className='text-accent'>
                    {success}
                    <br />
                    Transition id: <span className='font-semibold'>{transID}</span>
                </p>}
            </div>
        </>
    );
};

export default CheckoutForm;