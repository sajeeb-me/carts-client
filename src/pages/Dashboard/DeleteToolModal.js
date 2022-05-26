import { signOut } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../authentication/firebase.init';

const DeleteToolModal = ({ deletingTool, setDeletingTool, refetch }) => {
    const navigate = useNavigate();

    const handleDelete = id => {
        fetch(`https://blooming-caverns-13229.herokuapp.com/part/${id}`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    console.log(res);
                    signOut(auth)
                    localStorage.removeItem('accessToken')
                    navigate('/login')
                }
                return res.json()
            })
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    refetch()
                    setDeletingTool(null)
                    toast.info(`${deletingTool.name} is deleted`)
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="delete-tool-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box relative">
                    <label htmlFor="delete-tool-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-semibold lg:text-lg text-secondary">Are you sure to delete <span className='font-bold'>{deletingTool.name}</span> ?</h3>
                    <p className="py-4">
                        Deleted parts will be removed from your website and you won't see this Parts anymore.
                    </p>
                    <div className="modal-action">
                        <button
                            onClick={() => handleDelete(deletingTool._id)}
                            className='btn btn-error text-white'>
                            Delete now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteToolModal;