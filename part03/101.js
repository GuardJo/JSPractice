/**
 * Object.keys(Object)
 * 객체 내의 key들만 추출하여 배열로 반환
 */

 const obj = {
     movie : "Sunny",
     music : "Like Sugar",
     style : "Retro",
     price : Infinity
 };

 const arr = Object.keys(obj);
 console.log(arr);