import React, { useState } from 'react';
import '../styles/fonts.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50">
            <nav className="mx-auto max-w-7xl flex items-center justify-between px-9 md:px-16 py-4
                      bg-white/0.5 backdrop-blur-[5px] border-b border-white/20 shadow-white/20 shadow-inner
                       rounded-b-4xl text-white transition-all duration-200">
                {/* Brand */}
                <span className="font-semibold text-lg sm:text-2xl tracking-wide cursor-pointer hover:text-[#52E0C4] transition-colors">
                    <a href="#home">Portfolio | Cris Charles</a>
                </span>

                {/* Hamburger */}
                <button
                    className="sm:hidden text-[#64FFDA] focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>

                {/* Desktop Menu */}
                <ul className="hidden sm:flex space-x-10 text-sm font-medium tracking-wide">
                    {['Projects', 'About', 'Skills', 'Contact'].map((item) => (
                        <li key={item}>
                            <a href={`#${item.toLowerCase()}`} className="hover:text-[#52E0C4] transition-colors">
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Mobile Dropdown */}
            {isOpen && (
                <ul className="sm:hidden flex flex-col items-center bg-white/0.5 backdrop-blur-xs border-b border-white/20
                       shadow-white/40 shadow-inner space-y-3 py-4 mt-4 mx-2 rounded-4xl text-white">
                    {['Projects', 'About', 'Skills', 'Contact'].map((item) => (
                        <li key={item}>
                            <a href={`#${item.toLowerCase()}`} className="hover:text-[#52E0C4] transition-colors">
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </header>
    );
}

export default Navbar;
