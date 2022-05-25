import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../authentication/firebase.init';
import PageLoading from '../../components/PageLoading';
import { useForm } from "react-hook-form";
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const MyProfile = () => {
    const navigate = useNavigate();

    const { register, handleSubmit, reset } = useForm();

    const [user, isLoading] = useAuthState(auth)

    if (isLoading) {
        return <PageLoading />
    }

    const onSubmit = async (data) => {
        const profileInfo = {
            ...data,
            name: user.displayName,
            email: user.email
        }
        // console.log(profileInfo);

        const email = user.email
        if (email) {
            fetch(`https://blooming-caverns-13229.herokuapp.com/profile/${email}`, {
                method: "PATCH",
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(profileInfo)
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
                        toast.success('Profile updated successfully.')
                    }
                })
        }
    };

    return (
        <section className='bg-white p-4 lg:p-8 h-screen overflow-scroll w-full'>
            <h1 className='text-xl font-semibold mb-5'>Profile of {user?.displayName}</h1>
            <div>
                <section>
                    <div className='text-center mx-auto lg:shadow-xl rounded-xl p-10 m-10 border'>
                        <h1 className='text-xl lg:text-2xl font-semibold text-primary uppercase tracking-wider mb-5'>Details information</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            {/* name and email  */}
                            <div className='flex flex-col lg:flex-row gap-5'>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold">Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={user?.displayName}
                                        className="input input-bordered w-full"
                                        disabled
                                    />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        value={user?.email}
                                        className="input input-bordered w-full"
                                        disabled
                                    />
                                </div>
                            </div>

                            {/* education and location  */}
                            <div className='flex flex-col lg:flex-row gap-5 my-3'>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold">Profession / Education</span>
                                    </label>
                                    <input
                                        type="text"
                                        {...register("profession", { required: true })}
                                        className="input input-bordered w-full"
                                    />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold">Location</span>
                                    </label>
                                    <input
                                        type="text"
                                        {...register("location", { required: true })}
                                        className="input input-bordered w-full"
                                    />
                                </div>
                            </div>

                            {/* phone and profile link  */}
                            <div className='flex flex-col lg:flex-row gap-5'>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold">Phone</span>
                                    </label>
                                    <input
                                        type="text"
                                        {...register("phone", { required: true })}
                                        className="input input-bordered w-full"
                                    />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold">LinkedIn profile link</span>
                                    </label>
                                    <input
                                        type="url"
                                        {...register("linkedin", { required: true })}
                                        className="input input-bordered w-full"
                                    />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold">Github profile link</span>
                                    </label>
                                    <input
                                        type="url"
                                        {...register("github")}
                                        className="input input-bordered w-full"
                                    />
                                </div>
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

export default MyProfile;