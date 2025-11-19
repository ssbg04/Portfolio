import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import useTheme from '../../hooks/useTheme';

const Contact = () => {
    const { theme } = useTheme();

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const bgClass = theme === 'light' ? 'bg-white text-dark' : 'bg-dark text-light';
    const btnClass = theme === 'light' ? 'btn-outline-primary' : 'btn-outline-light';

    const contactInfo = {
        email: "crischarlesgarcia345@gmail.com",
        github: "https://github.com/ssbg04",
        linkedin: "https://www.linkedin.com/in/cris-charles-garcia-187415303/",
        phone: "+63 991 4970 689",
    };

    // SVG Icons
    const EmailIcon = () => (
        <svg className="me-2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
        </svg>
    );

    const PhoneIcon = () => (
        <svg className="me-2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    );

    const GitHubIcon = () => (
        <svg className="me-2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
    );

    const LinkedInIcon = () => (
        <svg className="me-2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    );

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1,
                when: "beforeChildren",
            },
        },
    };

    const itemVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section id="contact" className="mb-5" style={{ scrollMarginTop: "70px" }}>
            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className={`card shadow-lg border-0 ${bgClass}`}
                style={{
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                }}
            >
                <div className="card-body p-4 p-md-5">

                    <motion.h2 className="display-6 fw-bold mb-4" variants={itemVariant}>
                        Get in Touch
                    </motion.h2>

                    <motion.p className="mb-4" variants={itemVariant}>
                        I welcome opportunities for collaboration, project inquiries, or professional discussions.
                        Feel free to reach out through any of the contact options below.
                    </motion.p>

                    <motion.div className="d-flex flex-column flex-md-row flex-wrap gap-3">

                        {/* DIRECT MAILTO LINK */}
                        <motion.a
                            href={`mailto:${contactInfo.email}`}
                            variants={itemVariant}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`btn ${btnClass} d-flex align-items-center justify-content-center flex-grow-1`}
                        >
                            <EmailIcon />
                            Email
                        </motion.a>

                        {/* PHONE BUTTON */}
                        <motion.a
                            href={`tel:${contactInfo.phone}`}
                            variants={itemVariant}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`btn ${btnClass} d-flex align-items-center justify-content-center flex-grow-1`}
                        >
                            <PhoneIcon />
                            Call
                        </motion.a>

                        {/* GITHUB BUTTON */}
                        <motion.a
                            href={contactInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={itemVariant}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`btn ${btnClass} d-flex align-items-center justify-content-center flex-grow-1`}
                        >
                            <GitHubIcon />
                            GitHub
                        </motion.a>

                        {/* LINKEDIN BUTTON */}
                        <motion.a
                            href={contactInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={itemVariant}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`btn ${btnClass} d-flex align-items-center justify-content-center flex-grow-1`}
                        >
                            <LinkedInIcon />
                            LinkedIn
                        </motion.a>
                    </motion.div>

                    <motion.p className="mt-4 text-muted small" variants={itemVariant}>
                        I typically respond within 24–48 hours. Looking forward to connecting with you.
                    </motion.p>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;