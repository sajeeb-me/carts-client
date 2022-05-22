import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../authentication/firebase.init';
import PageLoading from '../../components/PageLoading';
import GoogleIcon from '../../assets/icons/google.png';
import FacebookIcon from '../../assets/icons/facebook.png';
import GithubIcon from '../../assets/icons/github.png';

const SocialMediaLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
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
        console.log(error.code);
        switch (error?.code) {
            case "auth/popup-closed-by-user":
                toast.error("You closed the popup without login", {
                    toastId: 1
                });
                break;
            default:
                toast.error("Something went wrong", {
                    toastId: 1
                })
        }
    }

    return (
        <div>
            <div className="divider">OR</div>
            <div className='grid grid-cols-3'>
                <div className='border-r border-primary'>
                    <button onClick={() => signInWithGoogle()} className='btn btn-ghost'>
                        <img src={GoogleIcon} alt="" className='h-6' />
                    </button>
                </div>
                <div className='border-r border-primary'>
                    <button onClick={() => signInWithGoogle()} className='btn btn-ghost'>
                        <img src={FacebookIcon} alt="" className='h-6' />
                    </button>
                </div>
                <div>
                    <button onClick={() => signInWithGoogle()} className='btn btn-ghost'>
                        <img src={GithubIcon} alt="" className='h-6' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SocialMediaLogin;