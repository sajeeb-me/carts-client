import React from 'react';
import { useNavigate } from 'react-router-dom';

const PartCard = ({ part }) => {
    const navigate = useNavigate()
    const { _id, name, image, overview, minOrder, available, price } = part

    return (
        <div className="card max-w-xl  bg-white border border-primary hover:shadow-xl duration-200 ease-in">
            <figure className='h-44'>
                <img src={image} alt="Shoes" className="rounded-xl h-full" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p className='text-sm opacity-70' title={overview}>{overview.slice(0, 90)}</p>
                <hr className='w-full' />
                <p className='text-2xl font-bold'>${parseInt(price)?.toLocaleString('en-US')}/-</p>
                <hr className='w-full' />
                <div className='flex justify-between w-full text-sm opacity-70'>
                    <p>Min order: {minOrder} piece</p>
                    <p>Available: {parseInt(available).toLocaleString('en-US')} piece</p>
                </div>
                <hr className='w-full mb-3' />
                <button onClick={() => navigate(`/purchase/${_id}`)} className='btn btn-primary w-full text-white'>
                    Purchase now
                </button>
            </div>
        </div>
    );
};

export default PartCard;