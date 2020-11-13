/**
 * Node.js 예외처리
 * 1. async 모듈 혹은 함수의 callback에서 첫 번째 매개변수로 에러 정보를 반환
 * 2. try-catch, throw 기법, 기존 javascript와 동일, 허나 async함수는 무조건 callback함수로 예외처리해야함
 */
const cbfunc = (err, result) => {
    if (err && err instanceof Error) {
        return console.log(err.message);
    }
    if (err) {
        return console.error(err);
    }

    console.log("this is not Error");
};

const asyncFunction = (isTrue, callback) => {
    const err = new Error("This is Error");
    if (isTrue) {
        return callback(null, isTrue);
    }
    else {
        return callback(err);
    }
}

asyncFunction(true, cbfunc);
asyncFunction(false, cbfunc);

const fs = require("fs");

try {
    const fileList = fs.readdirSync("/undefined/");
    fileList.forEach(f => console.log(f));
} catch(err) {
    if (err) {
        console.log(err);
    }
}

