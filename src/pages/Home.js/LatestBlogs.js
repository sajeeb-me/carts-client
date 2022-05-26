import React from 'react';
import { Link } from 'react-router-dom';
import BlogCar1 from '../../assets/images/blog-car-1.jpg';
import BlogCar2 from '../../assets/images/blog-car-2.jpg';
import BlogCar3 from '../../assets/images/blog-car-3.jpg';

const LatestBlogs = () => {
    return (
        <section className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-20 lg:py-20'>
            <div className='text-center'>
                <h1 className='text-3xl lg:text-4xl font-bold'>Our Latest Blogs</h1>
                <p className='mt-4 text-base text-gray-600 md:text-lg'>Read our latest blogs. And enrich your knowledge, which will <br className="hidden md:block" />  help you to know how to make your car unique.</p>
            </div>

            <div className="my-20">
                <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded-xl shadow-lg">
                        <img
                            src={BlogCar1}
                            className="object-cover w-full h-64"
                            alt=""
                        />
                        <div className="p-5 border border-t-0">
                            <p className="text-xs font-semibold tracking-wider uppercase text-gray-600">
                                21 JUNE 2022
                            </p>
                            <h1 className="text-2xl font-bold my-2">Why Miami headlight?</h1>

                            <p className="mb-2 text-gray-600">
                                Miami headlight has the best quality anti-fog system and it's save a lot of energy of your car battery.
                            </p>
                            <Link to='/' className='font-semibold'>Learn more</Link>
                        </div>
                    </div>
                    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded-xl shadow-lg">
                        <img
                            src={BlogCar2}
                            className="object-cover w-full h-64"
                            alt=""
                        />
                        <div className="p-5 border border-t-0">
                            <p className="text-xs font-semibold tracking-wider uppercase text-gray-600">
                                23 MAY 2022
                            </p>
                            <h1 className="text-2xl font-bold my-2">VW Camper Engine Bay?</h1>

                            <p className="mb-2 text-gray-600">
                                VW Camper Engine Bay is an amazing camper engine which have awesome performance.
                            </p>
                            <Link to='/' className='font-semibold'>Learn more</Link>
                        </div>
                    </div>
                    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded-xl shadow-lg">
                        <img
                            src={BlogCar3}
                            className="object-cover w-full h-64"
                            alt=""
                        />
                        <div className="p-5 border border-t-0">
                            <p className="text-xs font-semibold tracking-wider uppercase text-gray-600">
                                21 APRIL 2022
                            </p>
                            <h1 className="text-2xl font-bold my-2">BMW Gearstick 4-series</h1>

                            <p className="mb-2 text-gray-600">
                                BMW Gearstick 4-series is a easily siftable gearstick for BMW car proved by last Test in 2022.
                            </p>
                            <Link to='/' className='font-semibold'>Learn more</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LatestBlogs;