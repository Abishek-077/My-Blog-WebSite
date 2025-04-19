import articles from "../../Article-Content";
import ArticlesList from "../ArticlesList";

export default function ArticleListPage() {
    return (
        <>
            <h1>Articles</h1>
            <ArticlesList articles={articles} />

        </>
    );
}