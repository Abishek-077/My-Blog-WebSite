import { Link } from "react-router-dom";
import ArticleList from "../ArticleList";
import AddCommentForm from "../AddCommentForm";
import "../HomePage.css";
import { useState, useEffect, useRef } from "react";
import articles from "../article-content";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaDownload, FaYoutube } from "react-icons/fa";
import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

export default function HomePage() {
    const [popularArticles, setPopularArticles] = useState([]);
    const [youtubeVideos] = useState([
        {
            title: "How to Build a Web App from Scratch",
            url: "https://www.youtube.com/live/z7H_tPIW19Q?si=WUgJsedZpQSm0QwJ",
        },
        {
            title: "Top 10 React Tips & Tricks",
            url: "https://www.youtube.com/live/fwq_ZGxn6lQ?si=uku6EgBnD-YJPf77",
        },
        {
            title: "Top 10 React Tips & Tricks",
            url: "https://www.youtube.com/live/CyOvGq13A-o?si=ZOqjo-jaVSUyI5sh",
        },
        {
            title: "Top 10 React Tips & Tricks",
            url: "https://www.youtube.com/live/z7H_tPIW19Q?si=tdkr7kPXencg3prt",
        },
        {
            title: "Top 10 React Tips & Tricks",
            url: "https://www.youtube.com/live/gxTIuc7vE0Q?si=3UWBX7ZcmfZWAPT_",
        },
        {
            title: "Top 10 React Tips & Tricks",
            url: "https://www.youtube.com/live/2NjUWpTL3mo?si=c48MvXBUMZJ3TBtX",
        },
    ]);

    const cursorRef = useRef(null);
    const cursorFollowerRef = useRef(null);
    const particlesRef = useRef(null);
    const scrollProgressRef = useRef(null);
    const scrollProgressBarRef = useRef(null);

    const [theme, setTheme] = useState('dark');
    const [isTyping, setIsTyping] = useState(true);
    const [textIndex, setTextIndex] = useState(0);
    const [stats, setStats] = useState({
        projects: 0,
        startups: 0,
        experience: 0,
        technologies: 0
    });
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const texts = [
        "Full-Stack Developer",
        "ML/AI Engineer",
        "Creative Designer",
        "Tech Innovator"
    ];

    const skills = [
        { name: "React", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "TensorFlow", level: 75 },
        { name: "Firebase", level: 85 },
        { name: "MongoDB", level: 80 }
    ];

    const timeline = [
        {
            year: "2023",
            title: "AI-Powered Task Prioritizer",
            description: "Built a smart task management system using ML algorithms"
        },
        {
            year: "2022",
            title: "Bill Scanner App",
            description: "Developed an OCR-based bill scanning application"
        },
        {
            year: "2021",
            title: "Service Aggregator Platform",
            description: "Created a mobile service marketplace for local businesses"
        }
    ];

    const projects = [
        {
            title: "Smart Task Prioritizer",
            description: "AI-powered task management system",
            tech: ["React", "TensorFlow", "Firebase"],
            image: "https://via.placeholder.com/400x300"
        },
        {
            title: "Bill Scanner Pro",
            description: "Automated bill scanning and management",
            tech: ["Python", "OpenCV", "React Native"],
            image: "https://via.placeholder.com/400x300"
        },
        {
            title: "ServiceHub Nepal",
            description: "Service marketplace platform",
            tech: ["Next.js", "Node.js", "MongoDB"],
            image: "https://via.placeholder.com/400x300"
        }
    ];

    useEffect(() => {
        setPopularArticles(articles.slice(0, 3));

        // Custom Cursor
        const handleMouseMove = (e) => {
            if (cursorRef.current && cursorFollowerRef.current) {
                cursorRef.current.style.left = e.clientX + 'px';
                cursorRef.current.style.top = e.clientY + 'px';

                setTimeout(() => {
                    cursorFollowerRef.current.style.left = e.clientX + 'px';
                    cursorFollowerRef.current.style.top = e.clientY + 'px';
                }, 50);
            }
        };

        // Particle Effect
        const createParticles = () => {
            if (particlesRef.current) {
                for (let i = 0; i < 50; i++) {
                    const particle = document.createElement('div');
                    particle.className = 'particle';
                    particle.style.left = Math.random() * 100 + '%';
                    particle.style.top = Math.random() * 100 + '%';
                    particle.style.animationDelay = Math.random() * 15 + 's';
                    particlesRef.current.appendChild(particle);
                }
            }
        };

        // Scroll Progress
        const handleScroll = () => {
            if (scrollProgressBarRef.current) {
                const windowHeight = window.innerHeight;
                const documentHeight = document.documentElement.scrollHeight - windowHeight;
                const scrollTop = window.scrollY;
                const progress = (scrollTop / documentHeight) * 100;
                scrollProgressBarRef.current.style.width = progress + '%';
            }
        };

        // Scroll Reveal
        const handleScrollReveal = () => {
            const elements = document.querySelectorAll('.scroll-reveal');
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                if (elementTop < window.innerHeight - elementVisible) {
                    element.classList.add('active');
                }
            });
        };

        // Typing effect
        const typingInterval = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % texts.length);
        }, 3000);

        // Stats counter animation
        const statsInterval = setInterval(() => {
            setStats(prev => ({
                projects: Math.min(prev.projects + 1, 20),
                startups: Math.min(prev.startups + 1, 4),
                experience: Math.min(prev.experience + 0.1, 2),
                technologies: Math.min(prev.technologies + 1, 10)
            }));
        }, 100);

        // Initialize
        createParticles();
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('scroll', handleScrollReveal);
        handleScrollReveal(); // Initial check

        // Initialize Splide carousel
        new Splide('.splide', {
            type: 'loop',
            perPage: 3,
            gap: '2rem',
            autoplay: true,
            interval: 3000,
            breakpoints: {
                768: {
                    perPage: 1
                }
            }
        }).mount();

        // Cleanup
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('scroll', handleScrollReveal);
            clearInterval(typingInterval);
            clearInterval(statsInterval);
        };
    }, []);

    const handleAddComment = ({ postedBy, text }) => {
        console.log("New comment received:", postedBy, text);
    };

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <>
            <div className="cursor" ref={cursorRef}></div>
            <div className="cursor-follower" ref={cursorFollowerRef}></div>
            <div className="particles" ref={particlesRef}></div>
            <div className="scroll-progress" ref={scrollProgressRef}>
                <div className="scroll-progress-bar" ref={scrollProgressBarRef}></div>
            </div>

            <div className={`home-container ${theme}`}>
                {/* Theme Toggle */}
                <button className="theme-toggle" onClick={toggleTheme}>
                    {theme === 'dark' ? '🌞' : '🌙'}
                </button>

                {/* Scroll Progress */}
                <motion.div className="scroll-progress" style={{ scaleX }} />

                <section className="hero-section">
                    <div className="hero-content">
                        <h1 className="hero-title">Welcome to My World 💫</h1>
                        <p className="hero-description">Explore exclusive content about tech, programming, and growth!</p>
                        <Link to="/articles" className="explore-button">Explore Articles</Link>
                    </div>
                </section>

                <section className="popular-articles-section scroll-reveal">
                    <h2 className="section-title">Popular Articles</h2>
                    <ArticleList articles={popularArticles} />
                </section>

                {/* YouTube Section */}
                <section className="youtube-videos-section scroll-reveal">
                    <h2 className="section-title">Featured YouTube Videos</h2>
                    <div className="youtube-videos-container">
                        {youtubeVideos.map((video, index) => (
                            <div key={index} className="video-card">
                                <iframe
                                    width="100%"
                                    height="315"
                                    src={`https://www.youtube.com/embed/${video.url.split('=')[1]}`}
                                    title={video.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                                <h3 className="video-title">{video.title}</h3>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="contact-section scroll-reveal">
                    <h2 className="section-title">Leave a Message</h2>
                    <AddCommentForm onAddComment={handleAddComment} />
                </section>
            </div>
        </>
    );
} 