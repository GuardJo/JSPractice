/**
 * ES6 모듈 시스템에서는 default 키워드를 사용하여 모듈에서 기본으로
 * 내보내는 값을 정의할 수 있습니다.
 * default는 하나만 사용할 수 있음
 */

// export 'hello';
export function hello(name) {
    console.log(`hello ${name}`);
};
export default class Hello {
    constructor(greeting) {
        this.greeting = greeting;
    }
    hi(name) {
        console.log(`${this.greeting} ${name}`);
    }
}