import React from 'react'

function Footer() {
    return (
        <footer className="bg-[#112240] text-[#8892B0] text-center py-6" id="contact">
            <p className="mb-4">&copy; 2025 Cris Charles.</p>

            <ul className="flex flex-row justify-center gap-6 flex-wrap">
                <li>
                    <a
                        href="https://github.com/ssbg04"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#64FFDA] transition-colors duration-200"
                    >
                        Github
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/cris-charles-garcia-187415303/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#64FFDA] transition-colors duration-200"
                    >
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a
                        href="mailto:crischarlesgarcia345@example.com?subject=Project%20Inquiry"
                        className="hover:text-[#64FFDA] transition-colors duration-200"
                    >
                        Email
                    </a>
                </li>
            </ul>
        </footer>

    )
}

export default Footer