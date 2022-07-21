/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie = true;

// 영화 볼거니?
let goingToWatchMovie = false;

// if (didWatchMovie) {
//   console.log("Yes");
// } else if (goingToWatchMovie) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }


// if 문(statement)

// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자
// didWatchMovie 조건에 따른 처리
let message = didWatchMovie ? console.log("Yes") : console.log("No");

// 멀티 조건부 연산자 식
// didWatchMovie, goingToWatchMovie 멀티 조건에 따른 처리
let message1 = didWatchMovie ? console.log("Yes") : 
goingToWatchMovie ? console.log("Yes") : 
console.log("No");