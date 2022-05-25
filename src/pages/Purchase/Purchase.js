import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import PageLoading from '../../components/PageLoading';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../authentication/firebase.init';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';

const Purchase = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [user] = useAuthState(auth)
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { data: product, isLoading, refetch } = useQuery(['product', id], () => fetch(`https://blooming-caverns-13229.herokuapp.com/part/${id}`, {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
    })
        .then(res => {
            if (res.status === 401 || res.status === 403) {
                localStorage.removeItem('accessToken')
                signOut(auth)
                navigate('/login')
            }
            return res.json()
        }))

    if (isLoading) {
        return <PageLoading />
    }

    const { name, image, overview, price, minOrder, available } = product;


    const onSubmit = async (data) => {
        const submittedOrder = {
            productName: name,
            unitPrice: price,
            quantity: parseInt(data.quantity),
            totalPrice: price * data.quantity,
            name: user?.displayName,
            email: user?.email,
            address: data.address,
            phone: data.phone,
            notes: data.notes
        }
        // console.log(submittedOrder);
        fetch('https://blooming-caverns-13229.herokuapp.com/order', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(submittedOrder)
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
                console.log(data);
                if (data.acknowledged) {
                    reset();
                    toast.success(`Order placed for ${name}`)
                    refetch();
                    navigate('/dashboard/my-orders')
                }
            })
    };

    return (
        <section className='px-4 lg:px-20 my-10'>

            <div className='flex flex-col-reverse md:flex-row gap-5'>
                <div>
                    <figure className='h-96 w-full'>
                        <img src={image} alt="Shoes" className="rounded-xl h-full w-full" />
                    </figure>
                    <div className='mt-2 px-2'>
                        <p className='text-lg font-semibold'>Overview :</p>
                        <p className='text-gray-600 text-sm lg:text-base'>{overview}</p>
                    </div>
                </div>
                <div>
                    <h1 className='text-xl lg:text-2xl font-semibold text-primary-focus mb-8 text-center uppercase'>Fill this form to place order</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* product information  */}
                        <p className='before:border before:border-primary font-semibold uppercase tracking-wider my-3'>Product Information</p>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Product Name</span>
                            </label>
                            <input
                                type="text"
                                value={name}
                                className="input input-bordered w-full mb-3 font-semibold uppercase"
                                disabled
                            />
                        </div>

                        {/* minimum order and available product  */}
                        <div className='flex gap-5'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-semibold">Minimum Order</span>
                                </label>
                                <input
                                    type="text"
                                    value={parseInt(minOrder)?.toLocaleString('en-US')}
                                    className="input input-bordered w-full mb-3 font-semibold uppercase"
                                    disabled
                                />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-semibold">Available Products</span>
                                </label>
                                <input
                                    type="text"
                                    value={parseInt(available)?.toLocaleString('en-US')}
                                    className="input input-bordered w-full mb-3 font-semibold uppercase"
                                    disabled
                                />
                            </div>
                        </div>

                        {/* price and quantity  */}
                        <div className='flex justify-between w-full'>
                            <div className="form-control mb-3 w-full">
                                <label className="label">
                                    <span className="label-text font-semibold">Unit Price</span>
                                </label>
                                <label className="input-group">
                                    <input
                                        type="text"
                                        value={parseInt(price)?.toLocaleString('en-US')}
                                        className="input input-bordered font-semibold w-full"
                                        disabled
                                    />
                                    <span>USD</span>
                                </label>
                            </div>

                            <div className="form-control mb-5 w-1/2 md:w-full ml-10">
                                <label className="label">
                                    <span className="label-text font-semibold">Quantity</span>
                                </label>
                                <input
                                    type="number"
                                    defaultValue={minOrder}
                                    {...register("quantity", {
                                        required: {
                                            value: true,
                                            message: "Quantity is required"
                                        },
                                        min: {
                                            value: `${minOrder}`,
                                            message: `Quantity must be greater then or equal to ${minOrder}`
                                        },
                                        max: {
                                            value: `${available}`,
                                            message: `Quantity can't be greater then ${available}`
                                        }
                                    })}
                                    className={`input input-bordered  ${errors.quantity && 'border-pink-600'}`}
                                />
                                <label className="label">
                                    {errors.quantity?.type === 'required' && <span className="label-text-alt text-pink-600">{errors.quantity.message}</span>}
                                    {errors.quantity?.type === 'min' && <span className="label-text-alt text-pink-600">{errors.quantity.message}</span>}
                                    {errors.quantity?.type === 'max' && <span className="label-text-alt text-pink-600">{errors.quantity.message}</span>}
                                </label>
                            </div>



                        </div>


                        {/* user's information  */}
                        <p className='before:border before:border-primary font-semibold uppercase tracking-wider my-3'>User's Information</p>
                        <input
                            type="text"
                            value={user?.displayName}
                            className="input input-bordered w-full mb-3"
                            disabled
                        />
                        <input
                            type="email"
                            value={user?.email}
                            className="input input-bordered w-full mb-3"
                            disabled
                        />
                        <input
                            type="text"
                            placeholder='Delivery address'
                            {...register("address", { required: true })}
                            className="input input-bordered w-full mb-3"
                        />
                        <input
                            type="text"
                            placeholder='Your Contact no'
                            {...register("phone", { required: true })}
                            className="input input-bordered w-full mb-3"
                        />
                        <textarea
                            type="textarea"
                            placeholder='Additional notes'
                            {...register("notes")}
                            className="input input-bordered w-full mb-3 h-20"
                        />

                        {/* submit button  */}
                        <input
                            type="submit"
                            value="Place order"
                            className="w-full btn btn-primary font-semibold text-white"
                            disabled={errors.quantity}
                        />
                    </form>
                </div>
            </div>

        </section>
    );
};

export default Purchase;