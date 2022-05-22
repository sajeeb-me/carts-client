import React from 'react';
import LoadingSpinner from '../assets/images/loading.gif';

const PageLoading = () => {
    return (
        <div className='flex justify-center'>
            <img src={LoadingSpinner} alt="" />
        </div>
    );
};

export default PageLoading;