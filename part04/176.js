/**
 * 웹 API 작성
 * GET 방식
 */
"use strict";

const http = require("http");
const url = require("url");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    switch (req.method) {
        case "GET":
            if (req.url === '/') {
                res.setHeader("Context-Type", "text/plain");
                res.writeHead(200);
                res.end("hello, Node.js HTTP server");
            }
            else if (req.url.substring(0, 5) === "/data") {
                const queryparams = url.parse(req.url, true).query;

                res.setHeader("Context-Type", "text/html");
                res.writeHead(200);
                res.write("<html><head><title>JavaScript Example 200</title></head><body>");

                for (let key in queryparams) {
                    res.write(`<h1>${key}</h1>`);
                    res.write(`<h2>${queryparams[key]}</h2>`);
                }

                res.end("</body></html>");
            }
            break;
        default:
            res.end();
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})

