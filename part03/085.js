/**
 * Array.joion()
 * 각 배열 요소를 병합하여 하나의 문자열로 반환
 * 인자를 통해 구분자로 사용할 수 있음
 */
const dialogue = [
    'Fear is the path to the dark side',
    'Fear leads to anger',
    'Anger leads to hate',
    'Hate leads to suffering',
    'I sense much fear in you'
];

console.log(dialogue.join('. '));
console.log(dialogue.join(".\n"));