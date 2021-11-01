const express = require('express');
const app = express();
const morgan = require('morgan');
const data = require('./data');
const mainPost = require('./mainPost');
const postDetails = require('./postDetails');
const error = require('./error')

// Middleware functions
app.use(morgan('dev'));
app.use(express.static('public'));

// Express Pipeline - Main Post Request
app.get('/', (req, res) => {
    res.send(mainPost());
})

// Express Pipeline - Post Details Request
app.get('/posts/:id', (req, res) => {
    const player = data.find(req.params.id);
    if (!player.id) res.status(404).send(error())
    else res.send(postDetails(player))
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
}) 

