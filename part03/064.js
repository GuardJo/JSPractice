/**
 * Array.isArray
 * 배열 자료형 여부 반환
 */
function callRoll(students) {
    if (!Array.isArray(students)) {
        return;
    }
    students.forEach((student) => {
        console.log(`Are you here, ${student}`);
    });
}

const students = ['John', 'Ali', 'Murry', 'Toby'];
callRoll(students);