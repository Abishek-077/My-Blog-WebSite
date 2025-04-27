import './Video.css';

export default function Video({ video }) {
    if (!video) return null;

    const getYouTubeId = (url) => {
        try {
            const urlObj = new URL(url);
            return urlObj.searchParams.get("v") || url.split("/").pop();
        } catch (err) {
            console.error("Invalid YouTube URL:", url);
            return null;
        }
    };

    const videoId = getYouTubeId(video.url);
    if (!videoId) return <p>Invalid or missing video URL</p>;

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
