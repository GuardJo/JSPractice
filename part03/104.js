/**
 * Object.freeze(Object)
 * Object 객체를 동결합니다.
 * 다른 속성을 추가하거나 제거할 수 없습니다.
 */
let obj = {};
obj.title = "IDOL";
Object.freeze(obj);
obj.title = "Euphoria";

console.log(obj);

const changeUnitNum = (obj, num) => {
    "use strict";

    while (true) {
        console.log(obj);

        if (obj.age >= num) {
            obj = Object.freeze(obj);
        }
        try {
            obj.age += 1;
        } catch(e) {
            console.log("error");
            break;
        }
    };
};

let profile = {name : "지연", age : 25};
changeUnitNum(profile, 30);