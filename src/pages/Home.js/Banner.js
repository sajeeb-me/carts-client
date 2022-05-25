import React from 'react';
import BannerImage from '../../assets/images/banner.jpg';
import SecondaryOutlineButton from '../../components/SecondaryOutlineButton';
import { BsArrowRight } from 'react-icons/bs';

const Banner = () => {

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <div className="relative">
            <img
                src={BannerImage}
                className="absolute inset-0 object-cover w-full h-full"
                alt=""
            />
            <div className="relative bg-gray-900 bg-opacity-80">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-between xl:flex-row">
                        <div className="w-full max-w-2xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                            <h2
                                data-aos="fade-right"
                                data-aos-delay="200"
                                data-aos-duration="1000"
                                className="max-w-2xl mb-6 text-4xl uppercase lg:text-5xl font-bold  text-white">
                                Find your Car Parts <br className="hidden md:block mb-5" />
                                <span className='lowercase font-normal font-serif'>at{' '}</span>
                                <span className="before:inline-block px-2 mt-2 before:absolute before:-inset-1 before:-skew-y-3 before:bg-secondary relative inline-block">
                                    <span className="relative text-white">Carts</span>
                                </span>
                            </h2>
                            <p
                                data-aos="fade-right"
                                data-aos-delay="600"
                                data-aos-duration="1000"
                                className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                                We are manufacturing car parts since 1998 and serving them with best quality and a long time warranty.
                            </p>
                            <p
                                data-aos="zoom-in-right"
                                data-aos-delay="1200"
                                data-aos-duration="1000"
                            >
                                <SecondaryOutlineButton>
                                    Explore now
                                    <span className='ml-3 text-base'><BsArrowRight /></span>
                                </SecondaryOutlineButton>
                            </p>
                        </div>
                        <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                            <div className="bg-white rounded-xl shadow-2xl p-7 sm:p-10">
                                <h3 className="mb-4 text-xl font-semibold uppercase sm:text-center sm:mb-6 sm:text-2xl">
                                    Select your car
                                </h3>
                                <form onSubmit={handleSubmit}>
                                    <select className="select select-primary bg-white w-full mb-5">
                                        <option disabled selected>Select Brand</option>
                                        <option>BMW</option>
                                        <option>Lamborghini</option>
                                        <option>Honda</option>
                                        <option>Mazda</option>
                                        <option>Mercedes</option>
                                    </select>
                                    <select className="select select-primary bg-white w-full mb-5">
                                        <option disabled selected>Select Model</option>
                                        <option>New edition 2022</option>
                                        <option>Super 16</option>
                                        <option>100 Modal</option>
                                    </select>
                                    <select className="select select-primary bg-white w-full mb-5">
                                        <option disabled selected>Select Engine</option>
                                        <option>Fi ABS</option>
                                        <option>Carbonator</option>
                                    </select>
                                    <div className="mt-4 mb-2 sm:mb-4">
                                        <button
                                            type="submit"
                                            className="w-full btn btn-primary font-semibold text-white bg-gradient-to-r from-secondary to-primary border-0"
                                        >
                                            Find my parts
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;