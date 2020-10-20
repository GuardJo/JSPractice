/**
 * 일반적인 메소드는 해당 클래스의 인스턴스를 통해 호출
 * 정적 메소드는 클래스를 통해 직접 호출함
 */

class Product {
    static build(name, price) {
        const id = Math.floor(Math.random() * 1000);
        return new Product(id, name, price);
    }

    static getTaxPrice(product) {
        return (product.price * 0.1) + product.price;
    }

    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class DeposableProduct extends Product {
    depose() {
        this.depose = true;
    }
}

const gum = Product.build('껌', 1000);
console.log(gum);

// const test2 = gum.build("test2", 2000); <-- 정적메소드이기 때문에 이렇게 인스턴스로는 호출 불가

const clothes = new DeposableProduct(1, '옷', 2000);
const taxPrice = DeposableProduct.getTaxPrice(clothes);
console.log(taxPrice);