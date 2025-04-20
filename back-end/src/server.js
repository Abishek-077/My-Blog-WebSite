import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb';

const articlesInfo = [
    { name: 'learn-node', upvotes: 0, comments: [] },
    { name: 'learn-react', upvotes: 0, comments: [] },
    { name: 'mongodb', upvotes: 0, comments: [] },
];

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

app.get('/api/articles/:name', async (req, res) => {
    const { name } = req.params;

    const uri = 'mongodb://127.0.0.1:27017'; // ✅ colon (:) instead of dot (.)

    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    await client.connect();

    const db = client.db('my-blog-website-db');

    const article = await db.collection('articles').findOne({ name });

    res.json(article);
});

// Upvote route
app.post('/api/articles/:name/upvote', (req, res) => {
    const article = articlesInfo.find(a => a.name === req.params.name);
    article.upvotes += 1;
    res.json(article);
});

// Comment route
app.post('/api/articles/:name/comments', (req, res) => {
    const { name } = req.params;
    const { postedBy, text } = req.body;

    const article = articlesInfo.find(a => a.name === name);
    article.comments.push({ postedBy, text });

    res.json(article);
});

// Start the server
app.listen(8000, function () {
    console.log('Server is Listening on port 8000');
});
