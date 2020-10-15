/**
 * get : 속성에 접근 할 때 호출
 * set : 속성에 값을 대입할 때 호출
 * 
 * 속성 이름에 _를 붙이는 것은 암묵적으로 비공개(Private) 속성임을 나타냅니다.
 * 자바스크립트는 속성 접근 제한자가 없기 때문에 이름 규칙을 활용합니다.
 */

 let user = {};
 Object.defineProperty(user, "age", {
     get : function() {
         return this._age;
     },
     set : function(age) {
        if (age < 0) {
            console.log("0보다 작은 값은 올 수 없습니다.");
        }
        else {
            this._age = age;
        }
     },
     enumerable : true
 });
 user.age = 10;
 console.log(user.age);
 user.age = -1;

 let user2 = {
     get name() {
         return this._name
     },
     set name(val) {
         if (val.length < 3) {
             console.log("3자 이상이어야 합니다.");
         }
         else {
             this._name = val;
         }
     }
 }
 user2.name = 'harin';
 console.log(user2.name);
 user2.name = 'ha';
