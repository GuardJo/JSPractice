/**
 * let 
 * 기존에는 var로만 변수 선언이 가능했지만 es6이후 let 타입도 추가됨
 * var 타입은 함수 단위 스코프지만
 * let 타입은 블록 단위 스코피이므로 블록 범위로 변수 지정 가능
 */

if (true) {
    var functionScopeValue = 'global';
    let blockScopeValue = 'local';  
}

console.log(functionScopeValue);    // var 로 선언했기에 함수 단위 스코프이므로 if문 밖에서도 사용가능
console.log(blockScopeValue);   // let 으로 선언햇기에 블록 단위 스코프이므로 if문 밖에서 사용불가