/* eslint-disable no-undef */
const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  },
});
const path = require('path');

const {port} = require('./config/app');

// Middleware
app.use(express.json());

// Server static files
app.use(express.static(`${__dirname}/../public`));

// https://www.devmedia.com.br/subindo-uma-aplicacao-angular-para-o-heroku/40260
app.get('/*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../public/index.html`));
});

const history = [];

io.on('connection', (socket) => {
  socket.on('new-message', (msg) => {
    history.push(msg);
    io.emit('new-message', msg);
  });

  socket.on('history', () => {
    socket.emit('history', history);
  });
});

server.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});

module.exports = app;
