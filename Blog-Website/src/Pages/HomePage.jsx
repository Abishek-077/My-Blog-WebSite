// import articles from "../article-content";
// import ArticleList from "../ArticleList";
// import VideosList from "../VideoList";

// export default function HomePage() {
//     const mostPopularArticle = articles[0];

//     // Sample YouTube video data
//     const youtubeVideos = [
//         {
//             videoId: '1',
//             title: "Study With ABi",
//             url: "https://www.youtube.com/live/fwq_ZGxn6lQ?si=6tuRL_m713QaGLok"
//         },
//         {
//             videoId: '2',
//             title: " Study With Me LIVE 🔥",
//             url: "https://www.youtube.com/live/yLTMsJaoZo8?si=1Q455pUtKbFtFwHX"
//         },
//         {
//             videoId: '2',
//             title: " Study With Me LIVE 🔥",
//             url: "https://www.youtube.com/live/yLTMsJaoZo8?si=1Q455pUtKbFtFwHX"
//         },
//         {
//             videoId: '2',
//             title: " Study With Me LIVE 🔥",
//             url: "https://www.youtube.com/live/yLTMsJaoZo8?si=1Q455pUtKbFtFwHX"
//         },
//         {
//             videoId: '2',
//             title: " Study With Me LIVE 🔥",
//             url: "https://www.youtube.com/live/yLTMsJaoZo8?si=1Q455pUtKbFtFwHX"
//         },
//         {
//             videoId: '2',
//             title: " Study With Me LIVE 🔥",
//             url: "https://www.youtube.com/live/yLTMsJaoZo8?si=1Q455pUtKbFtFwHX"
//         },
//         {
//             videoId: '2',
//             title: " Study With Me LIVE 🔥",
//             url: "https://www.youtube.com/live/yLTMsJaoZo8?si=1Q455pUtKbFtFwHX"
//         },
//         {
//             videoId: '2',
//             title: " Study With Me LIVE 🔥",
//             url: "https://www.youtube.com/live/yLTMsJaoZo8?si=1Q455pUtKbFtFwHX"
//         },
//         {
//             videoId: '2',
//             title: " Study With Me LIVE 🔥",
//             url: "https://www.youtube.com/live/yLTMsJaoZo8?si=1Q455pUtKbFtFwHX"
//         }
//     ];

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100">
//             {/* Hero Section */}
//             <section className="text-center py-16 px-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
//                 <h1 className="text-5xl font-bold mb-4">Welcome to Study Hub 📚</h1>
//                 <p className="text-lg max-w-2xl mx-auto">
//                     Your one-stop destination for study tips, productivity hacks, and inspiring live study sessions!
//                 </p>
//             </section>

//             {/* Features Section */}
//             <section className="py-16 px-6">
//                 <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
//                     <div className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition">
//                         <h3 className="text-2xl font-bold text-blue-600 mb-4">Expert Articles</h3>
//                         <p className="text-gray-600">
//                             Dive deep into our high-quality articles curated by top learners and experts.
//                         </p>
//                     </div>
//                     <div className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition">
//                         <h3 className="text-2xl font-bold text-blue-600 mb-4">Live Study Sessions</h3>
//                         <p className="text-gray-600">
//                             Boost your focus with our live "Study With Me" YouTube sessions.
//                         </p>
//                     </div>
//                     <div className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition">
//                         <h3 className="text-2xl font-bold text-blue-600 mb-4">Community Support</h3>
//                         <p className="text-gray-600">
//                             Join a thriving community of students pushing each other to greatness!
//                         </p>
//                     </div>
//                 </div>
//             </section>

//             {/* Popular Articles */}
//             <section className="py-16 px-6 bg-gray-100">
//                 <div className="max-w-5xl mx-auto">
//                     <h2 className="text-4xl font-bold text-center text-blue-700 mb-10">
//                         Most Popular Article
//                     </h2>
//                     <ArticleList articles={[mostPopularArticle]} />
//                 </div>
//             </section>

//             {/* YouTube Videos */}
//             <section className="py-16 px-6">
//                 <div className="max-w-5xl mx-auto">
//                     <h2 className="text-4xl font-bold text-center text-blue-700 mb-10">
//                         Featured Study Videos
//                     </h2>
//                     <VideosList
//                         videos={youtubeVideos}
//                         emptyHeading="No videos available yet"
//                     />
//                 </div>
//             </section>

//             {/* Call To Action */}
//             <section className="text-center py-16 px-6 bg-blue-600 text-white">
//                 <h2 className="text-4xl font-bold mb-4">Ready to Level Up Your Productivity?</h2>
//                 <p className="text-lg mb-8">
//                     Explore our resources and join thousands of students on their journey to success!
//                 </p>
//                 <a
//                     href="/articles"
//                     className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-full hover:bg-blue-100 transition"
//                 >
//                     Browse Articles
//                 </a>
//             </section>

//             {/* Footer */}
//             <footer className="text-center py-6 text-gray-500 bg-gray-200 mt-10">
//                 © {new Date().getFullYear()} Study Hub. All rights reserved.
//             </footer>
//         </div>
//     );
// }

// src/components/HomePage.jsx
import { FaLinkedin, FaGithub } from "react-icons/fa";

const HomePage = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-700 via-pink-500 to-gray-900 text-white px-4 text-center">

            <img
                src="abishek.png" // replace with your image path
                alt="Profile"
                className="w-24 h-24 rounded-full mb-6 border-4 border-white"
            />

            <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Hello, I’m <span className="underline decoration-pink-400">Trishan Wagle</span>.
            </h1>

            <p className="text-lg md:text-2xl max-w-2xl mb-6">
                I’m a <strong>software developer</strong> with <strong>2 years</strong> of experience.
                I enjoy building <em>softwares</em>. My focus is React (Next.js), Express.js, Nest.js, Golang.
            </p>

            <div className="flex space-x-4 mb-6">
                <a
                    href="#contact"
                    className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2"
                >
                    Contact me here →
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={30} />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={30} />
                </a>
            </div>

            <div className="border-l-2 border-white h-20 mt-6 animate-pulse"></div>
        </div>
    );
};

export default HomePage;
