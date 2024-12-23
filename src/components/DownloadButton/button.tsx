import React from 'react';
import "../../static/main.css";
const ButtonComponent = () => {
    const handleClick = () => {
        console.log("Button clicked!");
    };

    return (
        <button className='absolute top-3 left-2 p-2 bg-red-500 text-white z-10' onClick={handleClick} >
            Download
        </button>
    );
};

export default ButtonComponent;