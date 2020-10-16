/**
 * 자바스크립트에서 생성자함수로 생성된 객체는 
 * 그 생성자 함수의 프로토타입객체를 상속합니다.
 * 즉, 모든 인스턴스들은 해당 생성자 함수의 프로토타입 객체의 속성과 메소드들을 사용할 수 있습니다.
 */

 function Storage() {
     this.dataStore = {};
 }
Storage.prototype.put = function(key, data) {   // Storage의 prototype객체에 put 메소드 추가
    this.dataStore[key] = data; 
}
Storage.prototype.getData = function(key) {     // Storage의 prototype객체에 getData 메소드 추가
    return this.dataStore[key];
}

const productStorage = new Storage();
productStorage.put('id001', {name : 'keyboard', price : 2000});
console.log(productStorage.getData('id001'));

function RemovableStorage() {
    Storage.call(this);     // Storage에서 정의한 대로 dataStore가 추가됨
}
RemovableStorage.prototype = Object.create(Storage.prototype);      // RemovableStorage의 prototype을 Storage의 prototype을 상속하고 있는 객체로 할당함
RemovableStorage.prototype.removeAll = function() {     // RemovableStorage의 prototype객체에 removeAll메소드 추가
    this.dataStore = {};
}

const productStorage2 = new RemovableStorage();
productStorage2.put('id001', {name : 'keyboard', price : 2000});
productStorage2.removeAll();
const item2 = productStorage2.getData('id001');
console.log(item2);