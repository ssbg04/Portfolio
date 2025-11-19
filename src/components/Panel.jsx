import React from 'react';
import useTheme from '../hooks/useTheme';

const Panel = ({ children, className = "", padding = "py-5" }) => {
    const { theme } = useTheme();

    // Bootstrap theme-based styling
    const bgClass = theme === 'light' ? 'bg-white' : 'bg-dark';
    const textClass = theme === 'light' ? 'text-dark' : 'text-light';

    return (
        <main
            id="main-panel"
            className={`
                ${bgClass} 
                ${textClass} 
                flex-grow 
                transition 
                ${className}
            `}
        >
            {/* 
                Using .container so the content is perfectly aligned 
                with the Bootstrap Navbar and Footer.
            */}
            <div className={`container ${padding} min-vh-75`}>
                {children}
            </div>
        </main>
    );
};

export default Panel;
