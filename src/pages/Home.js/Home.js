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
    const { data, isLoading } = useQuery('parts', () => fetch('http://localhost:5000/part').then(res => res.json()))
    if (isLoading) {
        return <PageLoading />
    }
    return (
        <div>
            <Banner />
            <Parts data={data} />
            <BusinessSummary />
            <ArrivingSoon />
            <Reviews />
            <LatestBlogs />
            <Footer />
        </div>
    );
};

export default Home;