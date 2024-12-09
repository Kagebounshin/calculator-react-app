import React from 'react';
import './Wrapper.css';

// Wrapper for the calculator
const Wrapper = ({ children }) => {
    return (
        <>
        <div className="wrapper">{children}</div>
        </>
    )
};

export default Wrapper;