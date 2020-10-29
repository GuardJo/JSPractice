/**
 * String객체는 반복 가능한 객체(Iterable)로써 for~of문을 통해 반복 실행 할 수 있습니다.
 */
const str = "hello";

for (const item of str) {
    console.log(item);
}

const iter = str[Symbol.iterator]();    // String은 반복가능한 객체이기에 Symbol.iterator 메소드를 갖고 있음.
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());