import { useQuery } from 'react-query';

const useAllParts = () => {
    const { data: allParts, isLoading: partsLoading } = useQuery('parts', () => fetch('https://carts-server.vercel.app/part').then(res => res.json()))

    return [allParts, partsLoading]
};

export default useAllParts;