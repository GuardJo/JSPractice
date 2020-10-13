// 심볼형 학습

const symbol = Symbol();
const hello = Symbol("hello");

console.log(Number(3) === Number(3));
console.log(Symbol('Symbol') === Symbol('Symbol'));
console.log(Symbol() === Symbol());
console.log(typeof Symbol());

const nationility = Symbol('nationility');
const user = {
    name : 'jay'
};
user[nationility] = 'korean';
console.log(user[nationility]);

for (let key in user) {
    console.log(key);
}


// 심볼은 그냥 가져올 수 없음.
console.log(Object.keys(user));
console.log(Object.getOwnPropertyNames(user));
console.log(JSON.stringify(user));

const symbolProperties = Object.getOwnPropertySymbols(user);
console.log(symbolProperties);
console.log(user[symbolProperties[0]]);