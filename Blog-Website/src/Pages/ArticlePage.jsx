import { useParams, useLoaderData } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import '../ArticlePage.css';

import articles from "../article-content";
import CommentsList from "../CommentsList";
import AddCommentForm from "../AddCommentForm";
import useUser from "../useUser";

export default function ArticlePage() {
    const { name } = useParams();
    const { upvotes: initialUpvotes = 0, comments: initialComments = [] } = useLoaderData();
    const [upvotes, setUpvotes] = useState(initialUpvotes);
    const [comments, setComments] = useState(initialComments);

    const { isLoading, user } = useUser();
    const article = articles.find((a) => a.name === name);

    if (!article) return <h2 className="login-message">404 - Article Not Found 😢</h2>;

    const handleUpvote = async () => {
        if (!user) return;
        try {
            const token = await user.getIdToken();
            const { data } = await axios.post(`/api/articles/${name}/upvote`, null, {
                headers: { authtoken: token },
            });
            setUpvotes(data.upvotes);
        } catch (err) {
            console.error("Upvote failed:", err);
        }
    };

    const handleAddComment = async ({ nameText, commentText }) => {
        try {
            const token = await user?.getIdToken();
            const { data } = await axios.post(`/api/articles/${name}/comments`, {
                postedBy: nameText,
                text: commentText,
            }, {
                headers: token ? { authtoken: token } : {},
            });
            setComments(data.comments);
        } catch (err) {
            console.error("Add Comment failed:", err);
        }
    };

    return (
        <section className="article-container">
            <h1 className="article-title">{article.title}</h1>

            {isLoading ? (
                <p className="login-message">Loading user info...</p>
            ) : (
                <>
                    <div className="upvote-section">
                        {user ? (
                            <button onClick={handleUpvote} className="upvote-button">
                                Upvote 🚀
                            </button>
                        ) : (
                            <p className="login-message"><i>Log in to upvote</i></p>
                        )}
                        <p><strong>{upvotes}</strong> upvote{upvotes !== 1 ? "s" : ""}</p>
                    </div>

                    <div className="article-content">
                        {article.content.map((paragraph, idx) => (
                            <p key={idx}>{paragraph}</p>
                        ))}
                    </div>

                    <hr />

                    <div className="comment-section">
                        {user ? (
                            <AddCommentForm onAddComment={handleAddComment} />
                        ) : (
                            <p className="login-message"><i>Log in to add a comment 📝</i></p>
                        )}

                        <CommentsList comments={comments} />
                    </div>
                </>
            )}
        </section>
    );
}

// Loader
export async function loader({ params }) {
    try {
        const { data } = await axios.get(`/api/articles/${params.name}`);
        return { upvotes: data.upvotes, comments: data.comments };
    } catch (err) {
        console.error("Loader failed:", err);
        return { upvotes: 0, comments: [] };
    }
}
