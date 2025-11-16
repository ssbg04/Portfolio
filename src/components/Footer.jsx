import React from 'react';
import useTheme from '../hooks/useTheme';

const Footer = () => {
    const { theme } = useTheme();

    // Bootstrap hover-friendly link classes
    const linkClass =
        theme === 'light'
            ? 'text-dark link-primary'   // dark text, blue hover
            : 'text-light link-info';    // light text, light-blue hover

    return (
        <footer className={`text-center text-lg-start mt-auto border-top ${theme === 'light' ? 'bg-light text-dark' : 'bg-dark text-light'}`}>
            <div className="container p-4">
                <div className="row">

                    {/* About */}
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Cris Charles</h5>
                        <p>
                            Passionate developer/designer. Let's build something amazing together.
                        </p>
                    </div>

                    {/* Nav links */}
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled mb-0">
                            <li><a href="#home" className={linkClass}>Home</a></li>
                            <li><a href="#about" className={linkClass}>About</a></li>
                            <li><a href="#projects" className={linkClass}>Projects</a></li>
                            <li><a href="#contact" className={linkClass}>Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact info */}
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Contact</h5>
                        <ul className="list-unstyled mb-0">
                            <li><a href="mailto:crischarlesgarcia345@gmail.com" className={linkClass}>crischarlesgarcia345@gmail.com</a></li>
                            <li><a href="tel:+639914970689" className={linkClass}>+63 991 4970 689</a></li>
                            <li><a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className={linkClass}>LinkedIn</a></li>
                            <li><a href="https://github.com/ssbg04" target="_blank" rel="noopener noreferrer" className={linkClass}>GitHub</a></li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className={`text-center p-3 ${theme === 'light' ? 'bg-secondary text-light' : 'bg-black text-light'}`}>
                © {new Date().getFullYear()} Cris Charles. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
