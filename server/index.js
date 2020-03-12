const express = require('express');
const gameController  * require('./controllers/game');

const app = express();
const port = 3000;

app
    .get('/', (req, res) => res.send('this class is awsome!') )
     .use('/game', gameController)
    


app.listern(port, () => console.log(`Listening at http://localhost:${port}!`));




