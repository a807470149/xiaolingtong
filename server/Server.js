

let http = require("http");

let server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.end("hello world");
});

server.listen(3000, () => {
  console.log("服务器已运行在http://127.0.0.1:3000/");
})
