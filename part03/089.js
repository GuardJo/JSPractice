/**
 * Array.splice(start index, delete count, add elements)
 * 특정 위치의 요소를 삭제하거나 수정할 수 있습니다.
 * start index : 특정위치의 요소 선택, 배열 길이보다 작아야 한다.
 * delete count : start index부터 삭제하고자 하는 요소의 개수, 제거됨과 동시에 메소드 호출 결과로 값을 반환
 * add elements : start index부터 요소 추가
 */
const fruits = ["melon", "lemon", "source", "apple", "juice"];

console.log(fruits.splice(4, 1));
console.log(fruits.splice(4, 0, 'grape'));
console.log(fruits.splice(2, 1, "mandarin", "strawberry", "watermelon"));
console.log(fruits);