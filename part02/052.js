/**
 * 클래스 상속은 extends 키워드 사용
 * 자바스크립트는 새로운 기능 추가시 하위 버전의 코드로 변환이 가능해야함
 * 그래서 ES6의 클래스는 생성자 함수로, 
 * extend키워드의 상속은 prototype 기반 상속코드로 변경 할 수 있음
 * 자바스크립트는 여전히 prototype기반임
 */

 class Chart {
     constructor(width = 100 , height = 100) {
         this.width = width;
         this.height = height;
     }

     drawLine() {
         console.log("draw Line");
     }
 }

 class BarChart extends Chart {
     constructor(width, height) {
         super(width, height);  // super는 부모의 생성자 함수를 가리킴
     }

     draw() {
         this.drawLine();
         console.log(`draw ${this.width} x ${this.height} barChart`);
     }
 }

 const barchart1 = new BarChart(undefined, 300);
 barchart1.draw();