import { useQuery } from 'react-query';

const useReviews = () => {
    const { data: reviews, isLoading: reviewLoading } = useQuery('reviews', () => fetch('https://carts-server.vercel.app/review').then(res => res.json()))

    return [reviews, reviewLoading]
};

export default useReviews;