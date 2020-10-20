/**
 * 모듈은 파일이나 코드의 묶음 단위로 애플리케이션 하나의 구성요소임
 * ES6 이전에는 모듈이 정의되지 않았기에 네임스페이스 패턴을 통해 모듈을 정의했음
 */

var namespaceA = (function() {
    var privateVariable = '비공개 변수';
    return {
        publicApi : function() {
            console.log(privateVariable + "를 접근할 수 있습니다.");
        }
    }
})();

namespaceA.publicApi();     // namespaceA 자체는 전역변수로서 받아올 수 있음
console.log(namespaceA.privateVariable);    // 그러나 privateVariable의 경우 함수 스코프 이기에 함수 안에서만 받아올 수 있음