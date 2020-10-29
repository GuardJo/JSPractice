/**
 * The Iterable Protocol(반복 가능한 규약)
 * 객체 안의 값들을 반복할 수 있도록, 반복 동작을 정의하는 것을 허용하는 것
 * 우선 객체 내부에 @@iterator 메소드를 구현해야 합니다.
 * 구현 할 대 속성 키는 반드시 Symbol.iterator이어야 하고, 속성 값은 매개변수가 없는 함수가 대입됩니다.
 * 그리고 이 함수는 반복자 규약(The Iterator Protocol)을 따르는 객체를 반환합니다.
 * 
 * The Iterator Protocol(반복자 규약)
 * 연속된 값을 만든느 방법 정의
 * next 메소드를 가지고 있어야 합니다.
 * 이 때 속성 키는 next()이고 속성값은 매개변수가 없는 함수로 정의합니다.
 * 여기서 함수는 value와 done 속성을 가진 객체를 반환합니다.
 * 이러한 반복자 규약을 충족하는 객체를 iterator라고 합니다.
 */
const items = ["j", "a", "v", "a", "s", "c", "c", "r", "i", "p", "t"];
const seq = {
    [Symbol.iterator]() {
        let i = 0;
        return {
            next() {
                const value = items[i];
                i++;
                const done = (i > items.length);
                return {value, done};
            }
        };
    }
};

for (let s of seq) {
    console.log(s);
}
const [a, b, c, ...arr] = seq;
console.log(`a >>> ${a}`);
console.log(`b >>> ${b}`);
console.log(`c >>> ${c}`);
console.log("arr >>>", arr);