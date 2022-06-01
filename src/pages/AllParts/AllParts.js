import React from 'react';
import PageLoading from '../../components/PageLoading';
import useAllParts from '../../hooks/useAllParts';
import PartCard from '../Home.js/PartCard';

const AllParts = () => {
    const [allParts, partsLoading] = useAllParts();

    if (partsLoading) {
        return <PageLoading />
    }

    return (
        <section className='px-4 lg:px-20 my-5'>
            <div className='text-center'>
                <h1 className='text-3xl lg:text-4xl font-bold'>All Available Parts</h1>
                <p className='mt-4 text-base text-gray-600 md:text-lg'>Our all parts are made with the world class elements <br className="hidden md:block" /> which will give you the best performance.</p>
            </div>
            <article className='max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
                {
                    allParts?.map(part => <PartCard key={part._id} part={part} />)
                }
            </article>
        </section>
    );
};

export default AllParts;