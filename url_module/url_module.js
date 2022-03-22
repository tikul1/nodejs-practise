const fs = require("fs");
const url = require("url");
const http = require("http");

http.createServer(function(req, res) {
    const filename = "." + q.pathname;
    fs.readFile(filename, function(err, data) {
        const q = url.parse(req.url, true);
        if(err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type': 'text/httml' });
        res.write(data);
        return res.end();
    });
    
}).listen(8000);