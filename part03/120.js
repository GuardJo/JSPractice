/**
 * RegEx.test(str)
 * str이 정규표현식에 맞으면 true, 아니면 false 반환
 * ^x : 문자열의 시작을 표현, x문자로 시작됨을 의미
 * x$ : 문자열의 종료 표현, x문자로 종료됨을 의미
 * .x : 임의의 한 문자의 자리수를 표현하며 문자열이 x로 끝난다는 것을 의미
 * x+ : 반복을 표현하며 x 문자가 한 번 이상 반복됨을 의미
 * x? : 존재 여부를 표현하며 x문자가 존재할 수도 있고 하지 않을 수도 있음을 의미
 * x* : 반복 여부를 표현하며 x문자가 0번 또는 그 이상 반복됨을 의미
 * x|y : ㅌ 또는 y 문자가 존재함을 의미
 * (x) : 그룹으로 처리함
 * (x)(y) : 그룹들의 집합 표현, 앞에서부터 순서대로 번호 부여, 각 그룹의 데이터로 관리
 * (x)(?:y) : 그룹들의 집합에 대한 예외를 표현하며 그룹 집합으로 관리되지 않음을 의미
 * x{n} : 반복을 표현하며 x문자가 n번 반복됨을 의미
 * x{n,} : 반복을 표현하며 x문자가 n번 이상 반복됨을 의미
 * x{n, m} : 반복을 표현하며 x문자가 n번 이상 m번 이하로 반복됨을 의미
 * [xy] : 문자 선택을 표현하며 x와 y 중 하나를 의미
 * [^xy] : x , y를 제외한 문자를 의미
 * [x-z] : x ~ z 사이의 문자 의미
 * \ :  다음에 일반 문자가 나오면 이스케이프 문자로 해석, 특수문자는 일반문자로 해석
 */
const numRegExp = /[0-9]+/;     
const phoneRegExp = /\d{3}-\d{3,4}-\d{4}$/;
const emailRegExp = /^([-_.]?[0-9a-zA-Z]{6,13})+\@([0-9a-z]+)\.([a-z]{2,3})$/i;

console.log(numRegExp.test(12345));
console.log(numRegExp.test("test"));
console.log(phoneRegExp.test("010-3003-0046"));
console.log(phoneRegExp.test("02-8844-1234"));
console.log(emailRegExp.test("test123@javascript.org"));
console.log(emailRegExp.test("test-javascript"));