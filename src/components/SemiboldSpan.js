import React from 'react';

const SemiboldSpan = ({ children }) => {
    return (
        <span className='font-semibold bg-base-200 px-1'>
            {children}
        </span>
    );
};

export default SemiboldSpan;