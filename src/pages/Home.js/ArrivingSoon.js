import React from 'react';
import PrimaryButton from '../../components/PrimaryButton';
import TeslaCar from '../../assets/images/tesla.jpg';
import TeslaCar2 from '../../assets/images/tesla-2.jpg';
import TeslaCar3 from '../../assets/images/tesla-3.jpg';

const ArrivingSoon = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-20 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-2">
                <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
                    <div className="max-w-xl mb-6">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
                            Let's Book Our {' '}
                            <br className="hidden md:block" />
                            New Arrival {' '}
                            <span class="before:inline-block px-2 mt-2 before:absolute before:-inset-1 before:-skew-y-3 before:bg-secondary relative inline-block">
                                <span class="relative text-white">Tesla</span>
                            </span>
                        </h2>
                        <p className="text-base text-gray-600 md:text-lg">
                            Tesla Brand's parts are manufacturing now. Within 1 week we will announce our publish date. Let's book your position now to get the best.
                        </p>
                    </div>
                    <div>
                        <PrimaryButton>Pre-Book now</PrimaryButton>
                    </div>
                </div>
                <div className="flex items-center justify-center -mx-4 lg:pl-8">
                    <div className="flex flex-col items-end px-3">
                        <img
                            className="object-cover mb-6 rounded-lg shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                            src={TeslaCar2}
                            alt=""
                        />
                        <img
                            className="object-cover w-20 h-20 rounded-lg shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                            src={TeslaCar}
                            alt=""
                        />
                    </div>
                    <div className="px-3">
                        <img
                            className="object-cover w-40 h-40 rounded-lg shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                            src={TeslaCar3}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArrivingSoon;