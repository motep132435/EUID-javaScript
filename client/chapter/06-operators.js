/* ---------------------------------------------------------------------- */
/* Operators                                                              */
/* ---------------------------------------------------------------------- */


// 연산자(演算子): 연산을 표시하기 위한 기호
// 피연산자(被演算子): 처리 대상

// ESLint `no-undef` 오류 해결을 위해
// 전역 객체의 demoForm을 단언(명시)
// const demoForm =  globalThis.demoForm;

// 또는 아래와 같이 ESLint 검사 비활성화
/* eslint-disable no-undef */


const demoForm = globalThis.demoForm; // const { demoForm } = globalThis;
// 단항 연산자 (피연산자 갯수 1)
let unary = +"str";
// console.log(unary, typeof unary);

// 이항 연산자 (피연산자 갯수 2)
let abnormal = 101 + 0.009;
// console.log(abnormal);

// 삼항 연산자 (피연산자 갯수 3)
/* eslint-disable no-constant-condition */
// eslint-disable-next-line
let ternary = Math.random() > 0.5 ? "this is truthy": "this is falsy" ;
// console.log(ternary);

// 산술 연산자: 덧셈
let addition = 1 + -2;

// 산술 연산자: 뺄셈
let subtraction = 1 - 2;

// 산술 연산자: 곱셈
let multiplication = 1 * 2 * 10 * -1;

// 산술 연산자: 나눗셈
let division = 10 / 2; // 5

// 산술 연산자: 나머지
let remainder = 10 % 2;

// 산술 연산자: 거듭 제곱
let power = 2 ** 8;


// JavaScript 연산자는 피연산자를 적절한 타입(유형)으로 강제 변환합니다.
let coercionTypeConversion = '9' * '3';

// 대부분의 연산자는 기본 값으로만 작동합니다.
let onlyWorkDefaultValues = [1,2,3] + [4,5,6];
// [1,2,3].toString + [4,5,6].toString 으로 변환 = "1,2,34,5,6";
// Array.prototype.concat
// [1,2,3].concat([4,5,6]);     [1,2,3,4,5,6]


// 연산자 우선 순위
// 단항(+,-) > 거듭제곱(**) > 곱셈(*) > 나눗셈(/) > 덧셈(+) > 뺄셈(-) > 할당(=)
// const calc = 10 * 3 + -9;

// 선,후 증감 연산자
// ++, --

// let count = 100;
// let value1 = count--;
// let value2 = ++count;

// count++;

// console.log(value2);
// console.log(value1);


// 아래 코드를 읽기 쉽도록 변경합니다.
// 그리고 연산자 우선 순위에 따라 연산 과정을 유추해보세요.

let count = 10;
let total = (count % 4) * (count /= 2) + count ** 3; // ?

{/*let total = count % 4;
count = count / 2;
total = total + count;
count = count * count * count;
total = total + count;*/}

// 2 * 5 + 125 === 135





