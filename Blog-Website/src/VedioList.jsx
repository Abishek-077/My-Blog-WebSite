// VideoList.js
import Video from "./Pages/vedio"; // Import the Video component
import './VedioList.css';

export default function VideosList({ videos, emptyHeading }) {
    const count = videos.length;
    let heading = emptyHeading;

    if (count > 0) {
        const noun = count > 1 ? 'Videos' : 'Video';
        heading = count + ' ' + noun;
    }

    return (
        <section className="video-list-container">
            <h2 className="video-list-heading">{heading}</h2>
            <div className="video-grid">
                {videos.map(video => (
                    <Video key={video.id} video={video} />
                ))}
            </div>
        </section>
    );
}