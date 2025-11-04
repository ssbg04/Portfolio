import React from 'react'

function Navbar() {
    const scrollToSection = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    return (
        <div className='bg-[#112240] text-[#FFFFFF] p-4 h-auto sticky top-0 z-50'>
            <nav>
                <span className='font-bold text-2xl '>Cris Charles</span>
                <ul className='flex space-x-4 float-right justify-center'>
                    <li className='hover:text-[#52E0C4] transition-colors duration-200'
                        onClick={() => scrollToSection("home")}
                    ><a href="#home">
                            Home</a></li>
                    <li className='hover:text-[#52E0C4] transition-colors duration-200'
                    ><a href="#about">
                            About</a></li>
                    <li className='hover:text-[#52E0C4] transition-colors duration-200'
                        onClick={() => scrollToSection("contact")}
                    ><a href="#contact">
                            Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar