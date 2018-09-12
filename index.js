// const express = require('express')
// const app = express()

// app.use(express.static('public'))
// app.listen(3000, () => console.log('Server running on port 3000'))

var app = require('express')();
//var http = require('http').Server(app);
var io = require('socket.io')(app);

app.use(express.static('public'))
app.listen(3000, () => console.log('Server running on port 3000'))

io.on('connection', function (socket) {
  console.log('a user connected');
});


