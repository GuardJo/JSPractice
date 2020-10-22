/**
 * String의 내장객체 substring()
 * slice 메소드와 거의 동일함
 * slice와는 다르게 음수를 넣지 못함
 * slice와는 다르게 첫 인자가 두번째 인자보다 클 경우 바꿔서 실행됨
 */
const sentence = "This will be the end of Wakanda";
console.log(sentence.substring(13));
console.log(sentence.substring(13, 20));
console.log(sentence.substring(0));
console.log(sentence.substring(0, -20));
console.log(sentence.substring(50));
console.log(sentence.substring(20, 13));