import articles from "../article-content";
import ArticleList from "../ArticleList";
import VideosList from "../VedioList";

export default function HomePage() {
    const mostPopularArticle = articles[0];

    // Sample YouTube video data
    const youtubeVideos = [
        {
            videoId: '1',
            title: "Study With ABi",
            url: "https://www.youtube.com/live/fwq_ZGxn6lQ?si=6tuRL_m713QaGLok"
        },
        {
            videoId: '2',
            title: " Study With Me LIVE 🔥",
            url: "https://www.youtube.com/live/yLTMsJaoZo8?si=1Q455pUtKbFtFwHX"
        }
    ];

    return (
        <>
            <h3>My Popular Article</h3>
            <ArticleList articles={[mostPopularArticle]} />

            <VideosList
                videos={youtubeVideos}
                emptyHeading="No videos available yet"
            />
        </>
    );
}