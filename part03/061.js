/**
 * typeof : 특정 원시 자료형을 확인하거나 원시 자료형과 객체 구분에 용이
 * instanceof : 어떤 종류의 객체인지 확인하는데 주로 활용
 */
const str = 'JavaScript';
const strObj = new String('JavaScript');
const num = 20;;
const numObj = new Number(200);
const bool = true;
const boolObj = new Boolean(true);
const func = function() {};
const arr = [10, 200, 4000];
const obj = {a1 : 'test'};
const empty = null;
const notCalled = undefined;

// 원시타입은 true, 내장 객체들은 false를 나타냄
console.log("typeof");
console.log(typeof str === 'string');
console.log(typeof strObj === 'object');
console.log(typeof num === 'number');
console.log(typeof numObj === 'object');
console.log(typeof bool === 'boolean');
console.log(typeof boolObj === 'object');
console.log(typeof func === 'function');
console.log(typeof arr === 'object');
console.log(typeof obj === 'object');
console.log(typeof empty === 'object');
console.log(typeof notCalled === 'undefined');

// 원시타입은 false, 내장 객체들은 true를 나타냄
console.log("instanceof");
console.log(str instanceof String);
console.log(strObj instanceof String);
console.log(num instanceof Number);
console.log(numObj instanceof Number);
console.log(bool instanceof Boolean);
console.log(boolObj instanceof Boolean);
console.log(func instanceof Function);
console.log(arr instanceof Array);
console.log(arr instanceof Object);
console.log(empty instanceof Object);   // typeof에서 object를 반환했지만 실제 객체는 아님을 확일할 수 있다.
console.log(notCalled instanceof undefined);