/**
 * Promise 객체
 * 언젠가 완료될 일을 나타냄.
 * 완료되면 하나의 값을 결과로 반환
 * 세 가지 상태 존재
 * Pending : 대기중
 * Fulfilled : 성공적으로 완료됨
 * Rejected : 실패한 상태
 */
function promiseForHomework (mustDo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Doing homework");
            if (mustDo) {
                resolve({
                    result : "homework-result"
                });
            }
            else {
                reject(new Error("Too lazy"));
            }
        }, 3000);
    });
};

const promiseA = promiseForHomework(true);
console.log("promiseA Created");

const promiseB = promiseForHomework();
console.log("promiseB Created");

promiseA.then(v => console.log(v));
promiseB.then(v => console.log(v));
promiseB.catch(e => console.log(e));

