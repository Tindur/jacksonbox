var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(1337);

app.get('/', function (req, res) {
  res.send({'hello': 'worlds!'});
});

io.on('connection', function (socket) {
  var roomId;

  /**
   * Creates a new room id and sends it to the client
   */
  socket.on('room:create', function () {
    roomId = createRoomId();
    socket.join(roomId);
    socket.send({'roomId': roomId});
    console.log('sending roomId', roomId);
  });

  /**
   * Joins a socket to a room and sends user to roommaster
   */
  socket.on('room:join', function (data) {
    roomId = data.roomId;
    socket.join(roomId);
    socket.username = data.username;
    socket.to(roomId).emit('roommaster:userJoined', data);     // send the username to room master
  });

  socket.on('game:start', function () {
    socket.to(roomId).emit('game:started');
  });
});

function createRoomId() {
  var id = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for( var i=0; i < 5; i++ )
        id += possible.charAt(Math.floor(Math.random() * possible.length));

    return id;
}