'use strict';

/* ---------------------------------------------------------------------- */
/* Strict Mode                                                            */
/* ---------------------------------------------------------------------- */

// 엄격 모드를 사용한 코드와 그렇지 않은 코드를 비교해봅니다.

// #1
let aFamousLine =
  '부끄러워해야 할 것은 "약자"라는 것이 아니라, "약한 채"로 있다는 점이다!';
console.log(aFamousLine);

// #2 global object
console.log(
  // host env.
  // web
  window,
  this,
  self,
  globalThis
  // node.js
  // global
);
