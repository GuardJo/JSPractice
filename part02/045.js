/**
 * 객체 속성 기술자 (Object Property Descriptor) : 객체 자신에 대한 속성 정보
 * value : 값
 * enumerable : for-in 루프나 Object.key 메소드 같이 속성을 나열할 때 나열 가능 여부
 * writable : 갑승ㄹ 변경할 수 있는 여부를 정의
 * configurable : 속성 기술자를 변경할 수 있는 여부를 정의 
 * 
 * defineProperty() 는 한 개의 속성만 수정 가능
 * defineProperties()는 여러 속성 수정 가능
 */

 let user = {
     name : "jaedo"
 };
 let descriptor = Object.getOwnPropertyDescriptor(user, "name");    // 객체 속성 출력
 console.log(descriptor);

 let user2 = {};
 Object.defineProperty(user2, "name", {
     value : "jaedo",
     enumerable : true, 
     configurable : true,
     writable : false
 });
 console.log(user2.name);
 user2.name = "bbo";    // writable : false 이기에 변경 불가
 console.log(user2.name);

 let user3 = {
     name : "jaedo",
     toString() {
         return this.name;
     }
 };
Object.defineProperty(user3, "toString", {
    enumerable : false
});
for (let key in user3) {
    console.log(key);
    console.log(user3[key]);   // toString의 enumerable 속성이 false이기에 출력 불가
}

let user4 = {};
Object.defineProperty(user4, "name", {
    value : "jaedo",
    configurable : false
});
console.log(Object.getOwnPropertyDescriptor(user4, "name"));
delete user4.name;  // configurable 속성이 false이기에 수정 불가
console.log(user4.name);
Object.defineProperty(user4, "name", {  // configurable 속성이 false이기에 수정 불가
    writable : true
});
