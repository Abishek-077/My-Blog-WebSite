import express from 'express';

const app = express();

app.use(express.json());

app.get('/hello', function (req, res) {
    res.send('hello send the res and this the response that you get ');
});

app.post('/hello', function (req, res) {
    res.send('hello,' + req.body.name + ' from the post endpoint');
});
app.listen(8000, function () {
    console.log('Server is Listening on port 8000');

});
