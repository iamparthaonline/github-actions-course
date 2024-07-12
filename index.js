const http = require("http");
const getToday = require("./src/today");

const server = http.createServer(function (request, response) {
  console.dir(request.param);

  if (request.method == "GET") {
    console.log("GET");
    const today = getToday();
    console.log("today", today);
    response.writeHead(200, { "Content-Type": "text/html" });

    response.end("Today is: " + today + "\n\n" + process.env.HOSTNAME);
  }
});

const port = 3000;
const host = "127.0.0.1";
server.listen(port, host);
console.log(
  `Listening at http://${host}:${port}`,
  `|| Hostname - ${process.env.HOSTNAME}`
);
