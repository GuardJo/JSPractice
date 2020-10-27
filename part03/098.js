/**
 * Array.map(callback function)
 * callback fuction의 값들을 재조합하여 새로운 배열로 생성
 */
const arr = [
    {id : 0, name : "혜림", age : 6},
    {id : 1, name : "현일", age : 3},
    {id : 4, name : "탄이", age : 30},
    {id : 2, name : "현아", age : 5},
    {id : 3, name : "우림", age : 2}
];

const arr2 = arr.map((e1) => {
    e1.age = e1.age + 1;
    return e1;
});

const arr3 = arr.map((e1) => {
    return e1.name;
});

console.log(arr2);
console.log(arr3);