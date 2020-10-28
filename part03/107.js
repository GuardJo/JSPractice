/**
 * Number 객체의 toString 메소드는 값을 특정 진법으로 표현함
 */
const dec = 531;

const binByDex = dec.toString(2);
const octByDex = dec.toString(8);
const hexByDex = dec.toString(16);
const test = dec.toString(3);

console.log(binByDex);
console.log(octByDex);
console.log(hexByDex);
console.log(test);