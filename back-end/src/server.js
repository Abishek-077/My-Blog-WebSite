import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb';
import admin from 'firebase-admin';
import fs from 'fs';

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

    await client.connect();
    db = client.db('my-blog-website-db');
}

// Public route: Get article by name
app.get('/api/articles/:name', async (req, res) => {
    const { name } = req.params;
    const article = await db.collection('articles').findOne({ name });
    res.json(article);
});

// Auth middleware
app.use(async function (req, res, next) {
    const authtoken = req.headers.authtoken;

    if (authtoken) {
        try {
            const user = await admin.auth().verifyIdToken(authtoken);
            req.user = user;
            next(); // Only call next() if token is verified
        } catch (error) {
            res.status(401).json({ message: 'Invalid auth token' });
        }
    } else {
        res.sendStatus(400);
    }
});

// Upvote route
app.post('/api/articles/:name/upvote', async (req, res) => {
    const { name } = req.params;
    const { uid } = req.user;

    const article = await db.collection('articles').findOne({ name });
    const upvoteIds = article.upvoteIds || [];

    const canUpvote = uid && !upvoteIds.includes(uid); // <-- Fixed typo: `include` ➝ `includes`

    if (canUpvote) {
        const updatedArticle = await db.collection('articles').findOneAndUpdate(
            { name },
            {
                $inc: { upvotes: 1 },
                $push: { upvoteIds: uid },
            },
            { returnDocument: 'after' }
        );
        res.json(updatedArticle.value); // <-- MongoDB returns object with `value`
    } else {
        res.sendStatus(403);
    }
});

// Comment route
app.post('/api/articles/:name/comments', async (req, res) => {
    const { name } = req.params;
    const { postedBy, text } = req.body;
    const newComment = { postedBy, text };

    const updatedArticle = await db.collection('articles').findOneAndUpdate(
        { name },
        { $push: { comments: newComment } },
        { returnDocument: 'after' }
    );

    res.json(updatedArticle.value); // <-- Use `value` to access updated document
});

// Start server
async function start() {
    await connectToDB();
    app.listen(8000, () => {
        console.log('Server is Listening on port 8000.......');
    });
}

start();
