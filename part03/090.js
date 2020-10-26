/**
 * Array.indexOf(value, start index)
 * 배열에서 value의 인덱스를 반환
 * 없을 경우 -1 반환
 * start index : start index 값 부터 탐색
 */
const arr = ["spring", "summer", "fall", "winter", "is", "down"];

console.log(`"winter" is in this index ${arr.indexOf("winter")}`);
console.log(`"winter" is not in here, look this value ${arr.indexOf("winter", 4)}`);