/**
 * Array.every(callback function)
 * 배열의 모든 요소가 callback function 조건을 만족하는지 확인
 * 한 번이라도 false일 경우 false 반환
 * 전부 true일 경우 true 반환
 */
const arr = [
    {id : 0, name : "혜림", age : 6},
    {id : 1, name : "현일", age : 3},
    {id : 2, name : "현아", age : 5},
    {id : 3, name : "우림", age : 2}
];

const isAllHyunA = arr.every((e1) => {
    return (e1.name == "현아");
});
const youngerThanSevenAll = arr.every((e1) => {
    return (e1.age < 7);
});

console.log(isAllHyunA);
console.log(youngerThanSevenAll);