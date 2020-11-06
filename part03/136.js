/**
 * setTimeout(param1, param2)
 * param1 : 일정 시간 후 실행될 함수
 * param2 : 지연 시간
 * 글로벌 객체에 내장된 함수, 브라우저에서는 Window 전역 객체의 메소드이며 Node.js에서는 GLOBAL 전역 객체의 메소드로 정의되어있음
 * 그렇기에 별도의 객체 생성이나 선언이 필요 없음.
 * 비동기 실행 코드임.
 */
const timer = {
    run : function() {
        if (this.t) {
            console.log("이미 실행중 입니다.");
        }
        this.t = setTimeout(function() {
            console.log("1초 뒤에 실행됩니다.");
        }, 1000);
    },
    cancel : function() {
        if (this.t) {
            clearTimeout(this.t);
        }
        this.t = undefined;
    }
};

timer.run();
timer.cancel();
timer.run();