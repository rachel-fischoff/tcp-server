// Sets up a chat server
const net = require("net");



const server = net.createServer((c) => {
  // lets us know when client is connected
  console.log("client connected");
  c.on("end", () => {
    //lets us know when client is disconnected
    console.log("client disconnected");
  });
  c.write("hello\r\n");

  c.pipe(c);
});



server.on("error", (err) => {
  throw err;
});
server.listen(8080, () => {
  console.log("server bound");
});


