import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion'; // 👈 Import motion, useInView, useRef
import useTheme from '../../hooks/useTheme';

const Projects = () => {
    const { theme } = useTheme();
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: "Library System",
            tech: ["C# WinForms", "MySQL"],
            description: "A library management system built with C# WinForms and MySQL for handling book records, members, and borrowing/returning processes.",
            github: "https://github.com/yourusername/library-system",
            showcase: "Screenshots or demo video of Library System."
        },
        {
            title: "Tiny College System",
            tech: ["PHP", "MySQL"],
            description: "A small-scale college management system for managing students, courses, and grades using PHP and MySQL.",
            github: "https://github.com/yourusername/tiny-college-system",
            showcase: "Screenshots or demo video of Tiny College System."
        },
        {
            title: "UniMarket E-Commerce Platform",
            tech: ["PHP", "MySQL"],
            description: "An e-commerce platform for university-related products built with PHP and MySQL.",
            github: "https://github.com/yourusername/unimarket",
            showcase: "Screenshots or demo video of UniMarket."
        },
        {
            title: "Portfolio",
            tech: ["React", "Bootstrap"],
            description: "A simple portfolio made with react and bootstrap css.",
            github: "https://github.com/yourusername/porfolio",
            showcase: "Screenshots or demo video of porfolio."
        },
    ];

    // Animation setup
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 }); // Trigger when 20% of the container is visible

    // Container variant to stagger the children (project cards)
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // Delay between each project card appearing
                delayChildren: 0.2,
            },
        },
    };

    // Item variant for individual project cards (fades up slightly)
    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 150,
                damping: 20,
            },
        },
    };

    return (
        <section id="projects" className="mb-5" style={{ scrollMarginTop: "70px" }}>
            <div className={`card shadow-lg border-0 ${theme === "light" ? "bg-white text-dark" : "bg-dark text-light"}`}>
                <div className="card-body p-4 p-md-5">
                    {/* 1. Animate the Heading */}
                    <motion.h2
                        className="display-6 fw-bold mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        Projects
                    </motion.h2>

                    {/* 2. Animate the grid container and attach the ref */}
                    <motion.div
                        className="row g-4"
                        ref={ref}
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        {projects.map((project, index) => (
                            <div key={index} className="col-12 col-md-6 col-lg-4">
                                {/* 3. Animate each project card */}
                                <motion.div
                                    variants={itemVariants} // Use itemVariants here for staggered entrance
                                    className={`card h-100 ${theme === "light" ? "border-light" : "border-secondary"}`}
                                    role="button"
                                    onClick={() => setSelectedProject(project)}
                                    whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title fw-semibold">{project.title}</h5>
                                        <p className="text-muted mb-2 small">{project.tech.join(" • ")}</p>
                                        <p className="card-text">{project.description}</p>
                                        <div className="mt-auto">
                                            <span className={`badge ${theme === "light" ? "bg-light text-dark border" : "bg-secondary text-light"}`}>
                                                {project.tech.join(", ")}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Modal and Backdrop remain unchanged */}
                    {selectedProject && (
                        <div className="modal show fade d-block" tabIndex="-1" role="dialog">
                            <div className="modal-dialog modal-lg" role="document">
                                <div className={`modal-content ${theme === "light" ? "" : "bg-dark text-light"}`}>
                                    <div className="modal-header">
                                        <h5 className="modal-title">{selectedProject.title}</h5>
                                        <button type="button" className="btn-close" aria-label="Close" onClick={() => setSelectedProject(null)}></button>
                                    </div>
                                    <div className="modal-body">
                                        <p><strong>Tech Stack:</strong> {selectedProject.tech.join(", ")}</p>
                                        <p>{selectedProject.description}</p>
                                        <p><strong>Showcase:</strong></p>
                                        {selectedProject.showcase.includes("youtube") ? (
                                            <div className="ratio ratio-16x9">
                                                <iframe
                                                    src={selectedProject.showcase}
                                                    title={selectedProject.title}
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                ></iframe>
                                            </div>
                                        ) : (
                                            <p>{selectedProject.showcase}</p>
                                        )}
                                    </div>
                                    <div className="modal-footer">
                                        <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                            View on GitHub
                                        </a>
                                        <button type="button" className="btn btn-secondary" onClick={() => setSelectedProject(null)}>
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {selectedProject && <div className="modal-backdrop fade show"></div>}
                </div>
            </div>
        </section>
    );
};

export default Projects;    