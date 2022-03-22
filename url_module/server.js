const http = require("http");
const server = http.createServer(function (req, res) {
    if(req.url == '/') {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write('<html><body> <p> Home Page</p></body></html>');
    res.end();
    }
    else if (req.url == "/student") {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write('<html> <body> <p> this is student page </body> </html>');
        res.end();
    }
    else if (req.url == "/admin") {
        res.writeHead(200, { 'Content-Type' : 'text/html'});
        res.write('<html> <body> <p> this is admin page </p> </body> </html>');
        res.end();
    }
    else {
        res.end('Invalid Request');
    }
});
server.listen(5000);
console.log('Node server is running at port 5000.....');