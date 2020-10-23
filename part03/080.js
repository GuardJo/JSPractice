/**
 * String.split()
 * 문자열을 배열로 변환
 * 인자가 주어질 경우 해당 인자를 구분자로 문자열을 분리
 */

const capitals = `Prague,Czech Republic
Copenhagen,Denmark
Paris,France
Madrid,Spain
Rome,Italy`;

capitals.split('\n').forEach(s => {
    const capital = s.split(",")[0];
    const country = s.split(",")[1];
    console.log(`${capital} is in ${country}`);
})