/**
 * Set은 ES6부터 표준으로 추가된 값의 집합체(Collection)입니다.
 * Set은 값으로만 이루어진 데이터 구조이며, 중복값은 허용하지 않습니다.
 * Set.add(value) : Set 객체에 value 추가
 * Set.has(value) : Set 객체 내에 value 유무 확인
 * Set.delete(value) : Set 객체 내의 value 제거
 */
const s = new Set();

s.add("one");
s.add("two");
s.add("three");

console.log(s.has("one"));
s.delete("one");
console.log(s.has("one"));
console.log(s.has("two"));