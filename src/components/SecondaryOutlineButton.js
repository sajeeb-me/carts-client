import React from 'react';

const SecondaryOutlineButton = ({ children }) => {
    return (
        <button className='btn btn-secondary btn-outline'>
            {children}
        </button>
    );
};

export default SecondaryOutlineButton;