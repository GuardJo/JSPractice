/**
 * Array.reduce(reduceValue, currentValue, currentIndex, baseArray) => {return value;}, startValue);
 * reduceValue : 누적된 값, 필수
 * currentValue : 현재 요소 값, 필수
 * currentIndex : 현재 인덱스
 * baseArray : 원본 배열
 * startValue : 초기 값
 * 
 * 배열 요소를 순환하면서 정의된 함수에 의해 단일 값으로 누적가능
 */
const numArr = [1, 2, 3, 4, 5];

const result = numArr.reduce((acc, e1) => {
    return acc + e1;
}, 0);

console.log(result);