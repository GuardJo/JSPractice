/**
 * 스코프 체인 
 * 실행 컨텍스트(Execute Context) : 코드가 실행하기 위해 필요한 정보들
 * 스택을 이용해 실행 컨텍스트를 관리
 * 실행 컨텍스트는 렉시컬 환경을 가지고 있음
 * 렉시컬 환경 (Lexical Enviroment) : 환경 레코드 (EnviromentRecord) + 외부 렉시컬 환경 (OuterLexicalEnviroment)
 * 환경 레코드 (EnviromentRecord) : 실제 함수와 변수같은 식별자와 그 식별자가 가리키는 값을 기록
 * 외부 렉시컬 환경 (OuterLexicalEnviroment) : 환경 레코드 외에 자신의 실행 환경을 감싸는 외부 실행환경에 대한 참조
 * ex) print2()의 외부 렉시컬 환경은 print()의 렉시컬 환경을 참조함.
 * ex> prtin()의 외부 렉시컬 환경은 전역 환경(var person)을 참조함.
 */

 var person = 'harin';

 function print() {
     var person2 = 'jay';

     function print2() {
         console.log(person);
         console.log(person2);
     }

     print2();

     console.log("print finished");
 }

 print();
 console.log("finished");

