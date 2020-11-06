/**
 * setInterval(param1, param2)
 * 글로벌 객체에 내장된 메소드, 일정 시간을 두고 callback함수를 반복하여 실행한다
 * param1 : callback function
 * param2 : delay time
 */
let count = 0;

const timer = setInterval(function() {
    console.log(`${count++}번째 실행`);
    if (count > 10) {
        clearInterval(timer);
    }
}, 1000);

