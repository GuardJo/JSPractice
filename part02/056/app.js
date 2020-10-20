/**
 * ES6의 모듈은 자바스크립트 코드를 담고 있는 하나의 파일임
 * export 키워드를 이용하여 모듈 내의 특정 코들를 외부에서 사용할 수 있게 함
 * import 키워드를 이용하여 export한 코드들을 가지고 올 수 있음
 */

import {hello} from './hello.js';

hello('es6 module');