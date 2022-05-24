import { signOut } from 'firebase/auth';
import React from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../authentication/firebase.init';

const CancelOrderModal = ({ deletingOrder, setDeletingOrder, refetch }) => {
    // console.log(deletingOrder);

    const handleDelete = id => {
        fetch(`http://localhost:5000/order/${id}`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth)
                    localStorage.removeItem('accessToken')
                    Navigate('/login')
                }
                return res.json()
            })
            .then(data => {
                // console.log(data);
                if (data.deletedCount) {
                    refetch()
                    setDeletingOrder(null)
                    toast.info(`Order for ${deletingOrder.productName} is canceled`)
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="cancel-order-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box relative">
                    <label for="cancel-order-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold lg:text-lg text-secondary">Canceling order for {deletingOrder.productName} ?</h3>
                    <p className="py-4">
                        Canceled orders will remove from your my order list and you will not be able to see this order again.
                    </p>
                    <div className="modal-action">
                        <button
                            onClick={() => handleDelete(deletingOrder._id)}
                            className='btn btn-error text-white'>
                            Cancel order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CancelOrderModal;