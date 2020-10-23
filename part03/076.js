/**
 * String.lastIndexOf()
 * indexOf()와는 다르게 뒤에서부터 문자를 탐색한다.
 */

const str = "Carpe diem, seize the day";
console.log(`"e"는 ${str.lastIndexOf('e')}번째 인덱스에 있습니다.`);    // 뒤에서 처음으로 발견된 e의 인덱스를 반환했다.
console.log(`대문자 "C"는 ${str.lastIndexOf('C')}번째 인덱스에 있습니다.`);
console.log(`소문자 "c"는 ${str.lastIndexOf('c')}번째 인덱스에 있습니다.`);
console.log(`문자열 ", se"는 ${str.lastIndexOf(", se")}번째 인덱스에 있습니다.`);