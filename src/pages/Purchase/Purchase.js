import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import PageLoading from '../../components/PageLoading';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../authentication/firebase.init';

const Purchase = () => {
    const { id } = useParams()
    const [user] = useAuthState(auth)
    const { register, formState: { errors }, handleSubmit } = useForm();

    const { data: product, isLoading, refetch } = useQuery('product', () => fetch(`http://localhost:5000/part/${id}`).then(res => res.json()))

    if (isLoading) {
        return <PageLoading />
    }

    const { name, image, overview, price, minOrder, available } = product;

    let quantity = '';
    const onSubmit = async (data) => {

        console.log(data);
    };

    return (
        <section className='px-4 lg:px-20'>

            <div className='grid grid-cols-2 gap-5 border'>
                <div>
                    <figure className='h-96 w-full'>
                        <img src={image} alt="Shoes" className="rounded-xl h-full w-full" />
                    </figure>
                    <div className='flex justify-between'>
                        <p>Min order: {minOrder} piece</p>
                        <p>Available: {available.toLocaleString('en-US')} piece</p>
                    </div>
                    <hr className='my-2' />
                    <p>{overview}</p>
                </div>
                <div>
                    <h1 className='text-xl font-semibold text-primary mb-3 text-center uppercase'>Fill this form to place order</h1>
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

                        {/* price  */}
                        <div className='flex justify-between'>
                            <div className="form-control mb-3">
                                <label className="label">
                                    <span className="label-text font-semibold">Unit Price</span>
                                </label>
                                <label className="input-group">
                                    <input
                                        type="text"
                                        value={price?.toLocaleString('en-US')}
                                        className="input input-bordered font-semibold"
                                        disabled
                                    />
                                    <span>USD</span>
                                </label>
                            </div>
                            <div className="form-control mb-3">
                                <label className="label">
                                    <span className="label-text font-semibold">Total Price</span>
                                </label>
                                <label className="input-group">
                                    <input
                                        type="text"
                                        value={(quantity ? price * quantity : price * minOrder)?.toLocaleString('en-US')}
                                        className="input input-bordered font-semibold"
                                        disabled
                                    />
                                    <span>USD</span>
                                </label>
                            </div>
                        </div>

                        <div className="form-control w-full mb-5">
                            <label className="label">
                                <span className="label-text font-semibold">Quantity</span>
                            </label>
                            <input
                                type="number"
                                defaultValue={minOrder}
                                {...register("quantity", {
                                    min: {
                                        value: `${minOrder}`,
                                        message: `Quantity must be greater then or equal to ${minOrder}`
                                    },
                                    max: {
                                        value: `${available}`,
                                        message: `Quantity can't be greater then ${available}`
                                    }
                                })}
                                className="input input-bordered w-full" />
                            <label className="label">
                                {errors.quantity?.type === 'min' && <span className="label-text-alt text-pink-600">{errors.quantity.message}</span>}
                                {errors.quantity?.type === 'max' && <span className="label-text-alt text-pink-600">{errors.quantity.message}</span>}
                            </label>
                        </div>


                        {/* user's information  */}
                        <p className='before:border before:border-primary font-semibold uppercase tracking-wider my-3'>User's Information</p>
                        <input
                            type="text"
                            value={user.displayName}
                            className="input input-bordered w-full mb-3"
                            disabled
                        />
                        <input
                            type="email"
                            value={user.email}
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
                        <input type="submit" value="Place order" className="w-full btn btn-primary font-semibold text-white" />
                    </form>
                </div>
            </div>

        </section>
    );
};

export default Purchase;