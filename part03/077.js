/**
 * String.includes()
 * 문자열안에 해당 문자열이 포함되는지 여부를 반환
 * 두번째 인자를 줄 경우 해당 인덱스부터 비교
 */

const str = 'Make your lives extradordinary';

console.log(str.includes("Make"));
console.log(str.includes("Make", 1));   // 1번째 인덱스부터 비교할 경우 찾을 수 없음