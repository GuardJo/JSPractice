/**
 * 파일 삭제하기
 * 파일과 폴더의 삭제 방식이 다름
 * 파일을 삭제할 때에는 파일에 접근가능 여부부터 파악해야함.
 */
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "js200", "hello.txt");

fs.access(filePath, fs.constants.F_OK, (err) => {   // 접근권한 확인
    if (err) {
        return console.log("삭제할 수 없는 파일입니다.");
    }

    fs.unlink(filePath, (err) => {  //file 삭제
        if (err) {
            return console.log(err);
        }

        return console.log(`${filePath}를 정상적으로 삭제하였습니다.`);
    });
});