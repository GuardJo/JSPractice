/**
 * Set.size : Set객체의 내부 속성으로서 요소 개수 반환
 * Set.clear() : Set 객체의 메소드로서 모든 요소를 제거
 */
const s = new Set();

s.add("one");
s.add(2);
s.add([1, 2, 3, 4]);
s.add({a : "A", b : "B"});
s.add(function() {});

console.log(s.size);
s.clear();
console.log(s.size);