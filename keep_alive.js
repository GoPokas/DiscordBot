// code by VARSHITH REDDY SATTI
// to create a server in node.js you should.
var http = require("http");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("write html code to display you test");
    res.end();
  })
  .listen(8080);
// save this as httpServer.js
// run this by typing node httpServer.js in the command line
// to acess your server got to http://localhost:8080
