/**
 * const 는 불변객체가 아니기에 내부 속성 변경 가능
 * 그렇기에 const로 배열 선언시 배열 추가, 삭제 가능
 * 하지만 재할당은 불가
 * 즉 새로운 객체로 할당은 못하고 객체 내부의 상태만 변경 가능
 */

 const CONST_USER = {name : 'jay', age : 30};
 console.log(CONST_USER.name, CONST_USER.age);
 CONST_USER.name = 'jay2';
 CONST_USER.age = 31;
 console.log(CONST_USER.name, CONST_USER.age);
 CONST_USER = {name : 'bbo'};   // 재할당은 불가