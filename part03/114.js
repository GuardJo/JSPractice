/**
 * Date.UTC(...)
 * 매개변수로 지정된 날짜, 시간 보를 UTC 기준의 밀리초 시간으로 반환
 */
const date = new Date();
const dateUTC = Date.UTC(
    date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),
    date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(),
    date.getUTCMilliseconds()
);

console.log(new Date(dateUTC));