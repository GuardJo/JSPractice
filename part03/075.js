/**
 * String.indexOf()
 * 문자열에서 특정 문자나 문자열의 위치 반환
 * 문자일 경우, 해당 문자 위치 반환
 * 문자열일 경우, 첫번째 문자의 위치 반환
 * 해당하는 문자나 문자열이 없을 경우 -1을 반환
 */

const str = "Carpe diem, seize the day";
console.log(`"e"는 ${str.indexOf('e')}번째 인덱스에 있습니다.`);
console.log(`대문자 "C"는 ${str.indexOf('C')}번째 인덱스에 있습니다.`);
console.log(`소문자 "c"는 ${str.indexOf('c')}번째 인덱스에 있습니다.`);
console.log(`문자열 ", se"는 ${str.indexOf(", se")}번째 인덱스에 있습니다.`);

const arr = ["Carpe", "diem", "seize", "the", "day"];
const howManyHasE = (arr) => {
    let count = 0;
    arr.forEach((str) => {
        if (str.indexOf('e') > -1) {
            count++;
        }
    });
    return count;
}

console.log(`${arr}에 "e"가 있는 요소는 모두 ${howManyHasE(arr)}개 입니다.`)