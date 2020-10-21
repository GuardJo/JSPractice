/**
 * 전역 객체인 window에 메소드로 hello 선언
 */

console.log('hello!');
window.hello = function hello(name) {
    console.log(`hello + ${name}`);
}