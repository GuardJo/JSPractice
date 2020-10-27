/**
 * Object.assign(baseObj, ...Objs)
 * baseObj를 기준으로 병합한다.
 * baseObj는 수정됨
 */
const obj1 = {one : 1, two : 2, three : 3};
const obj2 = {name : "탄이", age : 5, address : "seoul"};
const obj3 = {friends : ["혜림", "현아", "현일", "우림"]};

const newObj1 = Object.assign({}, obj1);
const newObj2 = Object.assign({}, obj1, obj2);
newObj1.four = 4;

console.log(obj1);
console.log(newObj1);
console.log(newObj2);

console.log("\n");

const newObj3 = Object.assign(obj1, obj3);  // obj1에 병합하므로 obj1 수정됨

console.log(obj1);
console.log(newObj1);
console.log(newObj2);
console.log(newObj3);