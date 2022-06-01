import { signOut } from 'firebase/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../authentication/firebase.init';

const useUsers = () => {
    const navigate = useNavigate();
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
        if (res.status === 401 || res.status === 403) {
            signOut(auth)
            localStorage.removeItem('accessToken')
            navigate('/login')
        }
        return res.json()
    }))
    return [users, isLoading, refetch]
};

export default useUsers;