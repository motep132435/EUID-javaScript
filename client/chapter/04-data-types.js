/* ---------------------------------------------------------------------- */
/* Data Types                                                             */
/* ---------------------------------------------------------------------- */


/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// primitives(immutable) 원시 데이터 타입. 불변.

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
// null
// 2. 값이 할당되지 않은 상태
// undefined
// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)

// 4. 정수, 부동 소수점 숫자(길이 제약)

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
// 98080n 숫자 뒤에 n을 붙이면 big int. 큰 숫자도 표기 가능
// typeof(9808n) -> bigint
// typeof(9808) -> Number

// 6. 참(true, yes) 또는 거짓(false, no)
// boolean
// 8. 고유한 식별자(unique identifier)
// symbol


// object tpye(mmutable) 변할 수 있음. 

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
// object (plain object, array, function)


/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()  / typeof () 

// 언어 상, 오류
function typeIs(dataType) {
  return Object.prototype.toString.call(dataType).slice(8,-1).toLowerCase();
} 