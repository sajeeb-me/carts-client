import React from 'react';
import { useQuery } from 'react-query';
import Footer from '../../components/Footer';
import PageLoading from '../../components/PageLoading';
import ArrivingSoon from './ArrivingSoon';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import LatestBlogs from './LatestBlogs';
import Parts from './Parts';
import Reviews from './Reviews';

const Home = () => {
    const { data: allParts, isLoading: partsLoading } = useQuery('parts', () => fetch('http://localhost:5000/part').then(res => res.json()))
    const { data: reviews, isLoading: reviewLoading } = useQuery('reviews', () => fetch('http://localhost:5000/review').then(res => res.json()))

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