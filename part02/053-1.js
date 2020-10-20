/**
 * 생성자함수의 prototype 기반 상속과는 다르게 
 * 클래스로 상속 할 때에는 
 * 정적 메소드 또한 상속됨
 */

class ProductWithCode {
    static get CODE_PREFIX() {
        return "PRODUCT-";
    }

    constructor(id) {
        this.id;
        this.code = ProductWithCode.CODE_PREFIX + id;
    }
}

const product1 = new ProductWithCode('001');
console.log(ProductWithCode.CODE_PREFIX);
console.log(product1.code);