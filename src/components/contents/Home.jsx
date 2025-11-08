import React from 'react'
import '../../styles/animation.css'

export default function Home() {
    return (
        <section className="home-content flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 font-mono py-12 px-6 lg:px-20">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 order-1 lg:order-1">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFFFFF] leading-tight">
                    <span className="text-[#8892B0] font-medium text-xl mr-3">01.</span>
                    Hi, I'm
                    <span className="text-[#64FFDA] fade-slide-in"> Cris Charles</span>
                </h1>

                <h3 className="text-2xl sm:text-3xl md:text-4xl text-[#8892B0] font-medium">
                    Software Developer & Web Enthusiast
                </h3>

                <p className="text-[#CCD6F6] max-w-xl text-base sm:text-lg leading-relaxed">
                    I build interactive, responsive, and modern web applications using React, JavaScript, and other cutting-edge front-end tools.
                    I’m passionate about transforming complex challenges into sleek, efficient digital experiences.
                </p>

                <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-4">
                    <a
                        href="#projects"
                        className="bg-[#64FFDA]/20 text-[#64FFDA] px-6 py-2 rounded-lg
                            shadow-inner shadow-white/20 border border-white/20
                        hover:bg-[#64FFDA]/40 transition-colors duration-300 font-medium"
                    >
                        View My Work
                    </a>
                    <a
                        href="#contact"
                        className="bg-[#64FFDA]/20 text-[#64FFDA] px-6 py-2 rounded-lg
                            shadow-inner shadow-white/20 border border-white/20
                        hover:bg-[#64FFDA]/40 transition-colors duration-300 font-medium"
                    >
                        Contact Me
                    </a>
                </div>
            </div>

            {/* SVG Laptop — fixed position on mobile (below text) */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-2 lg:order-2 mt-8 lg:mt-0">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 480"
                    className="w-60 sm:w-72 md:w-96 h-auto animate-float"
                >
                    <rect x="120" y="100" width="400" height="250" rx="10" fill="#0A192F" stroke="#64FFDA" strokeWidth="6" />
                    <rect x="160" y="140" width="320" height="170" fill="#112240" />
                    <rect x="100" y="350" width="440" height="25" rx="5" fill="#64FFDA" opacity="0.6" />
                    <rect x="200" y="375" width="240" height="10" rx="3" fill="#8892B0" />
                </svg>
            </div>
        </section>
    )
}
