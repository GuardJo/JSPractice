/**
 * Node.js 내장모듈(Node.js API) 사용
 */
const util = require("util");   //별도의 주소 ./ 등이 없이 문자열로만 작성된 것은 Node.js의 코어 lib에서 탐색하는 것

const name = "Tony";
const greeting = util.format("Hello %s", name);
console.log(greeting);