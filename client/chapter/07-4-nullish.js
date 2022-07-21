/* ---------------------------------------------------------------------- */
/* Nullish Coalescing Operator                                            */
/* ---------------------------------------------------------------------- */

let emailAddress = "lee@n.com";
let receivedEmailAddress;

// if (emailAddress === undefined || emailAddress === null) {
//   receivedEmailAddress = 'user@company.io';
// } else {
//   receivedEmailAddress = emailAddress;
// }

// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.

// receivedEmailAddress = (emailAddress === undefined || emailAddress === null) ?
// 'user@company.io' : emailAddress;

// receivedEmailAddress = emailAddress ?? 'user@company.io';
// receivedEmailAddress = emailAddress || 'user@company.io';
// console.log(receivedEmailAddress);

function defaultArg(wantValue, initialValue) {
  return wantValue || initialValue;
}



/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환

// 실무에 사용한다면 사용자의 입력값이 Truthy, Falsy 여부와는 관계 없이 첫번째 정의된 값을 반환하는 ?? 를 사용한다.