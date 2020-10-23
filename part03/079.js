/**
 * Array.from()
 * 대입된 문자열을 구분자 없이 분할
 * 두번째 인자로 callboack함수를 대입하여 분할함과 동시에 값 변경 가능
 */

const str = '12345678';

const disributedArr = Array.from(str);
console.log(disributedArr);

const modifiedArr = Array.from(str, (e1, e2) => e1 * e2);
console.log(modifiedArr);