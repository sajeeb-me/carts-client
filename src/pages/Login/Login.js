import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
// import useToken from '../../../hooks/useToken';
import auth from '../../authentication/firebase.init';
import PageLoading from '../../components/PageLoading';
import SocialMediaLogin from './SocialMediaLogin';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    // const [token] = useToken(user);

    useEffect(() => {
        if (user) {
            // console.log(user);
            navigate(from, { replace: true })
        }
    }, [user, navigate, from])
    if (loading) {
        return <PageLoading />;
    }
    if (error) {
        // console.log(error.code);
        switch (error?.code) {
            case "auth/user-not-found":
                toast.error("User not found", {
                    toastId: 1
                });
                break;
            case "auth/wrong-password":
                toast.error("Wrong password", {
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
        const email = data.email;
        const password = data.password;
        await signInWithEmailAndPassword(email, password);
    };

    return (
        <section>
            <div className='text-center lg:w-2/6 mx-auto lg:shadow-xl rounded-xl p-10 m-10 border'>
                <h1 className='text-2xl lg:text-3xl font-semibold text-primary mb-3'>Login</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
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
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">Provide a valid email</span>}
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
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        </label>
                        <p className='text-left mb-2'><button onClick={() => navigate('/resetpassword')} className='font-semibold'>Forget password?</button></p>
                    </div>

                    {/* submit button  */}
                    <input type="submit" value="Login" className="w-full btn btn-primary font-semibold text-white bg-gradient-to-r from-secondary to-primary border-0" />
                </form>
                <p className='text-sm font-semibold mt-2'>New to Doctors Portal? <Link to='/signup' className='text-primary'>Create an account</Link></p>

                {/* social media login  */}
                <SocialMediaLogin />
            </div>
        </section>
    );
};

export default Login;