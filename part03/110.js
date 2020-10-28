/**
 * Math.round(number)
 * number의 소수점 다음의 값을 반올림한다.
 */
const val = 573.926;

console.log(Math.round(val));
console.log(Math.round(val * 10) / 10);     // 소수점 두번째 자리에서 반올림
console.log(Math.round(val * 100) / 100);   // 소수점 세번째 자리에서 반올림
console.log (Math.round(val / 10) * 10);    // 1의 자리에서 반올림
console.log(Math.round(val / 100) * 100);   // 10의 자리에서 반올림