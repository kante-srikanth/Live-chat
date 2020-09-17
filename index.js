const express = require("express");
const socket = require("socket.io");

var app = express();

var server = app.listen("4000", function () {
  console.log("listening on port : 4000");
});
app.use(express.static("public"));

var io = socket(server);

io.on("connect", function (socket) {
  socket.on("chat", function (data) {
    console.log(data);
    console.log(socket.id);
    io.emit("chat", data);
  });
});
