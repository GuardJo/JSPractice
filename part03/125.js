/**
 * Array 객체는 반복가능한 (Iterable) 객체입니다.
 */
const products = [{name : "가방"}, {name : "노트북"}];

for (const item of products) {
    console.log(item);
}

const iter = products[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());