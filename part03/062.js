/**
 * Number 객체의 isNaN 메소드는 NaN(Not a Number)을 구별함
 */
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(undefined));
console.log(Number.isNaN('Is it Number?'));
console.log(Number.isNaN(0));
console.log(Number.isNaN(null));

console.log(Number.isNaN(-1));
console.log(Number.isNaN(0/0));     // 수학적으로 정의되지 않은 연산이며, 이 결과값은 NaN을 반환함.
console.log(Number.isNaN(new Date()));
console.log(Number.isNaN(new Date().toString()));
console.log(Number.isNaN(Infinity));  // 자바스크립트에서 Infinity는 숫자형임
