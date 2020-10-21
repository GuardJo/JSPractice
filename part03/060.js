/**
 * 표준 내장 객체 (Standard Built-in Object)
 * 전역 스코프 안에 있는 객체들을 참조함
 * 몇몇 표준 내장 객체는 객체임에도 불구하고
 * 함수처럼 호출 할 수 있음 (내장 함수 객체 : Built-in Function Object)
 */
const str = new String('자바스크립트');
const mum = new Number(200);
const bool = new Boolean(true);
const date = new Date();
const map = new Map();
const set = new Set();

console.log(Math.PI);
console.log(Date.parse('2019-01-01'));
console.log(JSON.parse('{}'));