import React from 'react';
import { useQuery } from 'react-query';
import PageLoading from '../../components/PageLoading';
import UsersReviews from './UsersReviews';

const Reviews = () => {
    const { data: reviews, isLoading } = useQuery('reviews', () => fetch('reviews.json').then(res => res.json()))
    // console.log(reviews);
    if (isLoading) {
        return <PageLoading />
    }

    return (
        <section className='px-4 lg:px-20 my-20 text-center'>
            <div>
                <h1 className='text-3xl lg:text-4xl font-bold'>What our Customers say?</h1>
                <p className='mt-4 text-base text-gray-600 md:text-lg'>Let's have a look on this customers review section <br className="hidden md:block" /> you will get the full idea of our services.</p>
            </div>
            <div>
                {
                    reviews.map((review, index) => <UsersReviews key={index} review={review} />)
                }
            </div>
        </section>
    );
};

export default Reviews;