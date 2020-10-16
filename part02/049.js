/**
 * 생성자함수 (Constructor)
 * new 키워드를 사용하여 함수를 호출함
 * return문 없이 새로운 객체가 반환됨
 */

 function Teacher(name, age, subject) {
     this.name = name;
     this.age = age;
     this.subject = subject;
     this.teach = function(student) {
         console.log(`${student}에게 ${this.subject}를 가르칩니다.`);
     };
 };

 const jay = new Teacher('jay', 300, 'Javascript');
 console.log(jay);
 jay.teach("bbo");

 console.log(jay.constructor);
 console.log(jay instanceof Teacher);

 const jay2 = Teacher('jay', 10, 'Javascript')  // new 키워드 생략시 일반 함수로 선언됨
 console.log(jay2); // 일반함수라 return이 없어서 정의되지 않음
 console.log(age);  // 정의되지 않았기에 전역 스코프에서 age를 가져옴
