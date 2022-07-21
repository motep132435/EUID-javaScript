'use strict';

/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number -> string
// let year = 2020;
// let convertedStringType = typeof (year + "");

// console.log(convertendStringType);

// undefined, null
// toString()은 메서드에서만 사용할 수 있다.

// boolean 을 문자열로 변환
// true.toString();
// true + ""
// String(true)

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undeinfed

// null

// boolean

// string "101px"
// window.parseFloat(),
// window.parseInt() api를 사용하여 "px" 등의 문자열을 제거하고 숫자만 뱉어낼 수 있다.

// numeric string "101"
// Number();
// 스트링 앞에 +기호 붙이면 넘버타입으로 변환.

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들

// 방법1. Boolean(null) = false
// 방법2. !!dataType = boolean
