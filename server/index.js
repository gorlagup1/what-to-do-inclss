const express = require('express');
const quoteCards = require('./game/quoteCards');
const app = express();
const port = 3000;

app
    .get('/', (req, res) => res.send('this class is awsome!') )
    .get('/game/quoteCards', (req, res) => res.send(quoteCards) );


app.listern(port, () => console.log(`Listening at http://localhost:${port}!`));




