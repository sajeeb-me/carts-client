import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { MdOutlineRateReview } from 'react-icons/md';
import { BsTools, BsCashCoin } from 'react-icons/bs';

const BusinessSummary = () => {
    return (
        <section className='animate-pulse my-20 text-center'>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                    <div className="md:border-r border-primary cursor-pointer">
                        <h1 className='text-5xl lg:text-6xl flex justify-center mb-5'>
                            <HiOutlineUserGroup />
                        </h1>
                        <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
                            <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                                {({ isVisible }) => (
                                    <div style={{ height: 60 }}>
                                        {isVisible ? <CountUp end={10} /> : ''}
                                        K+
                                    </div>
                                )}
                            </VisibilitySensor>
                        </h6>
                        <p className="text-sm font-medium tracking-widest  uppercase lg:text-base ">
                            Customers
                        </p>
                    </div>
                    <div className="md:border-r border-primary cursor-pointer">
                        <h1 className='text-5xl lg:text-6xl flex justify-center mb-5'>
                            <BsCashCoin />
                        </h1>
                        <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
                            <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                                {({ isVisible }) => (
                                    <div style={{ height: 60 }}>
                                        {isVisible ? <CountUp end={150} /> : ''}
                                        M+
                                    </div>
                                )}
                            </VisibilitySensor>
                        </h6>
                        <p className="text-sm font-medium tracking-widest  uppercase lg:text-base">
                            Annual revenue
                        </p>
                    </div>
                    <div className="md:border-r border-primary cursor-pointer">
                        <h1 className='text-5xl lg:text-6xl flex justify-center mb-5'>
                            <MdOutlineRateReview />
                        </h1>
                        <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
                            <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                                {({ isVisible }) => (
                                    <div style={{ height: 60 }}>
                                        {isVisible ? <CountUp end={22} /> : ''}
                                        K+
                                    </div>
                                )}
                            </VisibilitySensor>
                        </h6>
                        <p className="text-sm font-medium tracking-widest  uppercase lg:text-base">
                            Reviews
                        </p>
                    </div>
                    <div className=' cursor-pointer'>
                        <h1 className='text-5xl lg:text-6xl flex justify-center mb-5'>
                            <BsTools />
                        </h1>
                        <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
                            <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                                {({ isVisible }) => (
                                    <div style={{ height: 60 }}>
                                        {isVisible ? <CountUp end={200} /> : ''}
                                        +
                                    </div>
                                )}
                            </VisibilitySensor>
                        </h6>
                        <p className="text-sm font-medium tracking-widest  uppercase lg:text-base">
                            Car Parts
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessSummary;