/**
 * Map 요소 순회
 * for~of를 통해 Iterator를 순회할 수 있습니다.
 * 내장 메소드인 forEach를 통해 key와 value 정보를 하나씩 전달 받을 수 있습니다.
 */
const map = new Map();

map.set("one", 1);
map.set("two", 2);

console.log("key 정보만 출력합니다.");
for (let key of map.keys()) {
    console.log(key);
}

console.log("value 정보만 출력합니다.");
for (let value of map.values()) {
    console.log(value);
}

console.log("[for..of, entries] key, value 정보를 동시에 출력합니다.");
for (let [key, value] of map.entries()) {
    console.log(`key : ${key}, value : ${value}`);
}

console.log("[for..of] key, value 정보를 map에서 직접 동시에 출력합니다.");
for (let [key, value] of map) {
    console.log(`key : ${key}, value : ${value}`);
}

console.log("[forEach] key, value 정보를 동시에 출력합니다.");
map.forEach((value, key) => {
    console.log(`key : ${key}, value : ${value}`);
})