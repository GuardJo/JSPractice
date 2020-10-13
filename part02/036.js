/*
argument (전달 인자) : 함수가 호출 될 때 전달 되는 값.
매개변수(parameter)와 무관하게 개수에 상관 없이 전달 가능
배열의 length 함수를 사용할 수 있으나 그 외에는 사용 불가, 즉 배열은 아님
*/

function sum() {
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }

    console.log(arguments instanceof Array);    // argument가 array인지 여부 확인
    return total;
}

var sumOf1to3 = sum(1, 2, 3);
console.log(sumOf1to3);

function testArg() {
    var newArr = Array.prototype.slice.call(arguments); // 배열로 변환
    console.log(newArr);
    console.log(newArr.indexOf('b'));
    console.log(arguments.indexOf('b')); throw "Argument is not Array";
}

try {
    testArg('a', 'b');
} catch(e) {
    console.log("Error : " + e);
}

