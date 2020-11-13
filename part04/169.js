const fs = require("fs");
const { isDeepStrictEqual } = require("util");

const checkDir = (path, callback) => {
    fs.stat(path, (err, stats) => {
        if (err && err.code === "ENOENT") {
            return callback(null, true);    // 해당 경로에 어떤 파일도 존재하지 않을 경우
        }
        if (err) {
            return callback(err);
        }

        return callback(null, !stats.isDirectory());    //isDirectory()가 true이면 이미 동일한 이름의 폴더가 있단 뜻
    });
};

const currentPath = __dirname;
let path = `${currentPath}/js200`;

checkDir(path, (err, isTrue) => {
    if (err) {
        return console.log(err);
    }
    if (!isTrue) {
        console.log("이미 동일한 이름의 디렉터리가 있습니다. 디렉터리명을 변경합니다.");
        path += "-new";
    }

    fs.mkdir(path, (err) => {
        if (err) {
            console.log(err);
        }

        console.log(`${path} 경로로 디렉터리가 생성되었습니다.`);
    });
});