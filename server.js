const path = require('path');
const http = require('http');
const express = require('express');
const socketio  = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.get("/", (req, res, next)=>{
  res.sendFile(path.join(__dirname, "index.html"));
});

io.on('connection', (socket)=>{

  socket.on('clientevent', data=>{
    console.log("recieved", data);
    io.emit('serverevents', data)
  })
});







const PORT = 3000 || procces.env.PORT

server.listen(PORT, () => console.log("Server running.. "+ PORT))
