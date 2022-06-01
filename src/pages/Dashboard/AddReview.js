import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../authentication/firebase.init';
import PageLoading from '../../components/PageLoading';
import useProfile from '../../hooks/useProfile';

const AddReview = () => {
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user, isLoading] = useAuthState(auth)
    const [usersProfile, isUserLoading, refetch] = useProfile(user)
    const [imageLoading, setImageLoading] = useState(false)
    const [imgURL, setImgURL] = useState('')

    if (isLoading || isUserLoading) {
        return <PageLoading />
    }

    const handleUploadImage = e => {
        setImageLoading(true)
        const img = (e.target.files[0]);
        const formData = new FormData();
        formData.append('image', img);

        fetch(`https://api.imgbb.com/1/upload?key=c1e87660595242c0175f82bb850d3e15`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const image = result.data.url;
                    setImgURL(image)
                    setImageLoading(false)
                    console.log(image);
                }
            })
    }

    const onSubmit = async (data) => {

        const review = {
            ...data,
            image: usersProfile.image || imgURL,
            name: user.displayName
        }
        // console.log(review);

        fetch('https://blooming-caverns-13229.herokuapp.com/review', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(review)
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
                    setImageLoading(false)
                    toast.success('Thanks for your review. You will find your review at our homepage.')
                }
                refetch()
            })

    };

    return (
        <section className='bg-white p-4 lg:p-8 h-screen overflow-scroll w-full'>
            <h1 className='text-xl font-semibold mb-5'>Add a review</h1>
            <div>
                <section>
                    <div className='text-center mx-auto lg:shadow-xl rounded-xl p-10 m-10 border'>
                        <h1 className='text-xl lg:text-2xl font-semibold text-primary uppercase tracking-wider mb-5'>Please drop your valuable review</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>


                            <div className='flex flex-col lg:flex-row gap-5'>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold">Rating (out of 5)</span>
                                    </label>
                                    <input
                                        type="number"
                                        placeholder='Please put a number 1-5'
                                        {...register("star", {
                                            required: {
                                                value: true,
                                                message: "Rating is required"
                                            },
                                            min: {
                                                value: 1,
                                                message: `Rating must be greater then or equal to 1`
                                            },
                                            max: {
                                                value: 5,
                                                message: `Rating can't be greater then 5`
                                            }
                                        })}
                                        className={`input input-bordered  ${errors.rating && 'border-pink-600'}`}
                                    />
                                    <label className="label">
                                        {errors.star?.type === 'required' && <span className="label-text-alt text-pink-600">{errors.star.message}</span>}
                                        {errors.star?.type === 'min' && <span className="label-text-alt text-pink-600">{errors.star.message}</span>}
                                        {errors.star?.type === 'max' && <span className="label-text-alt text-pink-600">{errors.star.message}</span>}
                                    </label>
                                </div>

                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold">Image url</span>
                                    </label>
                                    {
                                        usersProfile?.image ?
                                            <input
                                                type="text"
                                                placeholder='Image will be collected from your profile'
                                                className="input input-bordered w-full pt-1 placeholder:font-bold"
                                                disabled
                                            />
                                            :
                                            <input
                                                type="file"
                                                onChange={handleUploadImage}
                                                className="input input-bordered w-full pt-1"
                                                disabled={imageLoading}
                                            />
                                    }
                                </div>

                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold">Profession</span>
                                    </label>
                                    <input
                                        type="text"
                                        defaultValue={usersProfile?.profession}
                                        placeholder='Your profession'
                                        {...register("profession")}
                                        className="input input-bordered w-full"
                                        readOnly={usersProfile?.profession}
                                    />
                                </div>
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-semibold">Review</span>
                                </label>
                                <textarea
                                    type="textarea"
                                    placeholder='Write your valuable review here'
                                    {...register("review", { required: true })}
                                    className="input input-bordered w-full h-28"
                                />
                            </div>

                            {/* submit button  */}
                            <input
                                type="submit"
                                value="Update profile"
                                className="w-full btn btn-primary font-semibold text-white bg-gradient-to-r from-secondary to-primary border-0 mt-8 tracking-wider"
                                disabled={imageLoading}
                            />
                        </form>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default AddReview;