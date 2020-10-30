/**
 * Map 객체를 순환하면서 요소 삽입
 * key 값으로 function을 삽입
 */
const map = new Map();

for (let num of [1, 2, 3, 4, 5]) {
    map.set((value) => {
        return value * 2;
    }, num);
}

for (let [func, value] of map) {
    console.log(func(value));
}