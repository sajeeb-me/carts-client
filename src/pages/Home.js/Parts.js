import React from 'react';
import { useQuery } from 'react-query';
import PageLoading from '../../components/PageLoading';
import PartCard from './PartCard';

const Parts = () => {

    const { data: parts, isLoading } = useQuery('parts', () => fetch('parts.json').then(res => res.json()))
    // console.log(parts);
    if (isLoading) {
        return <PageLoading />
    }


    return (
        <section className='px-4 lg:px-20 my-20'>
            <div className='text-center'>
                <h1 className='text-3xl lg:text-4xl font-bold'>Available Parts</h1>
                <p className='mt-4 text-base text-gray-600 md:text-lg'>Our all parts are made with the world class elements <br className="hidden md:block" /> which will give you the best performance.</p>
            </div>
            <article className='max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
                {
                    parts.map((part, index) => <PartCard key={index} part={part} />)
                }
            </article>
        </section>
    );
};

export default Parts;