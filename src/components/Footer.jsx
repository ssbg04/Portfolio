import React from 'react';
import '../styles/fonts.css';

function Footer() {
    const scrollToSection = (id) =>
        document.getElementById(id) &&
        window.scrollTo({
            top: document.getElementById(id).offsetTop - 80,
            behavior: 'smooth',
        });

    return (
        <footer
            className="mx-auto max-w-7xl  bottom-0 left-0 text-center text-sm md:text-base py-4 px-6
                 bg-white/1.5 backdrop-blur-xl border-t border-white/20 shadow-white/20 shadow-inner
                 rounded-t-4xl text-[#8892B0] flex flex-col items-center justify-center gap-3 sm:gap-8 select-none"
            id="contact"
        >
            <p className="text-center sm:text-left md:text-base">
                &copy; 2025{' '}
                <span
                    className="hover:text-[#64FFDA] cursor-pointer font-semibold transition-colors duration-200"
                    onClick={() => scrollToSection('home')}
                >
                    Cris Charles
                </span>
                . All Rights Reserved.
            </p>

            <ul className="flex flex-row justify-center gap-6 flex-wrap mt-2">
                <li>
                    <a
                        href="https://github.com/ssbg04"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#64FFDA] hover:underline transition-colors duration-200"
                    >
                        Github
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/cris-charles-garcia-187415303/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#64FFDA] hover:underline transition-colors duration-200"
                    >
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a
                        href="mailto:crischarlesgarcia345@example.com?subject=Project%20Inquiry"
                        className="hover:text-[#64FFDA] hover:underline transition-colors duration-200"
                    >
                        Email
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
