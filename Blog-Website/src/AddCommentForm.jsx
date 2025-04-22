import { useState } from "react";
import './AddCommentForm.css';

export default function AddCommentForm({ onAddComment }) {
    const [nameText, setNameText] = useState('');
    const [commentText, setCommentText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nameText.trim() || !commentText.trim()) return;
        onAddComment({ postedBy: nameText, text: commentText });
        setNameText('');
        setCommentText('');
    };

    return (
        <form onSubmit={handleSubmit} className="comment-form">
            <h3 className="form-title">Leave a comment</h3>

            <div className="form-group">
                <label className="form-label" htmlFor="name">
                    Name
                </label>
                <input
                    id="name"
                    type="text"
                    value={nameText}
                    onChange={(e) => setNameText(e.target.value)}
                    className="form-input"
                    placeholder="Enter your name"
                />
            </div>

            <div className="form-group">
                <label className="form-label" htmlFor="comment">
                    Comment
                </label>
                <textarea
                    id="comment"
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    className="form-textarea"
                    placeholder="Enter your comment"
                    rows="4"
                />
            </div>

            <div className="form-footer">
                <button
                    type="submit"
                    className="submit-button"
                    disabled={!nameText.trim() || !commentText.trim()}
                >
                    Post Comment
                </button>
            </div>
        </form>
    );
}