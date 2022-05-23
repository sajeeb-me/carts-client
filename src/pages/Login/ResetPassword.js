import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../../authentication/firebase.init';
import PageLoading from '../../components/PageLoading';

const ResetPassword = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    if (sending) {
        return <PageLoading />
    }
    if (error) {
        // console.log(error.code);
        switch (error?.code) {
            case "auth/user-not-found":
                toast.error("User not found", {
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
        await sendPasswordResetEmail(email);
        reset();
        if (!error) {
            toast.info("Reset link sent to your email");
        }
    };

    return (
        <section>
            <div className='text-center lg:w-2/6 mx-auto lg:shadow-xl rounded-xl p-10 m-10 border'>
                <h1 className='text-2xl font-semibold'>Reset password</h1>
                <p className='text-sm my-2'>Please enter your account email address to get password reset link.</p>
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
                            {errors.email?.type === 'required' && <span className="label-text-alt text-pink-600">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-pink-600">Provide a valid email</span>}
                        </label>
                    </div>

                    {/* submit button  */}
                    <input type="submit" value="Send reset link" className="w-full btn btn-primary font-semibold text-white bg-gradient-to-r from-secondary to-primary border-0" />
                </form>
            </div>
        </section>
    );
};

export default ResetPassword;