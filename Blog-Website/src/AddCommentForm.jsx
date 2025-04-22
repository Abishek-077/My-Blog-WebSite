import { useState } from "react";

export default function AddCommentForm({ onAddComment }) {
    const [nameText, setNameText] = useState('');
    const [commentText, setCommentText] = useState('');

    const handleSubmit = () => {
        if (!nameText.trim() || !commentText.trim()) return; // optional validation
        onAddComment({ name: nameText, text: commentText });
        setNameText('');
        setCommentText('');
    };

    return (
        <div>
            <h3>Add a Comment</h3>
            <label>
                Name:
                <input
                    type="text"
                    value={nameText}
                    onChange={(e) => setNameText(e.target.value)}
                />
            </label>
            <br />
            <label>
                Comment:
                <input
                    type="text"
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                />
            </label>
            <br />
            <button onClick={handleSubmit}>Add Comment</button>
        </div>
    );
}
