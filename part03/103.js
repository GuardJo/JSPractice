/**
 * Object.entries(Object)
 * Object 객체를 배열로 변경
 */
const obj = {
    movie : "Sunny",
    music : "Like Sugar",
    style : "Retro",
    price : Infinity
};

const modifiedObj = Object.entries(obj);
console.log(modifiedObj);