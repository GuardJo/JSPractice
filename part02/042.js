/**
 * const 또한 let과 마찬가지로 es6에서 추가된 키워드
 * let과 마찬가지로 블록 단위 스코프로 정의
 * 하지만 let과 다르게 선언 시 값을 할당해야하고 이후 변경 불가
 * 불변 객체(Immutable Object)가 되지는 않음
 */

const URL = 'http://js.com';
URL = 'http://naver';

if(true) {
    const URL2 = 'http://js.com';
}

console.log(URL2);
