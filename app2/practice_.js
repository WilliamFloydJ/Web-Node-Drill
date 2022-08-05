const http = require("http");

const PORT = 3001;

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("Hello");
  res.end();
});

server.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
