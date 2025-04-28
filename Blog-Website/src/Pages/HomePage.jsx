import { Link } from "react-router-dom";
import ArticleList from "../ArticleList"; // Reusing your ArticleList component
import AddCommentForm from "../AddCommentForm"; // Import your comment form
import "../HomePage.css";
import { useState, useEffect } from "react";
import articles from "../article-content";

export default function HomePage() {
    const [popularArticles, setPopularArticles] = useState([]);
    const [youtubeVideos, setYoutubeVideos] = useState([
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


        // Add more videos as needed
    ]);

    useEffect(() => {
        setPopularArticles(articles.slice(0, 3)); // First 3 articles as popular
    }, []);

    const handleAddComment = ({ postedBy, text }) => {
        console.log("New comment received:", postedBy, text);
        // Handle saving or processing the comment (e.g., send it to a server)
    };

    return (
        <div className="home-container">
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">Welcome to My World 💫</h1>
                    <p className="hero-description">Explore exclusive content about tech, programming, and growth!</p>
                    <Link to="/articles" className="explore-button">Explore Articles</Link>
                </div>
            </section>

            <section className="popular-articles-section">
                <h2 className="section-title">Popular Articles</h2>
                <ArticleList articles={popularArticles} />
            </section>

            <section className="youtube-videos-section">
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

            <section className="contact-section">
                <h2 className="section-title">Leave a Message</h2>
                <AddCommentForm onAddComment={handleAddComment} />
            </section>
        </div>
    );
}
