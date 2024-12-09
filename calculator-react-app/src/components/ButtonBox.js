import React from 'react';
import './ButtonBox.css';
// Holds all the button components
const ButtonBox = ({ children }) => {
    return (
        <>
        <div className="buttonBox">{ children }</div>
        </>
    );
};

export default ButtonBox;