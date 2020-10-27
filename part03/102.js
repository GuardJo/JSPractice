/**
 * Object.values(Object)
 * Object 객체의 속성값만 추출하여 배열로 반환
 */
const obj = {
    movie : "Sunny",
    music : "Like Sugar",
    style : "Retro",
    price : Infinity
};

const arr = Object.values(obj);
console.log(arr);