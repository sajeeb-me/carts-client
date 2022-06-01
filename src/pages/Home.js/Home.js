import React from 'react';
import Footer from '../../components/Footer';
import PageLoading from '../../components/PageLoading';
import useAllParts from '../../hooks/useAllParts';
import useReviews from '../../hooks/useReviews';
import ArrivingSoon from './ArrivingSoon';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import LatestBlogs from './LatestBlogs';
import Parts from './Parts';
import Reviews from './Reviews';

const Home = () => {

    const [allParts, partsLoading] = useAllParts();
    const [reviews, reviewLoading] = useReviews();

    if (partsLoading || reviewLoading) {
        return <PageLoading />
    }

    return (
        <div>
            <Banner />
            <Parts allParts={allParts} />
            <BusinessSummary />
            <ArrivingSoon />
            <Reviews reviews={reviews} />
            <LatestBlogs />
            <Footer />
        </div>
    );
};

export default Home;