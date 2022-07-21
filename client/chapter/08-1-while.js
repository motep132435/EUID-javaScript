/* ---------------------------------------------------------------------- */
/* Loop                                                                   */
/* ---------------------------------------------------------------------- */

// Array (Special Object)
// - has "length" property
// - property (key: string type) indexing(0, 1, 2, 3, ...)
// - value (any type)
// collection of value

const frontEndDev = [
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
  'React Router'
];

/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

// console.log(frontEndDev[0]);
// console.log(frontEndDev[1]);
// console.log(frontEndDev[2]);
// console.log(frontEndDev[3]);
// console.log(frontEndDev[4]);
// console.log(frontEndDev[5]);


/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */


// while 문
// let i = 0;
// while (i < frontEndDev.length) {
//   console.log(frontEndDev[i]);
//   i += 1;
// }

// while 역방향
// let lastIndex = frontEndDev.length - 1;
// while (lastIndex >= 0) { //
//   let value = frontEndDev[lastIndex];
//   lastIndex = lastIndex - 1;
//   console.log(value);
// }

// lastIndex 변수를 사용하지 않고 frontEndDev 객체만을 사용하여 순환처리해보기.
{/*let i = 0;

while (frontEndDev[i]) {
  console.log(frontEndDev[i])
  ++i; // 8이면 undefined으로 while문 탈출
}*/}

// 변수를 사용하지 않고 frontEndDev 객체만을 사용하여 역방향 순환처리해보기.
const copyedFrontEndDev = frontEndDev.slice(); // 이런식으로 원본 파괴하지 않고 복사해서 사용

{/*while (frontEndDev.length /~ 8 ~/) {
  console.log(frontEndDev.pop());
  console.log(fontEndDev)
}*/}

// 성능 진단 : 순환 vs. 역숙환
// 순방향 순환보다 역방향 순환이 더 빠르다.






// do ~ while 문


// for 문


/* 객체 순환 -------------------------------------------------------------- */


// const javaScript = {
//   creator: 'Brendan Eich',
//   castIndex reateAt: '1995.05',
//   standardName: 'ECMAScript',
//   currentVersion: 2022,
// };


// for ~ in 문


// for ~ of 문
// array → object 변환
