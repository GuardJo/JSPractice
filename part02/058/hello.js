/**
 * ES6 모듈 시스템에서는 이름있는 변수나 함수 혹은 클래스를 
 * export키워드로 내보낼 수 있으며, 중복되지 않는 한 
 * 이름으로 import해올 수 있다.
 */

const version = 'v1.0';
var personA = {
    name: 'a'
};

export { version, personA };  // 변수들을 이미 선언한 후에 내보낼 수도 있음

export function add(a, b) {
    return a + b;
}

export class Person {
    constructor(name) {
        this.name = name;
    }
}