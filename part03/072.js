/**
 * toString()
 * Object의 내장 메소드
 * 모든 객체는 Object를 상속 받기 때문에, 모든 객체는
 * toString() 메소드에 접근하고 재정의합니다.
 * 이는 Object객체의 toString()을 상속받은 것과 다르다.
 */

const num = 5;
const bool = true;
const str = "문자열 값";
const arr = [1, 2, 3];
const obj = {a : 15};

console.log(num.toString());
console.log(bool.toString());
console.log(str.toString());
console.log(arr.toString());
console.log(obj.toString());
console.log(console.toString());

num.__proto__.toString = () => {
    return 'toString 덮어쓰기';
};
console.log(num.toString());