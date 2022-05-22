import React from 'react';
import Rating from 'react-rating';
import { BsStar, BsStarFill } from 'react-icons/bs';

const UsersReviews = ({ allReview }) => {
    const { name, star, review, image, profession } = allReview;
    return (
        <div>
            <section className='border border-primary bg-white rounded-xl p-8 hover:-translate-y-3 hover:shadow-lg duration-300 ease-in'>
                <div className="avatar mb-5 ">
                    <div className="w-12 rounded-xl ring ring-primary">
                        <img src={image ? image : 'https://i.ibb.co/5sWZQdg/default-images.jpg'} alt='' />
                    </div>
                </div>
                <div>
                    <Rating
                        initialRating={star}
                        emptySymbol={<p className='text-secondary ml-1'><BsStar /></p>}
                        fullSymbol={<p className='text-secondary ml-1'><BsStarFill /></p>}
                        readonly
                    ></Rating>
                </div>

                <div className='my-3'>
                    <p>{review}</p>
                </div>

                <div>
                    <h6 className='text-lg font-semibold text-primary'>{name}</h6>
                    <p className='font-semibold'><small>{profession}</small></p>
                </div>
            </section>
        </div>
    );
};

export default UsersReviews;