/**
 * Array.reverse()
 * 배열 순서를 반대로 나열합니다.
 * 함수 호출 시 원본 배열을 변경함
 */
const str = "abcdefghijklmnopqrstuvwxyz";
const arr = str.split("");
arr.reverse();
const result = arr.join("");
console.log(result);