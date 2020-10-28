/**
 * JSON.stringify(value, replacer, emptyplaceCount)
 * JSON 문자열로 변환
 * value = JSON 문자열로 변환할 값
 * relacer = 콜백함수나 특정 키 등을 넣어 값을 변경
 * emptyplaceCount = 들여쓰기 시 공백의 개수 
 */
const testStringify = {
    stringifiedNum : JSON.stringify(13.1),
    stringifiedStr : JSON.stringify("Kiss Carnival"),
    stringifiedBln : JSON.stringify(false),
    stringifiedArr : JSON.stringify([2003, 2017])
};

for (let key in testStringify) {
    console.log(`---------${key}----------`);
    console.log(typeof testStringify[key]);
    console.log(testStringify[key]);
}

console.log("--------------stringifyObj-----------");
const obj = {
    drama : "PET",
    season : 2017,
    casting : ["koyuki", "matsumoto jun"],
    character : ["sumire", "momo"]
};

console.log(typeof JSON.stringify(obj));
console.log(JSON.stringify(obj));
console.log(JSON.stringify(obj, ["drama", "season"]));
console.log(JSON.stringify(obj, null, 4));
console.log(JSON.stringify(obj, (key, val) => {
    if (key === "season") {
        return 2003;
    }
    return val;
}, 4));