/**
 * Array.sort(function(a, b) {return value})
 * 비교 함수를 대입하여 배열 요소들을 정렬
 * return value에 따라 순서가 정해진다
 * value > 0 : a가 b보다 큰 수, b가 a보다 앞에 섬 
 * value < 0 : b가 a보다 큰 수,  a가 b보다 앞에 섬
 * value = 0 : a와 b가 같은 수, 제자리
 */
const numArr1 = [2, 0, 3, 4, 1];
const numArr2 = [2, 0, 3, 4, 1];
const objArr = [
    {id : 2, name : "Leo"},
    {id : 0, name : "Daniel"},
    {id : 3, name : "Asher"},
    {id : 4, name : "Chloe"},
    {id : 1, name : "Chloe"}
];

numArr1.sort(function(a, b) {
    return a - b;
});
numArr2.sort(function(a, b) {
    return b - a;
});
objArr.sort(function(a, b) {
    if (a.name > b.name) {
        return 1;
    }
    else if (b.name > a.name) {
        return -1;
    }
    else {
        return 0;
    }
});
console.log(`오름차순 : ${numArr1}`);
console.log(`내림차순 : ${numArr2}`);
console.log(objArr);
if ("Asher" > "Daniel") {
    console.log("test true");
}
else {
    console.log("test False");
}