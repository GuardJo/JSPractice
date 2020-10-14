// 기본 매개변수 할당

function drawChart(width = 200, height = 400) { // 기본 매개 변수 할당
    console.log(`${width} x ${height} 차트를 그립니다.`);
}

drawChart(100); // height 값이 비었으므로 기본 매개변수 출력
drawChart(undefined, 300);  // width 값이 비었으므로 기본 매개변수 출력
drawChart();    // width 와 height 값이 비었으므로 기본 매개변수 출력

function drawChart2(width = 200, height = width/2) {
    console.log(`${width} x ${height} 차트를 그려봅니다.`);
}

drawChart2(300);
drawChart2(undefined, 1);
drawChart2();