/**
 * Map.keys() : Map 객체 요소의 key 정보만 모아 Iterator 객체로 반환
 * Map.values() : Map 객체 요소의 value 정보만 모아 Iterator 객체로 반환
 * Map.entries() : Map 객체 요소의 key와 value를 한 쌍으로 배열로 만들어 모아 Iterator 객체로 반환
 */
const map = new Map();

map.set("one", 1);
map.set("two", 2);
map.set("three", 3);

const keys = map.keys();
const values = map.values();
const entries = map.entries();

console.log(keys.next().value);
console.log(values.next().value);
console.log(entries.next());

console.log(keys);
console.log(values);
console.log(entries);