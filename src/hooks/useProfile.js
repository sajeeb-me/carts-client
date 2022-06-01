import { signOut } from "firebase/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../authentication/firebase.init";

const useProfile = (user) => {
    const navigate = useNavigate();
    const { data: usersProfile, isLoading: isUserLoading, refetch } = useQuery(['usersProfile', user?.email], () => fetch(`http://localhost:5000/profile?email=${user?.email}`, {
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
    return [usersProfile, isUserLoading, refetch]
};

export default useProfile;