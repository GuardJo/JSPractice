/**
 * ES6부터 class 키워드를 통해 클래스를 정의 할 수 있다.
 * 특정 클래스를 통해 만들어진 객체를 해당 클래스의 인스턴스라고 한다.
 */

 class Cart {
     constructor() {    // class안에는 생성자함수를 만들어줘야 한다.
         this.store = {};
     }

     addProduct(product) {
         this.store[product.id] = product;
     }

     getProduct(id) {
         return this.store[id];
     }
 }
 
 const cart1 = new Cart();
 cart1.addProduct({id : 1, name : 'labtop'});
 console.log(cart1.store);

 const p = cart1.getProduct(1);
 console.log(p);