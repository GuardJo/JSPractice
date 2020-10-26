/**
 * Array.slice(start index, end index)
 * 시작과 끝을 지정하여 배열 요소 추출
 * 단, 끝 인덱스의 바로 앞 요소들까지 추출
 * 배열 길이보다 큰 값을 끝 인덱스로 추가할 경우, 배열의 끝값까지 추출
 * 원본 배열을 변경하지 않는 얕은 복사이기에 처리된 결과값을 활용하려면
 * 별도의 변수로 대입해야 한다.
 */
const arr = ["melon", "lemon", "source", "apple", "juice"];
console.log(`과일이 아닌 요소는 ${arr.slice(2, 3)}와 ${arr.slice(4, 5)}입니다.`);
console.log(arr.slice(0, 10));
