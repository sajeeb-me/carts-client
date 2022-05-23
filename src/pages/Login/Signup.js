import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../../authentication/firebase.init';
import PageLoading from '../../components/PageLoading';
import SocialMediaLogin from './SocialMediaLogin';
import useToken from '../../hooks/useToken';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile] = useUpdateProfile(auth);
    const [sendEmailVerification] = useSendEmailVerification(auth);
    const [token] = useToken(user)

    useEffect(() => {
        if (token) {
            // console.log(user);
            navigate('/')
        }
    }, [token, navigate])
    if (loading) {
        return <PageLoading />;
    }
    if (error) {
        // console.log(error.code);
        switch (error?.code) {
            case "auth/email-already-in-use":
                toast.error("Already have account with this email", {
                    toastId: 1
                });
                break;
            default:
                toast.error("Something went wrong", {
                    toastId: 1
                })
        }
    }

    const onSubmit = async (data) => {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        await createUserWithEmailAndPassword(email, password)
        await sendEmailVerification();
        await updateProfile({ displayName: name });
    };
    return (
        <section>
            <div className='text-center lg:w-2/6 mx-auto shadow-xl rounded-xl p-10 m-10 border'>
                <h1 className='text-2xl lg:text-3xl font-semibold text-primary mb-3'>Sign Up</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* name */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Name</span>
                        </label>
                        <input
                            type="text"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "First name is required"
                                }
                            })}
                            className="input input-bordered w-full" />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-pink-600">{errors.name.message}</span>}
                        </label>
                    </div>

                    {/* email  */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input
                            type="email"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "Email is required"
                                },
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: 'Provide a valid email'
                                }
                            })}
                            className="input input-bordered w-full" />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-pink-600">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-pink-600">Provide a valid email</span>}
                        </label>
                    </div>

                    {/* pass  */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input
                            type="password"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password is required"
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 character or longer'
                                }
                            })}
                            className="input input-bordered w-full" />
                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-pink-600">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-pink-600">{errors.password.message}</span>}
                        </label>
                    </div>

                    {/* submit button  */}
                    <input type="submit" value="Sign Up" className="w-full btn btn-primary font-semibold text-white bg-gradient-to-r from-secondary to-primary border-0" />
                </form>

                <p className='text-sm font-semibold mt-2'>Already have account? <Link to='/login' className='text-primary'>Login now</Link></p>

                {/* social media login  */}
                <SocialMediaLogin />
            </div>
        </section>
    );
};

export default Signup;