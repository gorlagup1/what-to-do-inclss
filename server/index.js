const express = require('express');
const app = express();
const port = 3000;

app
.get('/', (req, res) => res.send('this class is awsome!'));

app.listen(port, () => console.log(`Listening at http://localhost:${port}!`));




