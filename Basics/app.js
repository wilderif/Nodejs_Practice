const http = require("http");

const routes = require("./routes.js");

const server = http.createServer(routes.hadler);

server.listen(3000);
