/**
 * 문자열.length
 * String 객체에 미리 정의되어 있는 기본 속성
 * 문자열의 길이 반환
 */
const arr = ['short', 'long sentence, it is not appropriate'];

arr.forEach(str => {
    if (str.length < 10) {
        console.log(str);
    }
});
