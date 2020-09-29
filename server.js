// sets up a TCP echo server
const net = require("net");


const server = net.createServer((socket) => {
  // we want to keep track when a client connects and disconnects
  console.log("client connected");
  socket.on("end", () => {
    console.log("client disconnected");
  });
  
  // we want to let the client know that it's connected by sending a message
  socket.write("hello\r\n");
  // equivalent to using event listeners to:
  // write back the same data that the client sends, ie, echo
  //  socket.on('data', function(chunk) {
  //    socket.write(chunk);
  //  });
  //  socket.on('end', socket.end);
  socket.pipe(socket);
});


// Will throw port errors and other errors
// TODO clean up nicely, restart
server.on("error", (err) => {
  throw err;
});

// Lets us know that the server is up and listening
server.listen(8080, () => {
  console.log("server bound");
});


