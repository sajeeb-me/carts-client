import { useQuery } from 'react-query';

const useReviews = () => {
    const { data: reviews, isLoading: reviewLoading } = useQuery('reviews', () => fetch('https://blooming-caverns-13229.herokuapp.com/review').then(res => res.json()))

    return [reviews, reviewLoading]
};

export default useReviews;