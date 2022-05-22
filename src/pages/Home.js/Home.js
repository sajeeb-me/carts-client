import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Parts from './Parts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner />
            <Parts />
            <BusinessSummary />
            <Reviews />
        </div>
    );
};

export default Home;