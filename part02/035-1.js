// 예외처리 - try, catch, finally

function checkNumber(val) {
    if (typeof val !== 'number') throw '유효하지 않은 값입니다.';
    console.log("숫자형 값으로 확인되었습니다.");
}

try {
    checkNumber(100);
    checkNumber("wrong type");
} catch (e) {
    console.log(`에러가 발생 하였습니다 -> ${e}`);
} finally {
    console.log("완료");
}