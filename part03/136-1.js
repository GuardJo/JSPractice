/**
 * setTimeout()은 비동기 코드
 * 아무리 지연시간이 0이더라도 console.log() 다음으로 실행 스택에 올라감으로
 * 순서는 무조건 뒤임.
 */
setTimeout(function() {
    console.log("Javascript");
}, 0);

console.log("200제");