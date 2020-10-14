// 스코프 이해

var a = 10; // 전역 단위 스코프
console.log(a);

function print() {
    var b = 20; // 함수 단위 스코프
    if (true) {
        var c = 30; // 함수 단위 스코프에 정의됨
    }
    console.log(c); // c는 if 문안에서 선언되었지만 var로 선언된 변수들은 함수 단위 스코프로, 함수 내에서 사용 가능
}

print();
console.log(b);