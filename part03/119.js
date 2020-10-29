/**
 * String.match(regexp);
 * 정규 표현식에 맞는 부분을 검색해서 해당 값 반환
 * 맞는 값이 있을 경우 다음과 같은 문자열의 추가 정보와 함께 배열로 반환
 * - 인자로 대입한 값과 일치한 값
 * - index 속성 : 대응된 부분의 첫 번째 로 해당되는 인덱스
 * - input 속성 : 원본 문자열
 * ! 단 정규표현식에 g 플래그가 아닐 때에만 추가 정보 반환
 */
const str = "To lose your path is the way to find that path";
const sensitiveCaseRegex = /to/;
const ignoreAllCaseRegex = /to/gi;
const findRangeRegex = /([a-f])\w+/i;   // w+ 플래그는 해당 문자로 시작해서 whitespace 전까지의 단어 반환
const findAllRageRegex = /([a-f])\w+/gi;

console.log(str.match(sensitiveCaseRegex));
console.log(str.match(ignoreAllCaseRegex));
console.log(str.match(findRangeRegex));
console.log(str.match(findAllRageRegex));