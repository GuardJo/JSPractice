// 함수 나머지 매개변수 활용 (...)

function sum(...args) { // 나머지 매개변수는 매개변수와 같은 곳에서 작성한다.
    var total = 0;
    for (var i = 0; i < args.length; i++) {
        total += args[i];
    }
    console.log(args.indexOf(1));
    console.log(args instanceof Array);     // argument와는 다르게 나머지 매개변수는 배열이다.
    return total;
}

console.log(sum(1, 2, 3));

function sum2(a, b, ...others) {
    var total = a + b;

    for (var i = 0; i < others.length; i++) {
        total += others[i];
    }
    return total;
}

console.log(sum2(1, 2));
console.log(sum2(1, 2, 3, 4));

