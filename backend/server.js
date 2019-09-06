const express = require('express');
const server = express();
const path = require('path');

const PORT = 3030;

server.use(express.static('public'));

/*
server.get('/', (req, res) => res.sendFile(
    path.join(`${__dirname}/../index.html`)
));
*/

server.listen(PORT, () => console.log(`Server listen on localhost:${PORT}`));