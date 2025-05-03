import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaDownload } from 'react-icons/fa';
import '../AboutPage.css';
import img from "../assets/photo.png";  // Use "../" if you're in a sub-folder

const AboutPage = () => {
    const [theme, setTheme] = useState('dark');
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const skills = [
        { name: 'React', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'TensorFlow', level: 75 },
        { name: 'Firebase', level: 85 },
        { name: 'MongoDB', level: 80 },
    ];

    const timeline = [
        {
            year: '2023',
            title: 'AI-Powered Task Prioritizer',
            description: 'Built a smart task management system using ML algorithms'
        },
        {
            year: '2022',
            title: 'Bill Scanner App',
            description: 'Developed an OCR-based bill scanning application'
        },
        {
            year: '2021',
            title: 'Service Aggregator Platform',
            description: 'Created a mobile service marketplace for local businesses'
        }
    ];

    const projects = [
        {
            title: 'Smart Task Prioritizer',
            tech: ['React', 'TensorFlow', 'Firebase'],
            description: 'AI-powered task management system'
        },
        {
            title: 'Bill Scanner Pro',
            tech: ['Python', 'OpenCV', 'React Native'],
            description: 'Automated bill scanning and management'
        },
        {
            title: 'ServiceHub Nepal',
            tech: ['Next.js', 'Node.js', 'MongoDB'],
            description: 'Service marketplace platform'
        }
    ];

    const softSkills = [
        'Team Leadership', 'Problem Solving', 'Adaptability',
        'Communication', 'Time Management', 'Innovation',
        'Critical Thinking', 'Collaboration', 'Self-Motivation'
    ];

    return (
        <div className={`about-container ${theme}`}>
            {/* Theme Toggle */}
            <button className="theme-toggle" onClick={toggleTheme}>
                {theme === 'dark' ? '🌞' : '🌙'}
            </button>

            {/* Scroll Progress */}
            <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

            {/* Hero Section */}
            <section className="hero-section">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-content"
                >
                    <h1>Abishek Ghimire</h1>
                    <h2>Full-Stack Developer & ML Enthusiast</h2>
                    <p>Building scalable tech products with a focus on user experience and innovation</p>
                    <div className="social-links">
                        <a href="https://github.com/Abishek-077" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/abishek-ghimire-ab88072a7/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                        <a href="mailto:your@email.com">
                            <FaEnvelope />
                        </a>
                    </div>
                    <button className="resume-button">
                        <FaDownload /> Download Resume
                    </button>
                </motion.div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="stats-grid">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="stat-card"
                    >
                        <h3>20+</h3>
                        <p>Projects Completed</p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="stat-card"
                    >
                        <h3>4</h3>
                        <p>Startup MVPs</p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="stat-card"
                    >
                        <h3>2+</h3>
                        <p>Years Experience</p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="stat-card"
                    >
                        <h3>10+</h3>
                        <p>Technologies</p>
                    </motion.div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="skills-section">
                <h2>Technical Skills</h2>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="skill-item"
                        >
                            <div className="skill-info">
                                <span>{skill.name}</span>
                                <span>{skill.level}%</span>
                            </div>
                            <div className="skill-bar">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    transition={{ duration: 1, delay: index * 0.1 }}
                                    className="skill-progress"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Timeline Section */}
            <section className="timeline-section">
                <h2>Career Timeline</h2>
                <div className="timeline">
                    {timeline.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="timeline-item"
                        >
                            <div className="timeline-year">{item.year}</div>
                            <div className="timeline-content">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Projects Section */}
            <section className="projects-section">
                <h2>Featured Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="project-card"
                        >
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="tech-tags">
                                {project.tech.map((tech, i) => (
                                    <span key={i}>{tech}</span>
                                ))}
                            </div>
                            <button className="learn-more">Learn More</button>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Soft Skills Section */}
            <section className="soft-skills-section">
                <h2>Soft Skills</h2>
                <div className="skills-cloud">
                    {softSkills.map((skill, index) => (
                        <motion.span
                            key={index}
                            whileHover={{ scale: 1.2 }}
                            className="skill-tag"
                        >
                            {skill}
                        </motion.span>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
