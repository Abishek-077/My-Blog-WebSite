// VideoList.js

import './VideoList.css';
import Video from './Video';


export default function VideosList({ videos, emptyHeading }) {
    const count = videos.length;
    let heading = emptyHeading;

    if (count > 0) {
        const noun = count > 1 ? ':Day 180: AI/ML Journey' : 'Video';
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