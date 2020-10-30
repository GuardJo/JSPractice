/**
 * Map은 원시자료형 뿐만 아니라
 * 객체, 배열, 함수형 등 다양한 자료형을 키로 선언할 수 있다.
 */
const map = new Map();

map.set("one", 1);
map.set(2, "two");
map.set([1, 2, 3], "Three elements");
map.set({a : 'A', b : 'B'}, "Object element");
map.set(function() {}, "Function element");

console.log(map.size);