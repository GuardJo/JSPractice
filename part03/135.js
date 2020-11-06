/**
 * Set 객체에서 for-of를 통해 순환하는 방법은 Map 객체와 유사
 */
const s = new Set();

s.add("one");
s.add("two");

console.log("키 정보만 출력합니다.");
for (let key of s.keys()) {
    console.log(key);
}

console.log("값 정보만 출력합니다.");
for (let value of s.values()) {
    console.log(value);
}
console.log("키와 값을 동시에 출력합니다.");
for (let [key, value] of s.entries()) {
    console.log(`key : ${key}, value : ${value}`);
}

console.log("키와 값을 동시에 출력합니다.");
for (let [key, value] of s.values()) {
    console.log(`key : ${key}, value : ${value}`);
}

console.log("카와 값을 동시에 출력합니다.");

s.forEach((key, value) => {
    console.log(`key : ${key}, value : ${value}`);
});