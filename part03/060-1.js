/**
 * 자바스크립트에서는 원시자료형이 각 성격에 맞게
 * 표준 내장 객체로 자동 래핑됨
 * Object : 다른 표준 내장 객체의 기본이 되는 일반 객체
 * Number : 숫자형을 감싼 객체
 * String : 문자형을 감싼 객체
 * Array : 모든 배열은 Array.prototype을 상속받음, 리스트처럼 배열 역할을 지니며, 배열의 갱신, 순회/변형 등 다양한 메소드를 지님
 * Math : 수리 연산을 하기 위한 속성과 메소드를 지닌 내장 객체, new를 통해 인스턴스를 생성하지 않음(static으로 정의된 메소드 직접 호출)
 * Date : 시간에 관련된 객체
 * JSON : JavaScript Object Notation
 * RegExp : 정규표현식은 특정 문자열 처리를 위해 사용하는 문자열 패턴 정의
 * Map : ES6부터 추가된 map객체
 * Set : ES6부터 추가된 set객체
 */
const str1 = '자바스크립트200제';
const str2 = new String('자바스크립트200제');

console.log(typeof str1);   
console.log(typeof str2);   // str2의 경우 String이라는 이름의 객체로 선언한 것이기에 object가 출력됨

console.log(str1 === '자바스크립트200제');
console.log(str2 === new String('자바스크립트200제'));  // str2의 경우 값이 아닌 주소값을 참조하기에 false

console.log(str1.valueOf());
console.log(str2.valueOf());