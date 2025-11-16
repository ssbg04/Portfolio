import React from 'react';
import { Sun, Moon, Zap } from 'lucide-react';
import useTheme from '../hooks/useTheme';
import '../index.css'

const Navbar = () => {
    const { mode, setMode, theme } = useTheme();

    const navLinks = ['home', 'about', 'projects', 'contact'];

    const modeIcons = {
        light: <Sun className="w-4 h-4" />,
        dark: <Moon className="w-4 h-4" />,
        system: <Zap className="w-4 h-4" />,
    };

    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    return (
        <nav
            className={`navbar navbar-expand-lg fixed-top shadow-sm border-bottom ${theme === 'light' ? 'navbar-blur navbar-light' : 'navbar-blur-dark navbar-dark'
                }`}
        >
            <div className="container">
                <a className="navbar-brand fw-bold" href="#home">
                    Cris Charles
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto align-items-center">
                        {navLinks.map((link) => (
                            <li className="nav-item" key={link}>
                                <a
                                    className="nav-link"
                                    href={`#${link}`}
                                    aria-current="page"
                                >
                                    {capitalize(link)}
                                </a>
                            </li>
                        ))}

                        {/* Theme Dropdown */}
                        <li className="nav-item ms-3">
                            <div className="dropdown">
                                <button
                                    className={`btn ${theme === 'light' ? 'btn-outline-dark' : 'btn-outline-light'
                                        } dropdown-toggle d-flex align-items-center`}
                                    type="button"
                                    id="themeDropdown"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    aria-label="Select theme"
                                >
                                    <span className="me-2">{modeIcons[mode]}</span>
                                    {capitalize(mode)}
                                </button>

                                <ul
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="themeDropdown"
                                >
                                    {Object.keys(modeIcons).map((key) => (
                                        <li key={key}>
                                            <button
                                                className={`dropdown-item ${mode === key ? 'active' : ''}`}
                                                onClick={() => setMode(key)}
                                            >
                                                <span className="me-2">{modeIcons[key]}</span>
                                                {capitalize(key)}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
