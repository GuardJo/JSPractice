/**
 * 파일 읽기
 */
"use strict";

const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "js200", "hello.txt");

fs.open(filePath, "r", (err, fd) => {
    if (err && err === "ENOENT") {      // ENOENT : 찾는 파일이 없다는 것을 의미
        return console.log("파일을 찾을 수 없습니다.");
    }
    if (err) {
        return console.log(err);
    }

    console.log("파일을 정상적으로 읽을 수 있습니다.");

    fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) {
            return console.log(err);
        }

        console.log(data);
    });

    try {
        const data = fs.readFileSync(filePath, "utf-8");
        console.log(data);
    } catch (err) {
        console.log(err);
    }
});