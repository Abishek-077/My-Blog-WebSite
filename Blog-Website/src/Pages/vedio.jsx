import '../Video.css'; // fixed typo

export default function Video({ video }) {
    if (!video) return null;

    const getYouTubeId = (url) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    const videoId = getYouTubeId(video.url);
    if (!videoId) return null;

    return (
        <div className="video-card">
            <h3 className="video-title">{video.title}</h3>
            <div className="video-thumbnail">
                <iframe
                    width="100%"
                    height="315"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={video.title || "YouTube video"}
                    style={{ border: 'none' }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            {video.description && (
                <p className="video-description">{video.description}</p>
            )}
        </div>
    );
}
