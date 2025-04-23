import { useParams, useLoaderData } from "react-router-dom";
import articles from "../article-content";
import CommentsList from "../CommentsList";
import { useState } from "react";
import axios from 'axios';
import AddCommentForm from "../AddCommentForm";
import useUser from "../useUser";

export default function ArticlePage() {
    const { name } = useParams();
    const { upvotes: initialUpvotes, comments: initialComments } = useLoaderData();
    const [upvotes, setUpvotes] = useState(initialUpvotes);
    const [comments, setComments] = useState(initialComments);

    const { isLoading, user } = useUser();

    const article = articles.find(a => a.name === name);


    async function onUpvoteClicked() {
        const token = user && await user.getIdToken();
        const headers = token ? { authtoken: token } : {};
        const response = await axios.post('/api/articles/' + name + '/upvote', null, { headers });
        const updatedArticleData = response.data;
        setUpvotes(updatedArticleData.upvotes);
    }

    async function onAddComment({ nameText, commentText }) {
        const token = user && await user.getIdToken();
        const headers = token ? { authtoken: token } : {};
        const response = await axios.post('/api/articles/' + name + '/comments', {
            postedBy: nameText,
            text: commentText,
        }, { headers });
        const updatedArticleData = response.data;
        setComments(updatedArticleData.comments);
    }

    return (
        <>
            <h1>{article.title}</h1>
            {user && <button onClick={onUpvoteClicked}>Upvote</button>}
            <p>This article has {upvotes} upvotes</p>
            {article.content.map(p =>
                <p key={p}>{p}</p>
            )}
            {user ?
                <AddCommentForm onAddComment={onAddComment} />
                : <p>LogIn to add a comment</p>}
            <CommentsList comments={comments} />
        </>
    );
}

export async function loader({ params }) {
    const response = await axios.get('/api/articles/' + params.name);
    const { upvotes, comments } = response.data;
    return { upvotes, comments };
}

