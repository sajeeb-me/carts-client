import React from 'react';
import { Link } from 'react-router-dom';
import PartCard from './PartCard';
import { BsArrowRight } from 'react-icons/bs';

const Parts = ({ allParts }) => {

    return (
        <section className='px-4 lg:px-20 my-20'>
            <div className='text-center'>
                <h1 className='text-3xl lg:text-4xl font-bold'>Available Parts</h1>
                <p className='mt-4 text-base text-gray-600 md:text-lg'>Our all parts are made with the world class elements <br className="hidden md:block" /> which will give you the best performance.</p>
            </div>
            <article className='max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20'>
                {
                    allParts?.slice(0, 6).map(part => <PartCard key={part._id} part={part} />)
                }
            </article>
            <Link className='flex justify-end items-center mt-5 text-lg font-semibold mr-2 hover:text-primary-focus duration-300 ease-in-out' to='/all-parts'>
                See all parts
                <span className='ml-3 text-base'><BsArrowRight /></span>
            </Link>
        </section>
    );
};

export default Parts;