/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && value; // && 둘다 참이어야 참  // false
// console.log(AandB);


// 논리합(또는) 연산자
let AorB = value || a; // || (파이프) 둘중 하나만 참이어도 참 // 10;

// 부정 연산자
let reverseValue = !value; // true;


// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let c = "에이";
let d = 0;
let whichFalsy = c && d ;
console.log(whichFalsy);

// 첫번째 Truthy를 찾는 연산 (||)
let i = null;
let j = undefined;
let whichTruthy = i || j;
console.log(whichTruthy);