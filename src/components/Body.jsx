import React from 'react';
import '../styles/body.css'; // CSS for animated background

const Body = ({ children }) => {
    return (
        <div className="relative w-full min-h-screen body-background overflow-hidden">
            {/* Floating shapes */}
            {[...Array(10)].map((_, i) => (
                <div
                    key={i}
                    className="shape absolute rounded-full bg-[#64FFDA]/20"
                    style={{
                        width: `${50 + Math.random() * 100}px`,
                        height: `${50 + Math.random() * 100}px`,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${10 + Math.random() * 10}s`,
                    }}
                />
            ))}

            {/* Your page content */}
            <div className="relative z-10">{children}</div>
        </div>
    );
};

export default Body;
