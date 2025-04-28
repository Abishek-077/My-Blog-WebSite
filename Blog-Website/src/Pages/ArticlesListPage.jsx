import articles from "../article-content";
import ArticleList from "../ArticleList";
import "../ArticlesListPage.css"; // Enable this

export default function ArticlesListPage() {
    return (
        <div className="articles-page-wrapper">
            <h1 className="articles-main-title">🔥 Latest Articles</h1>
            <ArticleList articles={articles} />
        </div>
    );
}
