// const express = require('express');
const net = require("net");

// const app = express()

const server = net.createServer((c) => {
  // 'connection' listener.
  console.log("client connected");
  c.on("end", () => {
    console.log("client disconnected");
  });
  c.write("hello\r\n");
//   // set encoding 
//   c.setEncoding('utf-8');
  c.pipe(c);
});



server.on("error", (err) => {
  throw err;
});
server.listen(8080, () => {
  console.log("server bound");
});
