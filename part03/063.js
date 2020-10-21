/**
 * isInteger() : 값이 정수인지 아닌지 확인
 */
console.log(Number.isInteger(0));
console.log(Number.isInteger(-1));
console.log(Number.isInteger(77777777777777));
console.log(Number.isInteger(null));
console.log(Number.isInteger(0/0));     // 수학적으로 정의되지 않은 연산은 false
console.log(Number.isInteger(Infinity));    // 양의 무한대, 음의 무한대는 정수가 아님
console.log(Number.isInteger(true));
console.log(Number.isInteger({}));