import React, { useState, useEffect } from 'react';

function Projects() {
    // Sample project data - replace with your actual projects
    const projects = [
        {
            id: 1,
            title: 'Project One',
            description: 'A brief description of the first project.',
            image: 'https://via.placeholder.com/300x200', // Replace with actual image URL
            technologies: ['React', 'Tailwind CSS', 'Node.js'],
            github: 'https://github.com/yourusername/project-one',
            live: 'https://project-one-demo.com',
            details: 'More detailed information about Project One, including features, challenges, and outcomes.'
        },
        {
            id: 2,
            title: 'Project Two',
            description: 'A brief description of the second project.',
            image: 'https://via.placeholder.com/300x200',
            technologies: ['Vue.js', 'Firebase', 'CSS'],
            github: 'https://github.com/yourusername/project-two',
            live: 'https://project-two-demo.com',
            details: 'More detailed information about Project Two, including features, challenges, and outcomes.'
        },
        {
            id: 3,
            title: 'Project Three',
            description: 'A brief description of the first project.',
            image: 'https://via.placeholder.com/300x200', // Replace with actual image URL
            technologies: ['React', 'Tailwind CSS', 'Node.js'],
            github: 'https://github.com/yourusername/project-one',
            live: 'https://project-one-demo.com',
            details: 'More detailed information about Project One, including features, challenges, and outcomes.'
        },
        {
            id: 4,
            title: 'Project Four',
            description: 'A brief description of the second project.',
            image: 'https://via.placeholder.com/300x200',
            technologies: ['Vue.js', 'Firebase', 'CSS'],
            github: 'https://github.com/yourusername/project-two',
            live: 'https://project-two-demo.com',
            details: 'More detailed information about Project Two, including features, challenges, and outcomes.'
        },
        {
            id: 5,
            title: 'Project Five',
            description: 'A brief description of the first project.',
            image: 'https://via.placeholder.com/300x200', // Replace with actual image URL
            technologies: ['React', 'Tailwind CSS', 'Node.js'],
            github: 'https://github.com/yourusername/project-one',
            live: 'https://project-one-demo.com',
            details: 'More detailed information about Project One, including features, challenges, and outcomes.'
        },
        {
            id: 6,
            title: 'Project Six',
            description: 'A brief description of the second project.',
            image: 'https://via.placeholder.com/300x200',
            technologies: ['Vue.js', 'Firebase', 'CSS'],
            github: 'https://github.com/yourusername/project-two',
            live: 'https://project-two-demo.com',
            details: 'More detailed information about Project Two, including features, challenges, and outcomes.'
        },
        {
            id: 7,
            title: 'Project Seven',
            description: 'A brief description of the first project.',
            image: 'https://via.placeholder.com/300x200', // Replace with actual image URL
            technologies: ['React', 'Tailwind CSS', 'Node.js'],
            github: 'https://github.com/yourusername/project-one',
            live: 'https://project-one-demo.com',
            details: 'More detailed information about Project One, including features, challenges, and outcomes.'
        },
        {
            id: 8,
            title: 'Project Eight',
            description: 'A brief description of the second project.',
            image: 'https://via.placeholder.com/300x200',
            technologies: ['Vue.js', 'Firebase', 'CSS'],
            github: 'https://github.com/yourusername/project-two',
            live: 'https://project-two-demo.com',
            details: 'More detailed information about Project Two, including features, challenges, and outcomes.'
        },
        // Add more projects as needed
    ];

    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        };

        if (isModalOpen) {
            window.addEventListener('keydown', handleEscape);
        }

        return () => {
            window.removeEventListener('keydown', handleEscape);
        };
    }, [isModalOpen]);

    return (
        <section className="py-12 px-6 lg:px-20 text-[#CCD6F6]">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-left mb-8 text-[#64FFDA]">
                <span className="text-[#8892B0] font-medium text-xl mr-3">02.</span>My Projects
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 border border-white/30 rounded-2xl lg:grid-cols-3 max-h-[65vh] overflow-y-auto gap-8">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-[#112240]/40 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
                        onClick={() => openModal(project)}
                    >
                        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2 text-[#64FFDA]">{project.title}</h3>
                            <p className="text-[#ffffff] mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="bg-[#64FFDA]/20 text-[#64FFDA] px-2 py-1 rounded text-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {isModalOpen && selectedProject && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-xl rounded-4xl flex items-center justify-center z-50" onClick={closeModal}>
                    <div className="bg-[#112240] rounded-lg max-w-2xl w-full mx-4 p-6 relative" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="absolute top-4 right-4 text-[#64FFDA] cursor-pointer hover:text-white text-4xl"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                        <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover rounded mb-4" />
                        <h3 className="text-2xl font-bold mb-2 text-[#64FFDA]">{selectedProject.title}</h3>
                        <p className="text-[#CCD6F6] mb-4">{selectedProject.details}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {selectedProject.technologies.map((tech, index) => (
                                <span key={index} className="bg-[#64FFDA]/20 text-[#64FFDA] px-2 py-1 rounded text-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex gap-4">
                            <a
                                href={selectedProject.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#64FFDA]/20 text-[#64FFDA] px-4 py-2 rounded hover:bg-[#64FFDA]/40 transition-colors"
                            >
                                GitHub
                            </a>
                            <a
                                href={selectedProject.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#64FFDA]/20 text-[#64FFDA] px-4 py-2 rounded hover:bg-[#64FFDA]/40 transition-colors"
                            >
                                Live Demo
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Projects;
