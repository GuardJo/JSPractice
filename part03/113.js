/**
 * Date.getFullYear() : 연도 반환
 * Date.getMonth() : 월 반환
 * Date.getDate() : 일 반환
 */
Date.prototype.yyyymmdd = function() {
    const yyyy = this.getFullYear();
    const mm = this.getMonth() < 9 ? `0${this.getMonth() + 1}` : this.getMonth() + 1;      // getMonth()는 0부터 11월까지로 출력되기 때문
    const dd = this.getDate() < 10 ? `0${this.getDate()}` : this.getDate();
    return '' + yyyy + mm + dd;
};

const date = new Date();
console.log(date.yyyymmdd());
console.log(date.getMonth());
console.log(date.__proto__);
