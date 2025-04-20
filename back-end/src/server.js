import express from 'express';

const articlesInfo = [
    { name: 'learn-node', upvotes: 0 },
    { name: 'learn-react', upvotes: 0 },
    { name: 'mongodb', upvotes: 0 },
]
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

app.post('/api/articles/:name/upvote', (req, res) => {
    const article = articlesInfo.find(a => a.name === req.params.name);
    article.upvotes += 1;

    res.send('Success!' + req.params.name + 'now has' + article.upvotes + 'upvotes');
});

// Start the server
app.listen(8000, function () {
    console.log('Server is Listening on port 8000');
});
