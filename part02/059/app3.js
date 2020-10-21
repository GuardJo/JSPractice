/**
 * 다른 모듈에서 가져온 값들은 복제되는 것이 아니라
 * 이름과 연결된 그 자체를 가리킴
 * 그렇기에 value값도 증가된 상태로 출력이 됨
 */
import {value} from './value.js';

console.log(value);

setTimeout(() => {
    console.log(value);
}, 2000);