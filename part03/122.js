/**
 * String.replace(str|regexp, replaceStr|function)
 * 정규표현식으로 문자열을 검색한 뒤, 원하는 문자열로 교체
 * 첫 번째 인자는 교체할 대상 문자열 혹은 정규식
 * 두 번째 인자를 통해 교체
 * 두 번째 인자가 함수 일 시 포함하는 매개변수
 * - 일치한 문자열
 * - 일차한 값들
 * - 일치한 값의 위치
 * - 원본 문자열
 * 함수의 매개변수
 * 매개변수가 s문자열 일 시
 * - $$ : $기호삽입
 * - $& : 매치된 문자열 삽입
 * - $` : 매치된 문자열 앞쪽까지의 문자열 삽입
 * - $' : 매치된 문자열 뒤쪽 값 삽입
 * - $n : n이 1이상 99이하의 정수라면, 첫번째 매개변수로 넘겨진 RegExp 객체에서 소괄호로 묶인 n번째의 부분 표현식으로 매치된 문자열을 삽입
 */
console.log("2018-08-23 07-23-14".replace("-", ":"));
console.log("2018-08-23 07-23-14".replace(/-/g, ":"));
console.log("2018-08-23 07-23-14".replace(/\d/g, "9"));

const littleWomen = "Meg March, Jo March, Beth March, Amy March";
console.log(littleWomen.replace(/\w+ March/ig, "Mrs $&"));      //+ March 는 우측에 March를 두는 단어를 탐색
/**
 * str : 일치한 문자열
 * d1 ~ d4 : 일치한 값들
 * offset : 일치한 값의 위치
 * s : 원본 문자열
 */
console.log(littleWomen.replace(/\w+ March/ig, (str, d1, d2, d3, d4, offset, s) => {    
    let tag = "";
    if (/Meg/.test(str)) {
        tag = "첫째";
    }
    else if(/Jo/.test(str)) {
        tag = "둘째";
    }
    else if(/Beth/.test(str)) {
        tag = "셋째";
    }
    else if(/Amy/.test(str)) {
        tag = "넷째";
    }

    console.log(`원작 "작은 아씨들"에서 주인공 ${str}은 ${tag}입니다.`);
    return tag;
}));

const name = "March Amy";
console.log(name.replace(/(March) (Amy)/, '$2 $1'));
console.log(name.replace(/(March) (Amy)/, (str, first, second, offset, s) => {
    console.log(`${second} is name, ${first} is first name`);
    return `${second} ${first}`;
}));
