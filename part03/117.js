/**
 * JSON.parse(value, replacer)
 * JSON 문자열 값을 JSON으로 변환
 * value : 변환할 값
 * replacer : 변환하기 전에 값을 변경하는 인자 (function, key, or array)
 */
const jsonStr = '{"drama" : "pet", "season" : 2007, "casting" : ["koyumi", "matsumoto jun"], "character" : ["sumire", "momo"]}';

console.log(JSON.parse(jsonStr));
console.log(JSON.parse(jsonStr, (key, val) => {
    if (key === "season") {
        val = 2003;
    }
    return val;
}));

// 원시형 겂 중 JSON문자열이 아니어도 오류 없이 실행되는 경우 (불린형이나 숫자형 등)
console.log(JSON.parse('13.1'));
console.log(typeof JSON.parse('13.1'));
console.log(JSON.parse("false"));
console.log(typeof JSON.parse("false"));

// 특정 원시 자료형을 나타내지 않는 문자형, 또는 배열 형태의 문자형은 오류
console.log(JSON.parse("Kiss Carnival"));
console.log(JSON.parse("[2003, 2017]"));