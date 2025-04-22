import './CommentsList.css';

export default function CommentsList({ comments }) {
    return (
        <div className="comments-container">
            <h3 className="comments-title">Comments</h3>
            {comments.length === 0 ? (
                <p className="no-comments-message">No comments yet. Be the first to comment!</p>
            ) : (
                <div className="comments-list">
                    {comments.map((comment, index) => (
                        <div key={`${comment.postedBy}-${index}`} className="comment-card">
                            <h4 className="comment-author">{comment.postedBy}</h4>
                            <p className="comment-text">{comment.text}</p>
                            <div className="comment-meta">
                                <span className="comment-time">Just now</span>
                                {/* You can add actual timestamp if available in your data */}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}