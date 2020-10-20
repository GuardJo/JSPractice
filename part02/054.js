/**
 * this는 함수가 어떻게 호출되는지에 따라 동적으로 결정됨
 * 전역에서 사용할 수도 있고 함수 안에서도 사용가능
 * 함수내에서 사용 시, 객체 안에 메소드로 정의될 수도 있고
 * 생성자 함수로 사용할 수도 있고, 특정 로직을 계산하여 값을
 * 반환하는 목적으로 사용할 수 도 있음
 * class 안에서 사용되는 this는 생성자 함수와 동일
 */

this.valueA = 'a';  // 브라우저 환경에서 this를 전역에서 사용하면 전역 객체인 Window 객체를 가리킴
console.log(valueA);
valueB = 'b';
console.log(this.valueB);

function checkThis() {
    console.log(this);
}
function checkThis2() {
    "use strict";   // 엄격한 모드 : 자바스크립트 코드를 좀 더 안전하고 엄격하게 작성하도록 도와줌 (전역으로 모드를 지정하거나, 함수단위로도 지정가능)
    console.log(this);
}
checkThis();
checkThis2();

function Product(name, price) {
    this.name = name;
    this.price = price;
}
const product1 = Product('가방', 2000);     // new 키워드 없이 호출되면 이 때 this는 전역 객체인 Window를 가리킴
console.log(window.name);
console.log(window.price);

const product2 = {
    name : '가방2',
    price : 3000,
    getVAT() {
        return this.price / 10;     // 객체 내의 정의된 함수인 메소드 안에서 this를 사용하고, 호출하면 this는 그 객체를 가리킴
    }
}
const valueOfProduct2 = product2.getVAT();
console.log(valueOfProduct2);

const calVAT = product2.getVAT;
const VAT2 = calVAT();  // 메소드를 다른 변수에 저장하고 그 변수를 통해 호출하면 일반적인 함수 호출이 되어 this는 전역 객체를 가리킴
console.log(VAT2);

const newCalVAT = calVAT.bind(product2);    // this는 bind 메소드를 통해 전달한 인자값으로 변경 가능 (this 외에도 call, apply 등이 있음)
const VAT3 = newCalVAT();
console.log(VAT3);

const counter1 = {
    count : 0,
    addAfter1Sec() {
        setTimeout(function() {
            this.count += 1;    // 메소드 안에서 중첩 함수로 함숙 작성 됐을 때 내부 함수의 this는 전역변수를 가리킴
            console.log(this.count);
        }, 1000)
    }
};
counter1.addAfter1Sec();

const counter2 = {
    count : 0,
    addAfter1Sec() {
        setTimeout(() => {      // 화살표 함수에서 this는 부모환경의 this를 가리킴
            this.count += 1;    // 화살표함수에서는 일반적인 this와 다르게 코드 작성시 정적으로 결정
            console.log(this.count);    // 그렇기에 bind를 통한 변경이 불가
        }, 1000)
    }
};
counter2.addAfter1Sec();