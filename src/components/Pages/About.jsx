import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion'; // 👈 Import motion and useInView
import useTheme from '../../hooks/useTheme';
import profile from '../../assets/profile.jpg';
import resume from '../../assets/resume.pdf';

const About = () => {
    const { theme } = useTheme();

    const myInfo = {
        name: "Cris Charles V. Garcia",
        location: "Liliw, Laguna, Philippines",
        education: "3rd year BSIT Student, Software Development Major",
        osSkills: ["Windows", "Linux"],
        learningFocus: "Still learning about modern technologies",
        goals: "I want to work with someone I can learn from and grow together.",
        interests: [
            "Software Development",
            "Problem Solving",
            "Teamwork",
            "Continuous Learning",
        ],
    };

    const cardBg =
        theme === "light"
            ? "rgba(255, 255, 255, 0.95)"
            : "rgba(33, 37, 41, 0.95)";
    const cardText = theme === "light" ? "text-dark" : "text-light";
    const frameBorder = theme === "light" ? "#ddd" : "#555";

    // 1. Create refs for the elements you want to track
    const textRef = useRef(null);
    const imageRef = useRef(null);

    // 2. Use useInView hook to detect when elements are visible
    // 'once: true' ensures the animation only plays one time
    const isTextInView = useInView(textRef, { once: true, amount: 0.3 }); // 30% visible to trigger
    const isImageInView = useInView(imageRef, { once: true, amount: 0.5 }); // 50% visible to trigger

    // 3. Define the animation variants

    // Text (Left Side) - slides in from the left
    const textVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                staggerChildren: 0.1 // Stagger children elements
            },
        },
    };

    // Image (Right Side) - slides in from the right and scales up slightly
    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8, x: 50 },
        visible: {
            opacity: 1,
            scale: 1,
            x: 0,
            transition: { duration: 0.7, ease: "easeOut" },
        },
    };

    // Item variant for staggered text elements
    const itemVariant = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
    };


    return (
        <section id="about" className="mb-5" style={{ scrollMarginTop: "70px" }}>
            <div
                className={`card shadow-lg border-0 ${cardText}`}
                style={{
                    backgroundColor: cardBg,
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                }}
            >
                <div className="card-body p-4 p-md-5">
                    <div className="row align-items-center">

                        {/* LEFT: INFORMATION (60%) */}
                        {/* 4. Apply motion to the container and link to the ref */}
                        <motion.div
                            ref={textRef}
                            className="col-12 col-lg-7 mb-4 mb-lg-0"
                            variants={textVariants}
                            initial="hidden"
                            animate={isTextInView ? "visible" : "hidden"} // Triggers on scroll
                        >
                            <motion.h2 className="display-6 fw-bold mb-4" variants={itemVariant}>
                                About Me
                            </motion.h2>

                            <motion.p className="mb-3" variants={itemVariant}>
                                Hi! I'm <strong>{myInfo.name}</strong> from {myInfo.location}. I'm
                                currently a {myInfo.education}.
                            </motion.p>

                            <motion.p className="mb-3" variants={itemVariant}>
                                I am comfortable using{" "}
                                <strong>{myInfo.osSkills.join(" and ")}</strong> operating systems and I'm still
                                learning about modern technologies to improve my skills.
                            </motion.p>

                            <motion.p className="mb-3" variants={itemVariant}>
                                My goal is to work with someone I can learn from, improve my
                                skills, and grow professionally.
                            </motion.p>

                            <motion.p className="mb-2 fw-semibold" variants={itemVariant}>Interests:</motion.p>

                            {/* Interest Badges - Stagger them using a nested motion.div */}
                            <motion.div
                                className="d-flex flex-wrap gap-2 mb-3"
                                variants={textVariants} // Use textVariants container properties for stagger
                                initial="hidden"
                                animate={isTextInView ? "visible" : "hidden"}
                            >
                                {myInfo.interests.map((item, index) => (
                                    <motion.span
                                        key={index}
                                        className={`badge ${theme === "light"
                                            ? "bg-light text-dark border"
                                            : "bg-secondary text-light"
                                            }`}
                                        variants={itemVariant} // Use item variant for badges
                                    >
                                        {item}
                                    </motion.span>
                                ))}
                            </motion.div>

                            {/* DOWNLOAD RESUME BUTTON */}
                            <motion.a
                                href={resume}
                                download="Cris_Charles_Garcia_Resume.pdf"
                                className={`fw-bold px-6 py-3 inline-block text-center rounded-lg text-lg transition-all duration-300 shadow-xl
                                    ${theme === "light"
                                        ? "bg-gradient-to-r from-green-400 to-teal-400 text-black hover:from-green-300 hover:to-teal-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,150,0.7)]"
                                        : "bg-gradient-to-r from-teal-500 to-green-500 text-white hover:from-teal-600 hover:to-green-600 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,150,0.8)]"
                                    }`}
                                variants={itemVariant}
                            >
                                Download Resume
                            </motion.a>

                        </motion.div>

                        {/* RIGHT: PICTURE (40%) */}
                        {/* 5. Apply motion to the image container and link to the ref */}
                        <motion.div
                            ref={imageRef}
                            className="col-12 col-lg-5 d-flex justify-content-center"
                            variants={imageVariants}
                            initial="hidden"
                            animate={isImageInView ? "visible" : "hidden"} // Triggers on scroll
                        >
                            <div
                                style={{
                                    width: "260px",
                                    height: "260px",
                                    borderRadius: "22px",
                                    overflow: "hidden",
                                    border: `3px solid ${frameBorder}`,
                                    backgroundColor:
                                        theme === "light" ? "#f8f9fa" : "#1e1e1e",
                                    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                                }}
                            >
                                <img
                                    src={profile}
                                    alt="Profile"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        objectPosition: "50% 45%",
                                        transform: "scale(0.92)",
                                    }}
                                />
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;