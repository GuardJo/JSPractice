/**
 * 정적 스코프와 동적 스코프의 차이
 * 정적 스코프는 코드를 작성하는 시점에 스코프가 결정됨
 * 자바스크립트는 정적 스코프임.
 */

 var a = "global";  // 전역 스코프

 function print1() {
     console.log(a);
 }

 function print2() {
     var a = "local";
     print1();
 }

 print1();
 print2();

 /**
  * print2()의 경우 js가 정적스코프이기에 print1()을 호출할 때 
  * a에 새로운 값을 넣어주는 것이 아니고 처음 코드를 작성했던 
  * 시점을 기준으로 하기에 print1()기준에서 전역 변수였던 "global"을 출력합니다.
  */