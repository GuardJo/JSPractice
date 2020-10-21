import { hello } from '../057/hello.js';
/**
 * * 키워드를 통해 모듈 전체를 가져올 수 있음
 * sideeffect의 경우 해당 모듈 실행만 진행할 뿐 가져오진 못함
 * 하지만 sideeffect내의 함수인 hello()가 전역객체에 만들어졌기 때문에 
 * 사용할 수 있음
 */

import * as add from './add.js';
import './sideeffect.js';

console.log(add.version);
const added = add.default(1, 2);
console.log(added);

hello('harin');