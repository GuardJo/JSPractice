/**
 * Set.keys() : Set은 key값이 없으므로 values()와 동작이 동일함
 * Set.values() : Set의 값들을 모아 SetIterator로 반환
 * Set.entries() : Set의 Key와 value들을 모아 SetIterator로 반환
 */
const s = new Set();

s.add("one");
s.add("two");
s.add("three");

const keys = s.keys();
const values = s.values();
const entries = s.entries();

console.log(keys.next().value);
console.log(values.next().value);
console.log(entries.next().value);

console.log(keys);
console.log(values);
console.log(entries);