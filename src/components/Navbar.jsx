import React, { useState } from 'react';
import '../styles/navbar.css'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        const offset = 100; // height of navbar in pixels
        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth',
            });
        }
    };

    return (
        <header className="navbar bg-[#112240]/20 backdrop-blur-sm text-[#ffffff] sticky top-0 z-50 shadow-sm shadow-[#52E0C4]/20">
            {/* Container with responsive margins */}
            <div className="container mx-auto px-4 md:px-6 lg:px-24 flex items-center justify-between py-4">
                {/* Brand */}
                <span
                    className="font-bold text-2xl hover:text-[#52E0C4] cursor-pointer transition-colors duration-200"
                    onClick={() => scrollToSection("home")}
                >
                    <h1>Portfolio | Cris Charles</h1>
                </span>

                {/* Hamburger Button */}
                <button
                    className="sm:hidden text-[#64FFDA] focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </button>

                {/* Desktop Menu */}
                <ul className="hidden sm:flex space-x-8">
                    <li
                        className="hover:text-[#52E0C4] transition-colors duration-200 cursor-pointer"
                        onClick={() => scrollToSection("home")}
                    >
                        Home
                    </li>
                    <li
                        className="hover:text-[#52E0C4] transition-colors duration-200 cursor-pointer"
                        onClick={() => scrollToSection("projects")}
                    >
                        Projects
                    </li>
                    <li
                        className="hover:text-[#52E0C4] transition-colors duration-200 cursor-pointer"
                        onClick={() => scrollToSection("skills")}
                    >
                        Skills
                    </li>
                    <li
                        className="hover:text-[#52E0C4] transition-colors duration-200 cursor-pointer"
                        onClick={() => scrollToSection("contact")}
                    >
                        Contact
                    </li>
                </ul>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <ul className="sm:hidden flex flex-col items-center bg-[#112240] space-y-4 py-4 border-t border-[#233554] select-none">
                    <li
                        className="hover:text-[#52E0C4] transition-colors duration-800 cursor-pointer"
                        onClick={() => {
                            scrollToSection("home");
                            setIsOpen(false);
                        }}
                    >
                        Home
                    </li>
                    <li
                        className="hover:text-[#52E0C4] transition-colors duration-200 cursor-pointer"
                        onClick={() => {
                            scrollToSection("projects");
                            setIsOpen(false);
                        }}
                    >
                        Projects
                    </li>
                    <li
                        className="hover:text-[#52E0C4] transition-colors duration-200 cursor-pointer"
                        onClick={() => scrollToSection("skills")}
                    >
                        Skills
                    </li>
                    <li
                        className="hover:text-[#52E0C4] transition-colors duration-200 cursor-pointer"
                        onClick={() => {
                            scrollToSection("contact");
                            setIsOpen(false);
                        }}
                    >
                        Contact
                    </li>
                </ul>
            )}
        </header>
    );
}

export default Navbar;
