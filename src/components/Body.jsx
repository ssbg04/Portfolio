import React from 'react';
import '../styles/fonts.css';
import '../styles/body.css';

const Body = ({ children }) => {


    return (
        <div className="relative w-full min-h-screen body-background overflow-hidden">
            <div className="relative z-10">{children}</div>
        </div>
    );
};

export default Body;
