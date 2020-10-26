/**
 * Array.forEach(callBack Function)
 * 배열 내부 요소를 순환하며, callBack Function 실행
 */
const arr = [
    {id : 0, name : "혜림", age : 6},
    {id : 1, name : "현일", age : 3},
    {id : 2, name : "현아", age : 5},
    {id : 3, name : "우림", age : 2}
];

arr.forEach((e1) => {
    console.log(e1.name);
});