import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const BusinessSummary = () => {
    return (
        <div className='animate-pulse'>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                    <div className="md:border-r cursor-pointer hover:text-cyan-500">
                        <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
                            <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                                {({ isVisible }) => (
                                    <div style={{ height: 60 }}>
                                        {isVisible ? <CountUp end={144} /> : ''}
                                        M
                                    </div>
                                )}
                            </VisibilitySensor>
                        </h6>
                        <p className="text-sm font-medium tracking-widest  uppercase lg:text-base ">
                            Sells
                        </p>
                    </div>
                    <div className="md:border-r cursor-pointer hover:text-cyan-500">
                        <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
                            <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                                {({ isVisible }) => (
                                    <div style={{ height: 60 }}>
                                        {isVisible ? <CountUp end={12} /> : ''}
                                        K
                                    </div>
                                )}
                            </VisibilitySensor>
                        </h6>
                        <p className="text-sm font-medium tracking-widest  uppercase lg:text-base">
                            Users
                        </p>
                    </div>
                    <div className="md:border-r cursor-pointer hover:text-cyan-500">
                        <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
                            <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                                {({ isVisible }) => (
                                    <div style={{ height: 60 }}>
                                        {isVisible ? <CountUp end={48} /> : ''}
                                        K
                                    </div>
                                )}
                            </VisibilitySensor>
                        </h6>
                        <p className="text-sm font-medium tracking-widest  uppercase lg:text-base">
                            Stocks
                        </p>
                    </div>
                    <div className=' cursor-pointer hover:text-cyan-500'>
                        <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
                            <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                                {({ isVisible }) => (
                                    <div style={{ height: 60 }}>
                                        {isVisible ? <CountUp end={34} /> : ''}
                                        K
                                    </div>
                                )}
                            </VisibilitySensor>
                        </h6>
                        <p className="text-sm font-medium tracking-widest  uppercase lg:text-base">
                            This year
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;