/**
 * 폴더 삭제 및 특정 폴더 내의 파일 전부 삭제
 */
"use stirct";

const fs = require("fs");
const path = require("path");

const removePath = (p, callback) => {
    fs.access(p, fs.constants.F_OK, (err) => {
        if (err) {
            return console.log("삭제할 수 없습니다.");
        }
        fs.stat(p, (err, stats) => {
            if (err) {
                return console.log(err);
            }

            if (!stats.isDirectory()) {
                console.log("이 경로는 파일입니다.");
                return fs.unlink(p, (err) => {
                    if (err) {
                        return callback(err);
                    }
                    return callback(null, p);
                });
            }

            console.log("이 경로는 폴더입니다.");
            fs.rmdir(p, (err) => {
                if (err) {
                    return callback(err);
                }

                return callback(null, p);
            });
        });
    });
};

const printResult = (err, result) => {
    if (err) {
        return console.log(err);
    }

    return console.log(`${result}를 삭제하였습니다.`);
}

const p = path.join(__dirname, "js200");

try {
    const files = fs.readdirSync(p);
    if (files.length) {
        files.forEach(f =>
            removePath(path.join(p, f), printResult)
        );
    }
} catch (err) {
    return console.log(err);
}

removePath(p, printResult);