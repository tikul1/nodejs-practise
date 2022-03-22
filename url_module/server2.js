//serve json response from the node js server

const http = require('http');

const server = http.createServer(function (req, res) {
    if (req.url == '/data') {
        res.writeHead(200, {'Content-Type' : 'application/json'});
        res.write(JSON.stringify({message : "hello world"}));
        res.end();
    }
});
server.listen(8000);

console.log("node js server running at 8000");

