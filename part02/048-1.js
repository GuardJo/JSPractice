/**
 * 프로토타입 객체 생성
 * 만약 프로토타입을 할당하지 않을 경우
 * 기본값으로 Object.prototype 을 할당함
 */

const studentProto = {
    gainExp : function() {
        this.exp++;
    }
}

const harin = {
    name : 'harin',
    age : 10,
    exp : 0,
    __proto__ : studentProto    // 프로토타입을 참조
};

const bbo = {
    name : 'bbo',
    age : 20, 
    exp : 10,
    __proto__ : studentProto    // 프로토타입을 참조
};

bbo.gainExp();
harin.gainExp();
harin.gainExp();
console.log(harin);
console.log(bbo);