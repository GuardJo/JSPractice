/**
 * trim()
 * String 내장 객체의 메소드로 문자열 양 끝의 공백, 탭, 줄바꿈을 제거합니다.
 * 문자열 원본 값에는 영향을 끼치지 않기에 별도로 값을 저장해서 사용함
 */
const sentences = ['    ABC abc', 'ABC abc  ', ` first
second third
    forth
sentence


`];

const filterSentence = (sentences) => {
    const filtered = [];
    sentences.forEach(s => {
        filtered.push(s.trim());
    });
    return filtered;
}

console.log(filterSentence(sentences));
