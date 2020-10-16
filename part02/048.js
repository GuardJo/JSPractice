/**
 * 자바스크립트 객체지향 이해
 * 자바스크립트는 프로토타입 기반으로 객체지향 프로그래밍을 지원함
 * 자바의 클래스 기반과의 큰 차이점으로 프로토타입으로 객체에 공통사항을 적용할 수 있음
 */

 const teacherJay = {
     name : 'jay',
     age : 30,
     teachJavascript : function (student) {
         student.gainExp();
     }
 }

 const studentBbo = {
     name : "bbo",
     age : 20,
     exp : 0,
     gainExp : function() {
         this.exp++;
     }
 }

 console.log(studentBbo.exp);
 teacherJay.teachJavascript(studentBbo);
 console.log(studentBbo.exp);