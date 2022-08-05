import http from ("http");

http
  .createServer(function (req, res) {
    res.end("Hello")
  })
  .listen(4002, () => {
    console.log("Server running on port 4002");
  });