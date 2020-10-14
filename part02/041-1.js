let value = "바깥값";

if (true) {
    /**
     * if 블록 안에서 let으로 변수를 정의 하였기 때문에
     * value는 if블록문 안에 위쪽으로 호이스팅 되어
     * 실제 let으로 선언이 이루어지기 전까지 일시적으로 접근이 불가
     * 그렇기에 "바깥값"을 받아오지 못함
     */
    console.log(value);
    let value = "안쪽 값";  
}