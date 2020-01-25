const io = require("socket.io")
const server = io.listen(process.env.PORT);

server.on("connection", (socket) => {
  console.info(`Client connected [id=${socket.id}]`);

  socket.on("psubscribe", (data) => {
    console.info(`Client subscribe [data=${data}]`);
  });

  socket.on("disconnect", () => {
    console.info(`Client gone [id=${socket.id}]`);
  });
});
