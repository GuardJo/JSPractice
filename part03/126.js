/**
 * Map은 ES6부터 표준으로 추가된 데이터 집합치(Collection)의 한 종류이다.
 * key와 value를 한 쌍으로 저장하고, 중복된 키는 허용하지 않는다.
 * set(key, value) : key value 쌍을 map에 저장
 * get(key) : key에 해당하는 value를 반환
 * delete(key) : 해당 key 제거
 * has(key) : 해당 key의 유무 확인
 * 
 * ----Map과 Object의 차이
 * Map은 Object와 달리 다양한 자료형의 key값 사용가능 // Object는 문자형과 Symbol형만 사용가능
 * Map은 반복가능한 객체이나 Object는 아니다.
 */
const map = new Map();

map.set("one", 1);
map.set("two", 2);

console.log(map.get("one"));
console.log(map.has("one"));
map.delete("one");

console.log(map.has("one"));
console.log(map.has("two"));