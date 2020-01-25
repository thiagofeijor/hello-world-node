require('net')

.createServer(function (socket) {
  console.log("connected");

  socket.on('data', function (data) {
    console.log('data', data.toString());
  });
})

.listen(process.env.PORT);