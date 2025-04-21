import { useParams, useLoaderData } from "react-router-dom";
import articles from "../article-content";
import CommentsList from "../commentsList";
import { useState } from "react";
import axios from 'axios';

export default function ArticlePage() {
    const { name } = useParams();
    const { upvotes: initialUpvotes, comments } = useLoaderData();
    const [upvotes, setUpvotes] = useState(initialUpvotes); // ✅ FIXED: useState destructuring

    const article = articles.find((a) => a.name === name);

    async function onUpvoteClicked() {
        const response = await axios.post('/api/articles' + name + '/upvote');
        const updatedArticleData = response.data;
        setUpvotes(updatedArticleData.upvotes);
    }

    return (
        <>
            <h1>{article.title}</h1>
            <button onClick={onUpvoteClicked}>Upvote</button>
            <p>This article has{upvotes} upvotes!</p>
            {article.content.map(p => <p key={p}>{p}</p>)}
            <CommentsList comments={comments} />
        </>
    );
}

export async function loader({ params }) {
    const response = await axios.get('/api/articles/' + params.name); // assume same port
    const { upvotes, comments } = response.data;
    return { upvotes, comments };
}
