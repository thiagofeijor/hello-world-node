const channel = process.env.CHANNEL
const io = require('socket.io-client');

const socket = io(
  `${process.env.URL}:${process.env.PORT}`,
  {
    rejectUnauthorized: false
  }
)

socket.on('connect', function() {
  console.log('connect')

  socket.emit('psubscribe', channel)
});

socket.on('message', function(data) {
  console.log('message', data)
});

socket.on('disconnect', function() {
  console.log('disconnect')
});

socket.on('error', function(err) {
  console.log(err)
})

socket.connect()
