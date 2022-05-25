import React from 'react';
import { useNavigate } from 'react-router-dom';
import pageNotFoundImage from '../../assets/images/page-not-found-removebg.png';

const NotFoundPage = () => {
    const navigate = useNavigate();
    return (
        <section className='flex justify-center'>
            <div className='flex flex-col justify-center items-center'>
                <img src={pageNotFoundImage} alt="" />
                <button onClick={() => navigate('/')} className='btn btn-primary text-base-100'>Go to Homepage</button>
            </div>
        </section>
    );
};

export default NotFoundPage;