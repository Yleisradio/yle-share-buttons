#!/usr/bin/env node

var http = require("http");
var fs = require("fs");

http.createServer(function(req, res) {
    if (req.url === "/") {
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        res.end(fs.readFileSync("index.html"));
    } else if (req.url == "/yle-share-buttons.js") {
        res.writeHead(200, {
            "Content-Type": "application/javascript"
        });
        res.end(fs.readFileSync("yle-share-buttons.js"));
    } else if (req.url == "/yle-share-buttons.min.js") {
        res.writeHead(200, {
            "Content-Type": "application/javascript"
        });
        res.end(fs.readFileSync("yle-share-buttons.min.js"));
    } else if (req.url == "/yle-share-buttons.css") {
        res.writeHead(200, {
            "Content-Type": "text/css"
        });
        res.end(fs.readFileSync("yle-share-buttons.css"));
    } else if (fs.existsSync(req.url.substr(1))) {
        res.end(fs.readFileSync(req.url.substr(1)));
    } else {
        res.writeHead(404);
        res.end();
    }
}).listen(8080, "localhost");

console.log("Server running at http://localhost:8080/");
