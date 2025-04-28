import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb';
import admin from 'firebase-admin';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Parse credentials.json
const credentials = JSON.parse(fs.readFileSync('./credentials.json'));

// Initialize Firebase Admin
admin.initializeApp({
    credential: admin.credential.cert(credentials),
});

const app = express();
app.use(express.json());

let db;

// Connect to MongoDB
async function connectToDB() {
    const uri = 'mongodb://127.0.0.1:27017';

    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        },
    });

    try {
        await client.connect();
        db = client.db('my-blog-website-db');
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);  // Stop the server if MongoDB connection fails
    }
}

app.use(express.static(path.join(__dirname, '../dist')));

app.get(/^(?!\/api).+/, (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Public route: Get article by name
app.get('/api/articles/:name', async (req, res) => {
    const { name } = req.params;
    try {
        const article = await db.collection('articles').findOne({ name });
        if (!article) {
            return res.status(404).json({ message: 'Article not found' });
        }
        res.json(article);
    } catch (error) {
        console.error('Error fetching article:', error);
        res.status(500).json({ message: 'Error fetching article' });
    }
});

// Auth middleware
app.use(async (req, res, next) => {
    const authtoken = req.headers.authtoken;

    if (authtoken) {
        try {
            const user = await admin.auth().verifyIdToken(authtoken);
            req.user = user;
            next(); // Only call next() if token is verified
        } catch (error) {
            console.error('Auth token error:', error);
            res.status(401).json({ message: 'Invalid auth token' });
        }
    } else {
        res.status(400).json({ message: 'Auth token is required' });
    }
});

// Upvote route
app.post('/api/articles/:name/upvote', async (req, res) => {
    const { name } = req.params;
    const { uid } = req.user;

    try {
        const article = await db.collection('articles').findOne({ name });
        if (!article) {
            return res.status(404).json({ message: 'Article not found' });
        }

        const upvoteIds = article.upvoteIds || [];
        const canUpvote = uid && !upvoteIds.includes(uid);

        if (canUpvote) {
            const updatedArticle = await db.collection('articles').findOneAndUpdate(
                { name },
                {
                    $inc: { upvotes: 1 },
                    $push: { upvoteIds: uid },
                },
                { returnDocument: 'after' }
            );
            res.json(updatedArticle.value);
        } else {
            res.sendStatus(403);
        }
    } catch (error) {
        console.error('Error handling upvote:', error);
        res.status(500).json({ message: 'Error processing upvote' });
    }
});

// Comment route
app.post('/api/articles/:name/comments', async (req, res) => {
    const { name } = req.params;
    const { postedBy, text } = req.body;
    const newComment = { postedBy, text };

    try {
        const updatedArticle = await db.collection('articles').findOneAndUpdate(
            { name },
            { $push: { comments: newComment } },
            { returnDocument: 'after' }
        );
        res.json(updatedArticle.value);
    } catch (error) {
        console.error('Error adding comment:', error);
        res.status(500).json({ message: 'Error adding comment' });
    }
});
const PORT = process.env.PORT || 8000;
// Start server
async function start() {
    await connectToDB();
    app.listen(8000, () => {
        console.log('Server is Listening on port' + PORT);
    });
}

start();
