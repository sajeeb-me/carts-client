import { useEffect, useState } from "react";

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.user?.email;
        if (email) {
            fetch(`https://carts-server.vercel.app/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ email })
            })
                .then(res => res.json())
                .then(data => {
                    const accessToken = data.secretToken;
                    localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken);
                    // console.log(accessToken)
                })
        }
    }, [user])
    return [token]
};

export default useToken;