import { useParams, useLoaderData } from "react-router-dom";
import articles from "../article-content";
import CommentsList from "../commentsList";
import axios from 'axios';

export default function ArticlePage() {
    const { name } = useParams();
    const { upvotes, comments } = useLoaderData();



    const article = articles.find((a) => a.name === name);

    return (
        <>
            <h1>{article.title}</h1>
            <p>This article has{upvotes} upvotes!</p>
            {article.content.map(p => <p key={p}>{p}</p>)}
            <CommentsList comments={comments} />
        </>


    );

}

export async function loader({ params }) {
    const response = await axios.get('/api/articles/' + params.name);// make it think they are running on same port 
    const { upvotes, comments } = response.data;
    return { upvotes, comments };
}

