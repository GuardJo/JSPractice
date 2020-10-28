/**
 * Math.ceil(number)
 * number의 소수점 다음 값을 올림한다
 */
const positiveNum = 93.54;
const negativeNum = -39.27;

console.log(Math.ceil(positiveNum));
console.log(Math.ceil(positiveNum * 10) / 10);
console.log(Math.ceil(positiveNum / 10) * 10);

console.log(Math.ceil(negativeNum));
console.log(Math.ceil(negativeNum * 10) / 10);
console.log(Math.ceil(negativeNum / 10) * 10);