import React from 'react';
import { toast } from 'react-toastify';

const RowOfAdminAndUser = ({ user, refetch, index }) => {
    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make an admin')
                }
                return res.json()
            })
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Successfully made and admin!')
                }
            })
    }

    return (
        <tr className='hover'>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{
                role ||
                <button onClick={makeAdmin} className="btn btn-sm btn-primary text-white">Make admin</button>
            }</td>
        </tr>
    );
};

export default RowOfAdminAndUser;