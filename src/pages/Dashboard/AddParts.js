import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../authentication/firebase.init';

const AddParts = () => {

    const [user] = useAuthState(auth)
    const navigate = useNavigate();

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {

        const importedPart = {
            ...data,
            importedBy: user.email
        }
        // console.log(importedPart);
        fetch('http://localhost:5000/part', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(importedPart)
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
                    toast.success(data.name, 'is successfully imported.')
                }
            })
    };

    return (
        <section className='bg-white p-4 lg:p-8 h-screen overflow-scroll w-full'>
            <h1 className='text-xl font-semibold mb-5'>Add a Part</h1>
            <div>
                <section>
                    <div className='text-center mx-auto lg:shadow-xl rounded-xl p-10 m-10 border'>
                        <h1 className='text-lg lg:text-xl font-semibold text-primary uppercase mb-5'>Every field should be filled to import a new part</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>




                            <div className='flex flex-col lg:flex-row gap-5'>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold">Product Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        {...register("name", {
                                            required: {
                                                value: true,
                                                message: "Product name is required"
                                            }
                                        })}
                                        className={`input input-bordered  ${errors.name && 'border-pink-600'}`}
                                    />
                                    <label className="label">
                                        {errors.name?.type === 'required' && <span className="label-text-alt text-pink-600">{errors.name.message}</span>}
                                    </label>
                                </div>

                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold">Product Image url</span>
                                    </label>
                                    <input
                                        type="url"
                                        {...register("image", {
                                            required: {
                                                value: true,
                                                message: "Image url is required"
                                            }
                                        })}
                                        className={`input input-bordered  ${errors.image && 'border-pink-600'}`}
                                    />
                                    <label className="label">
                                        {errors.image?.type === 'required' && <span className="label-text-alt text-pink-600">{errors.image.message}</span>}
                                    </label>
                                </div>

                            </div>

                            <div className='flex flex-col lg:flex-row gap-5'>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold">Product Price (usd)</span>
                                    </label>
                                    <input
                                        type="number"
                                        {...register("price", {
                                            required: {
                                                value: true,
                                                message: "Price is required"
                                            }
                                        })}
                                        className={`input input-bordered  ${errors.price && 'border-pink-600'}`}
                                    />
                                    <label className="label">
                                        {errors.price?.type === 'required' && <span className="label-text-alt text-pink-600">{errors.price.message}</span>}
                                    </label>
                                </div>

                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold">Product Quantity</span>
                                    </label>
                                    <input
                                        type="number"
                                        {...register("available", {
                                            required: {
                                                value: true,
                                                message: "Quantity is required"
                                            }
                                        })}
                                        className={`input input-bordered  ${errors.available && 'border-pink-600'}`}
                                    />
                                    <label className="label">
                                        {errors.available?.type === 'required' && <span className="label-text-alt text-pink-600">{errors.available.message}</span>}
                                    </label>
                                </div>

                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold">Minimum Order</span>
                                    </label>
                                    <input
                                        type="number"
                                        {...register("minOrder", {
                                            required: {
                                                value: true,
                                                message: "Minimum Order is required"
                                            }
                                        })}
                                        className={`input input-bordered  ${errors.minOrder && 'border-pink-600'}`}
                                    />
                                    <label className="label">
                                        {errors.minOrder?.type === 'required' && <span className="label-text-alt text-pink-600">{errors.minOrder.message}</span>}
                                    </label>
                                </div>
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-semibold">Product Overview</span>
                                </label>
                                <textarea
                                    type="textarea"
                                    {...register("overview", {
                                        required: {
                                            value: true,
                                            message: "Product Overview is required"
                                        }
                                    })}
                                    className={`input input-bordered h-32  ${errors.overview && 'border-pink-600'}`}
                                />
                                <label className="label">
                                    {errors.overview?.type === 'required' && <span className="label-text-alt text-pink-600">{errors.overview.message}</span>}
                                </label>
                            </div>

                            {/* submit button  */}
                            <input type="submit" value="Update profile" className="w-full btn btn-primary font-semibold text-white bg-gradient-to-r from-secondary to-primary border-0 mt-8 tracking-wider" />
                        </form>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default AddParts;