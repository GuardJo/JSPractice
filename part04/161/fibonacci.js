/**
 * 피보나치 계산
 */
function fibonacci(num) {
    if (num <= 1) {
        return 1;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
}

onmessage = function(e) {
    const num = e.data.num;
    console.log('메인 스크립트에서 전달받은 메시지', e.data);
    if (num === null || num == "") {
        throw new Error("It is Not Numeric");
    }
    const result = fibonacci(num);
    postMessage(result);
}