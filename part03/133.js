/**
 * Set의 큰 특징 중 하나인 중복값을 허용하지 않는 특징을 활용하여
 * 배열의 중복값 제거
 */
const arr = ["one", "two", "three", "two", "one", "four"];
const s = new Set(arr);
console.log(s);
console.log([...s]);