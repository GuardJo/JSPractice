/**
 * Array.some(callback function)
 * callback function 값이 true를 반환할 때까지 배열 요소를 순환.
 * 만일 마지막까지 true를 반환하지 않을 경우 false 반환
 */
const arr = [
    {id : 0, name : "혜림", age : 6},
    {id : 1, name : "현일", age : 3},
    {id : 2, name : "현아", age : 5},
    {id : 3, name : "우림", age : 2}
];

const isHyunAhere = arr.some((e1) => {
    return (e1.name == "현아");
});
const olderThanSix = arr.some((e1) => {
    return (e1.age > 6);
});

console.log(isHyunAhere);
console.log(olderThanSix);