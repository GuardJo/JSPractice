/**
 * 정규표현식 (Regular Expression) : regexp
 * 특정 규칙으 ㄹ가진 문자열의 집합
 * /.../사이에 두는 표현식을 통해 일치하는 문자열을 찾거나 반환 혹은 일괄 치환
 * 두 가지 방법 존재
 * 1. String 객체의 메소드 중 매개변수로 정규표현식을 대입하는 메소드 사용
 * 2. 자바스크립트는 정규표현식 자체를 RegEx 객체로 해석하여, RegEx 객체의 내장 메소드 활용
 * 
 * ------flag-------
 * g (global) : 대상 문자열의 전역 범위에서 해당하는 모든 문자 탐색
 * i (case insensitive) : 대소문자 구분하지 않음
 * m (multiline) : 주로 ^와 $ 문자와 같이 비교합니다. 다중 행에서 ^와 $는 문자열의 가장 처음과 끝을 의미,
 * 그러나 m플래그 사용시 각 ^와 $는 각 행마다의 처음과 끝을 가리키게 됨
 * y (sticky) : 문자열의 lastIndex 속성 부여 후 사용, 지정된 위치부터 표현식에 일치하는 문자 탐색
 * 
 * ------word class-------
 * \w : 모든 단어 문자(영숫자 및 밑줄)와 일치 여부 확인
 * \W : 단어 문자가 아닌 문자(영숫자 및 밑줄)와 불일치 여부 확인
 * \d : 임의의 숫자 0부터 9까지의 일치 여부 확인
 * \D : tntwkrk dksls ahems answk ghkrdls
 * \s : 공백 문자(공백, 탭, 줄 바꿈)와 일치 여부 확인
 * \S : 공백 문자가 아닌 문자 확인
 */
const str = "To lose your path is the way to find that path";

const regex1 = /path/;
const regex2 = /q/;
const regex3 = /t/g;    // g플래그 추가 시 해당하는 모든 문자를 탐색
const regex4 = /t/ig;   // i플래그 추가 시 대소문자 구별 없이 탐색

console.log(str.search(regex1));
console.log(str.search(regex2));
console.log(str.search(regex3));
console.log(str.search(regex4));