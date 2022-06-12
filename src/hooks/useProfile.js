import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useProfile = (user) => {
    const navigate = useNavigate();
    const [usersProfile, setUsersProfile] = useState({});
    const [isUserLoading, setIsUserLoading] = useState(false);

    useEffect(() => {
        const email = user?.email;
        if (email) {
            setIsUserLoading(true)
            fetch(`https://blooming-caverns-13229.herokuapp.com/profile?email=${email}`, {
                // method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        // signOut(auth)
                        // localStorage.removeItem('accessToken')
                        // navigate('/login')
                    }
                    return res.json()
                })
                .then(data => {
                    // console.log(data)
                    setUsersProfile(data)
                    setIsUserLoading(false)
                })
        }
    }, [navigate, user?.email])
    return [usersProfile, isUserLoading]
};

export default useProfile;



// using reactQuery

// import { signOut } from "firebase/auth";
// import { useQuery } from "react-query";
// import { useNavigate } from "react-router-dom";
// import auth from "../authentication/firebase.init";

// const useProfile = (user) => {
//     const navigate = useNavigate();
//     const { data: usersProfile, isLoading: isUserLoading, refetch } = useQuery(['usersProfile', user?.email], () => fetch(`https://blooming-caverns-13229.herokuapp.com/profile?email=${user?.email}`, {
//         method: 'GET',
//         headers: {
//             authorization: `Bearer ${localStorage.getItem('accessToken')}`
//         }
//     }).then(res => {
//         if (res.status === 401 || res.status === 403) {
//             signOut(auth)
//             localStorage.removeItem('accessToken')
//             navigate('/login')
//         }
//         return res.json()
//     }))
//     return [usersProfile, isUserLoading, refetch]
// };

// export default useProfile;