import React from 'react'
import myPic from '../../assets/formal.jpg'
// You might need to import the animation styles if you use them in the 'About' text later
// import '../../styles/animation.css'

function About() {
    return (
        <section className="home-content flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 font-mono py-12 px-6 lg:px-20 min-h-screen">

            {/* Text Content - Left Column (Order 1) */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 order-1 lg:order-1">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#64FFDA] leading-tight mb-4">
                    <span className="text-[#8892B0] font-medium text-xl mr-3">03.</span> About Me
                </h1>

                <p className="text-[#CCD6F6] max-w-xl text-base sm:text-lg leading-relaxed">
                    Hello! I'm Cris Charles, a passionate Software Developer based in the Laguna, Philippines. I specialize in building **interactive and user-centric web applications** using modern technologies. My journey into web development began with a simple curiosity: how are complex interfaces built? This curiosity quickly grew into a drive to create efficient, scalable, and beautifully designed digital experiences.
                </p>

                <p className="text-[#CCD6F6] max-w-xl text-base sm:text-lg leading-relaxed">
                    I have professional experience working with various stacks and enjoy tackling challenging problems that require a thoughtful blend of creativity and engineering discipline.
                </p>

                <p className="text-[#CCD6F6] max-w-xl text-base sm:text-lg leading-relaxed">
                    Here are a few technologies I’ve been working with recently:
                </p>

                {/* List of Technologies */}
                <ul className="grid grid-cols-2 gap-2 text-sm text-[#64FFDA] max-w-sm lg:text-left">
                    <li><span className="mr-2 text-sm">▹</span> JavaScript (ES6+)</li>
                    <li><span className="mr-2 text-sm">▹</span> React</li>
                    <li><span className="mr-2 text-sm">▹</span> Node.js</li>
                    <li><span className="mr-2 text-sm">▹</span> Next.js</li>
                    <li><span className="mr-2 text-sm">▹</span> Tailwind CSS</li>
                    <li><span className="mr-2 text-sm">▹</span> TypeScript</li>
                </ul>
            </div>

            {/* Image Content - Right Column (Order 2) */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-2 lg:order-2 mt-8 lg:mt-0 relative">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 group">
                    <img
                        src={myPic}
                        alt="formal-pic"
                        className='rounded-md object-cover w-full h-full filter grayscale hover:filter-none transition-all duration-500 ease-in-out'
                    />

                    {/* Placeholder Border/Frame Effect */}
                    <div className="absolute top-4 left-4 w-full h-full border-2 border-[#64FFDA] rounded-md transition-all duration-500 ease-in-out group-hover:top-2 group-hover:left-2 group-hover:bg-[#64FFDA]/10 z-[-1]"></div>
                </div>
            </div>

        </section>
    )
}

export default About