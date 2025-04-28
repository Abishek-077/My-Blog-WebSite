import React from 'react';
import '../AboutPage.css';
import img from "../assets/photo.png";  // Use "../" if you're in a sub-folder

export default function AboutPage() {
    return (
        <section className="about-wrapper">
            <div className="about-card">
                <img
                    src={img}
                    alt="Profile"
                    className="about-image"
                />
                <h1 className="about-title">Hey, I'm <span>Abishek Ghimire</span> 👋</h1>
                <p className="about-tagline">Full-Stack Developer • ML/AI Enthusiast • Content Creator</p>

                <p className="about-description">
                    I'm a passionate <strong>Full-Stack Web Developer</strong> focused on crafting clean, modern, and efficient applications that not only work flawlessly — but also look stunning. I also dive deep into the world of <strong>Machine Learning and AI</strong>, constantly exploring new ways to apply these technologies to solve complex problems.
                </p>

                <div className="about-section">
                    <h2>🚀 What I Love</h2>
                    <ul>
                        <li>Building stunning websites & apps (React, Next.js)</li>
                        <li>Designing intuitive UI/UX experiences</li>
                        <li>Solving real-world problems with technology</li>
                        <li>Exploring AI and Machine Learning to create smarter applications</li>
                        <li>Learning, growing, and pushing boundaries 🚀</li>
                    </ul>
                </div>

                <div className="about-section">
                    <h2>🎯 My Mission</h2>
                    <p>
                        "To create powerful digital experiences that inspire, connect, and make an impact, while utilizing the potential of AI and ML to innovate and transform the tech landscape."
                    </p>
                </div>

                <div className="about-section">
                    <h2>🎥 Check Out My YouTube Channel</h2>
                    <p>
                        I share tutorials and insights about <strong>AI, Machine Learning, and Web Development</strong> on my YouTube channel. Join me as I break down complex topics and explore the latest in tech.
                    </p>
                    <a href="https://www.youtube.com/c/AbishekGhimire" target="_blank" rel="noopener noreferrer">🎬 My YouTube Channel</a>
                </div>

                <div className="about-connect">
                    <h2>🌍 Let's Connect!</h2>
                    <a href="mailto:your@email.com">📧 Email Me</a>
                    <a href="https://github.com/Abishek-077" target="_blank" rel="noopener noreferrer">🐙 GitHub</a>
                    <a href="https://www.linkedin.com/in/abishek-ghimire-ab88072a7/" target="_blank" rel="noopener noreferrer">🔗 LinkedIn</a>
                    <a href="https://www.youtube.com/@Abishek_0777" target="_blank" rel="noopener noreferrer"> 🎥Youtube</a>
                </div>
            </div>
        </section>
    );
}
