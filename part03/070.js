/**
 * substr()
 * substring()과는 다르게 두번째 인자가 인덱스가 아닌 길이를 나타냄
 * 첫번째 인자부터 두번째 인자만큼 출력
 * 두번째 인자는 필수가 아님
 */
const sentence = "Wakanda Forever!!!";
console.log(sentence.substr(8));    // 두번째 인자가 없을 시 끝까지 출력
console.log(sentence.substr(8, 7));
console.log(sentence.substr(0));
console.log(sentence.substr(-10));      // 첫번째 인자가 음수일 경우 뒤에서 해당 수만큼 앞으로 이동
console.log(sentence.substr(0, -3));       // 두번째 인자는 음수를 받아올 수 없음
console.log(sentence.substr(30));       // 첫번째 인자가 문자열 길이보다 클 경우 빈 값을 반환함
console.log(sentence.substr(0, 30));    // 두번째 인자가 문자열 길이보다 클 경우 끝까지 반환