/**
 * String.concat() 
 * 문자열을 합친다.
 * 허나 + 연산자를 사용하는 것이 성능상 더 빠르다.
 */

const str1 = "Good afternoon";
const str2 = ", Good evening";
const str3 = ", and Good night!";
const str4 = " - The Truman Show, 1998";
console.log(str1.concat(str2, str3, str4));