/**
 * 자바스크립트 배열 자료형은 LinkedList 자료구조 형태임
 * 따라서 배열 앞과 뒤에 요소 추가 가능
 * Array.push() : 배열 뒤에 요소 추가
 */
const festa = ['mang'];
festa.push('chimmy');
festa.push('tata');
festa.push('cooky');
festa.push('shooky');
festa.push('koya');
festa.push('rj');

festa.forEach(name => {
    console.log(name);
});