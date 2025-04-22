import { Link } from "react-router-dom";
import "./ArticleList.css"; // Import the CSS file

export default function ArticleList({ articles }) {
    return (
        <div className="article-list">
            {articles.map((a) => (
                <div key={a.name} className="article-card">
                    <Link to={`/articles/${a.name}`} className="article-link">
                        <h3 className="article-title">{a.title}</h3>
                        <p className="article-excerpt">
                            {a.content[0].substring(0, 150)}...
                        </p>
                        <span className="read-more">Read more →</span>
                    </Link>
                </div>
            ))}
        </div>
    );
}
