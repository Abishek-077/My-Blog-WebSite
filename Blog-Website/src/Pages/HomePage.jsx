import articles from "../article-content";
import ArticleList from "../ArticleList"; // use this instead of ArticlesListPage

export default function HomePage() {
    const mostPopularArticle = articles[0];

    return (
        <>
            <h3>My Popular Article</h3>
            <ArticleList articles={[mostPopularArticle]} />
        </>
    );
}
