var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(1337);

io.on('connection', function (socket) {
    var roomId;

  socket.on('room:create', function () {
    roomId = createRoomId();            // set the room id
    socket.join(roomId);                // join the room
    socket.send({'roomId': roomId});    // send room id to client
    console.log('sending roomId', roomId);
  });

  socket.on('room:join', function (data) {
    roomId = data.roomId;             // set the room id
    socket.join(roomId);              // join the room
    socket.username = data.username;  // set username
    socket.in(roomId).emit('roommaster:userJoined', data);     // send the username to room master
  });
});

function createRoomId() {
  var id = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for( var i=0; i < 5; i++ )
        id += possible.charAt(Math.floor(Math.random() * possible.length));

    return id;
}