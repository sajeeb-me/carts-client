import React, { useEffect } from 'react';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../authentication/firebase.init';
import PageLoading from '../../components/PageLoading';
import GoogleIcon from '../../assets/icons/google.png';
import FacebookIcon from '../../assets/icons/facebook.png';
import GithubIcon from '../../assets/icons/github.png';
import useToken from '../../hooks/useToken';

const SocialMediaLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);
    const [token] = useToken(googleUser || facebookUser || gitUser);

    useEffect(() => {
        if (token) {
            // console.log(user);
            navigate(from, { replace: true })
        }
    }, [token, navigate, from])
    if (googleLoading || facebookLoading || gitLoading) {
        return <PageLoading />;
    }
    if (googleError || facebookError || gitError) {
        console.log(googleError.code || facebookError.code || gitError.code);
        switch (googleError.code || facebookError.code || gitError.code) {
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
                    <button onClick={() => signInWithFacebook()} className='btn btn-ghost'>
                        <img src={FacebookIcon} alt="" className='h-6' />
                    </button>
                </div>
                <div>
                    <button onClick={() => signInWithGithub()} className='btn btn-ghost'>
                        <img src={GithubIcon} alt="" className='h-6' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SocialMediaLogin;