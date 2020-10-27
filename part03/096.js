/**
 * Array.filter(callback function)
 * callback function이 true값인 요소들만을 새로운 배열에 담아 반환
 */
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredTwo = arr.filter((a) => {
    console.log(`현재 위치의 값은 ${a}입니다.`);
    return (a % 2 == 0);
});

const filteredThree = arr.filter((a) => {
    return (a % 3 == 0);
});

console.log(filteredTwo);
console.log(filteredThree);