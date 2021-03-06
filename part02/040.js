/**
 * 함수 호이스팅 이해
 * 호이스팅은 var변수와 함수 선언문만 호이스팅 가능
 * js는 실행간 해석하는 단계와 실행하는 단계로 나누어지는데
 * 이러한 단계중 해석하는 단계에서 var변수와 함수 선언문을 미리 해석함
 * 그러므로 실행 단계시에 함수와 var 변수가 먼저 실행되어도 해석이 가능함.
 */

hello();    // 함수 호이스팅

function hello() {
    console.log("안녕하세요.");
}


hello2();   // 함수 표현식은 호이스팅이 안되기에 호이스팅시 hello2()는 undefined로 할당됨.
var hello2 = function () {
    console.log("안녕하셉");
}

