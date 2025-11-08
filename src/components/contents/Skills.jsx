import React from 'react'

const skillCategories = [
    {
        id: 1,
        category: 'Frontend Development',
        color: 'text-sky-400',
        skills: [
            'React.js / Next.js',
            'JavaScript (ES6+)',
            'TypeScript',
            'HTML5 & Accessibility',
            'Redux / Context API',
            'RESTful APIs Integration',
        ],
    },
    {
        id: 2,
        category: 'Styling & UX/UI',
        color: 'text-emerald-400',
        skills: [
            'Tailwind CSS',
            'Sass / SCSS',
            'Bootstrap',
            'Figma & Prototyping',
            'Responsive Design',
            'UI/UX Principles',
        ],
    },
    {
        id: 3,
        category: 'Backend & Database',
        color: 'text-amber-400',
        skills: [
            'Node.js & Express.js',
            'MongoDB / Mongoose',
            'PostgreSQL / SQL',
            'Authentication (JWT)',
            'Serverless Functions',
            'API Design & Development',
        ],
    },
    {
        id: 4,
        category: 'Tools & Workflow',
        color: 'text-rose-400',
        skills: [
            'Git & GitHub / GitLab',
            'Docker & Containers',
            'NPM / Yarn / PNPM',
            'Agile / Scrum Methodology',
            'Testing (Jest, Cypress)',
            'CI/CD Pipelines',
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="skills-content py-12 px-6 lg:px-20 text-[#CCD6F6] font-mono min-h-screen">

            {/* Main Heading - Consistent with Home component styling */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left mb-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#64FFDA]">
                    <span className="text-[#8892B0] font-medium text-xl mr-3">04.</span> My Core Technical Stack
                </h1>
                <p className="text-[#8892B0] text-lg mt-4 max-w-2xl">
                    Technologies and tools I use to bring ideas to life
                </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {skillCategories.map((categoryData) => (
                    <div
                        key={categoryData.id}
                        className="bg-[#112240] p-6 rounded-lg border border-[#64FFDA]/20 
                                shadow-inner shadow-white/10 hover:shadow-2xl hover:shadow-[#64FFDA]/10
                                transition-all duration-300 hover:translate-y-[-5px] group"
                    >
                        {/* Category Header */}
                        <div className="flex items-center mb-6 pb-4 border-b border-[#64FFDA]/20">
                            <div className={`w-3 h-3 rounded-full ${categoryData.color.replace('text', 'bg')} mr-3 group-hover:animate-pulse`}></div>
                            <h2 className={`text-xl font-semibold ${categoryData.color}`}>
                                {categoryData.category}
                            </h2>
                        </div>

                        {/* Skills List */}
                        <ul className="space-y-3">
                            {categoryData.skills.map((skill, index) => (
                                <li
                                    key={index}
                                    className="flex items-center text-sm sm:text-base text-[#CCD6F6] 
                                            hover:text-[#64FFDA] transition-colors duration-200 group-hover:translate-x-1"
                                >
                                    <span className="mr-3 text-[#64FFDA] text-lg transition-transform duration-300 group-hover:scale-110">▹</span>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Call to Action */}
            <div className="flex flex-col items-center mt-16 text-center">
                <p className="text-[#8892B0] max-w-2xl mx-auto text-base mb-8">
                    I'm continuously expanding my knowledge and adapting to new technologies in the ever-evolving development ecosystem.
                    Always excited to learn and implement cutting-edge solutions.
                </p>

                <div className="flex flex-wrap gap-4 justify-center">
                    <a
                        href="#projects"
                        className="bg-[#64FFDA]/20 text-[#64FFDA] px-6 py-3 rounded-lg
                            shadow-inner shadow-white/20 border border-white/20
                            hover:bg-[#64FFDA]/40 transition-all duration-300 font-medium
                            hover:translate-y-[-2px]"
                    >
                        View My Projects
                    </a>
                    <a
                        href="#contact"
                        className="bg-[#64FFDA]/20 text-[#64FFDA] px-6 py-3 rounded-lg
                            shadow-inner shadow-white/20 border border-white/20
                            hover:bg-[#64FFDA]/40 transition-all duration-300 font-medium
                            hover:translate-y-[-2px]"
                    >
                        Let's Collaborate
                    </a>
                </div>
            </div>
        </section>
    )
}