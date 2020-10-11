var x = 5; // 숫자형
var y = 'five'; // 문자형
var isTrue = true; // 불린형
var empty = null; // null
var nothing; // undefined
var sym = Symbol('me'); // 심볼형 <-- ES6부터 추가된 새로운 원시타입

var item = {
    price : 5000,
    count : 10
};  // 객체 타입

var fruits = ['apple', 'orange', 'kiwi']    // 배열
var addFruit = function(fruit) {
    fruits.push(fruit);
}   // 함수
addFruit("watermelon");
console.log(fruits);