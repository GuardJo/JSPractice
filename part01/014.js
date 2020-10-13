// 반복문 for in

var store = {
    snack : 1000,
    flower : 5000,
    beverage : 2000
};

for (var item in store) {
    if (!store.hasOwnProperty(item)) {
        continue;
    }
    console.log(item + " : " + store[item]);
}