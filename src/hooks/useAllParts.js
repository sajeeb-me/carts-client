import { useQuery } from 'react-query';

const useAllParts = () => {
    const { data: allParts, isLoading: partsLoading } = useQuery('parts', () => fetch('https://blooming-caverns-13229.herokuapp.com/part').then(res => res.json()))

    return [allParts, partsLoading]
};

export default useAllParts;