import React from 'react';
import useTheme from '../../hooks/useTheme';
import { motion } from 'framer-motion';

const Home = () => {
    const { theme } = useTheme();

    const info = {
        name: "Cris Charles",
        title: "BSIT Student • Software Development Major",
        summary:
            "Aspiring software developer passionate about designing and developing practical information systems using PHP, C#, ReactJS, Node.js, and modern database tools.",
        skills: [
            "PHP", "C# (WinForms)", "ReactJS", "Node.js",
            "MySQL", "PostgreSQL", "HTML", "CSS", "Javascript", "Bootstrap",
            "Python", "TailwindCSS",
        ],
        projects: [
            "Library System (C# WinForms + MySQL)",
            "Tiny College System (PHP + MySQL)",
            "UniMarket E-Commerce Platform (PHP + MySQL)"
        ]
    };

    // Use only opacity to prevent layout shifts
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.1,
                staggerChildren: 0.05,
            },
        },
    };

    // Only opacity changes - no transforms that affect layout
    const itemVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.4 }
        },
    };

    return (
        <section id="home" className="mb-5" style={{ scrollMarginTop: "70px" }}>
            <motion.div
                className={`card shadow-lg border-0 ${theme === "light" ? "bg-white" : "bg-dark text-light"}`}
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <div className="card-body p-4 p-md-5">
                    <motion.h1
                        className="display-5 fw-bold mb-3"
                        variants={itemVariants}
                    >
                        Hi, I'm <span className="text-primary">{info.name}</span> 👋
                    </motion.h1>

                    <motion.p className="fs-5 fw-semibold mb-3" variants={itemVariants}>
                        {info.title}
                    </motion.p>

                    <motion.p
                        className="mb-4"
                        style={{ maxWidth: "650px" }}
                        variants={itemVariants}
                    >
                        {info.summary}
                    </motion.p>

                    {/* --- Tech Stack Section --- */}
                    <motion.h4 className="fw-semibold mb-3" variants={itemVariants}>
                        Tech Stack
                    </motion.h4>

                    <div className="d-flex flex-wrap gap-2 mb-4">
                        {info.skills.map((skill, index) => (
                            <motion.span
                                key={index}
                                className={`badge px-3 py-2 ${theme === "light" ? "bg-light text-dark border" : "bg-secondary text-light"}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    delay: 0.3 + (index * 0.02),
                                    duration: 0.3
                                }}
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>

                    {/* --- Projects Section --- */}
                    <motion.h4 className="fw-semibold mb-3" variants={itemVariants}>
                        Featured Projects
                    </motion.h4>

                    <ul className="list-group list-group-flush mb-3">
                        {info.projects.map((proj, index) => (
                            <motion.li
                                key={index}
                                className={`list-group-item ${theme === "light" ? "bg-white" : "bg-dark text-light border-secondary"}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    delay: 0.4 + (index * 0.1),
                                    duration: 0.3
                                }}
                            >
                                {proj}
                            </motion.li>
                        ))}
                    </ul>

                    {/* --- Buttons --- */}
                    <motion.div
                        className="mt-4 d-flex flex-wrap gap-3"
                        variants={itemVariants}
                    >
                        <a href="#projects" className="btn btn-primary px-4">View My Projects</a>
                        <a href="#contact" className="btn btn-outline-primary px-4">Contact Me</a>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Home;