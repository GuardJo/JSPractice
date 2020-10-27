/**
 * Object.seal(Object)
 * Object를 밀봉합니다.
 * 속성을 추가/삭제할 수 없으나 기존 속성에 대한 수정은 가능
 * "use strict"가 선언된 스코프에서는 추가/삭제 시 에러가 발생하지만
 * 선언되지 않은 스코프에서는 에러가 발생되지 않으나, 정상적으로 처리되지 않음
 */
"use strict";
const album = {
    name : "LOVE YOURSELF"
};

album.song = "Euphoria";
album.singer = "RM";

console.log(album);
Object.seal(album);

album.comment = "Answer";
album.singer = "JK";
delete album.name;

console.log(album);
