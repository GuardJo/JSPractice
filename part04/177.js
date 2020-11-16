/**
 * 웹 API 작성하기
 * POST 형식
 */
const http = require("http");
const qs = require("querystring");  // URL 쿼리 문자열을 분석, 다른 형식으로 지정 변환하는 함수들 제공

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    switch (req.method) {
        case "POST" : 
            let body = "";

            req.on("data", (chunk) => {
                body += chunk;
            });
            req.on("end", () => {
                const obj = qs.parse(body);
                res.writeHead(200);
                res.end(JSON.stringify(obj));
            });
            req.on("error", (err) => {
                console.error(err.stack);
            });
            break;
        default :
            res.end();
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});