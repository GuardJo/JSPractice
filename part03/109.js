/**
 * Math.random()
 * 무작위의 실수형 값을 반환
 */
const generateRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min  + 1) + min);  // min ~ max 사이의 무작위 실수 공식(min, max 포함)
};

for (let i = 0; i < 5; i++) {
    console.log(generateRandom(1, 10));
}

for (let i = 0; i < 5; i++) {
    console.log(generateRandom(-10, 100));
}