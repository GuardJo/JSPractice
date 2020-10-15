/**
 * 클로저 : 함수가 정의 될 떄의 렉시컬 환경을 기억하는 함수
 */

 function createCounterClosure() {
     let count = 0;
     return {
         increase : function() {
             count++;
         },
         getCount : function() {
             return count;
         }
     };
 }

 // 각각 선언하였기에 별도의 클로저가 만들어짐
 const counter1 = createCounterClosure();  
 const counter2 = createCounterClosure();

 counter1.increase();
 counter1.increase();
 console.log(`counter1의 값 ${counter1.getCount()}`);
 counter2.increase();
 console.log(`counter2의 값 ${counter2.getCount()}`);
  // 서로 다른 클로저이기에 값이 다름