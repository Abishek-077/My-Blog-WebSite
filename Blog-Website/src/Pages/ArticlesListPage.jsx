import articles from "../article-content";
import ArticleList from "../ArticleList";
// import "../ArticlesListPage.css"; // ← FIXED

export default function ArticlesListPage() {
    return (
        <div className="articles-page">
            <h1 className="articles-title">Latest Articles</h1>
            <ArticleList articles={articles} />
        </div>
    );
}
