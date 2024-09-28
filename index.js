const express = require('express');
const path = require('path');
require('dotenv').config();

// App de Express
const app = express();
const port = process.env.PORT;

// Node server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);

require('./sockets/socket');


// Public path
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

server.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`Listening on port ${port}`);
})