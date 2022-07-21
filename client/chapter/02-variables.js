/* --------------------------------------------------------------------- */
/* Variables                                                             */
/* --------------------------------------------------------------------- */


/* 다음 내용을 분석한 후, 프로그래밍 할 수 있도록 변수와 상수를 작성해봅니다. ----------- */

// - 갯수 별 상품 가격 계산하기
// - 구매 제품 가격의 총 합
// - 1년 기준 일자 수
// - 구매 결제 여부
// - 구매 결제 내역
// - 브랜드 접두사
// - 오늘의 운세
// - 상품 정보


/* variables ----------------------------------------------------------- */
let calcProductPriceByNumber; // 갯수 별 상품 가격 계산하기
// const calcProductPrice(넘버는 여기에 올 수 있으니 이름에서 삭제)
// const calcProductPrice = function() {
//   return // 값
// }

let whetherThePurchaseIsPaid; // 구매 결제 여부
let purchasePaymentHistory; // 구매 결제 내역
let getTodaysFortune; // 오늘의 운세


let calcOfPriceQuantity;
/* constant variables -------------------------------------------------- */
const theSumOfThePricesOfThePurchasedProducts; // 구매 제품 가격의 총 합
let totalPrice;

const getNumberOfdaysPerYear; // 1년 기준 일자 수
const DAYS_PER_YEAR = 365;



const brandPrefix; // 브랜드 접두사
const productInformation; // 상품 정보

갯수 별 상품 가격 계산하기


// 클라이언트 <--> 서버
// 요청     <--> 응답
// 요청 상태(states)

// pending 아무것도 안 함
// loading 요청(로딩 중, 대기)
// fulfiled, resolved 응답(성공)
// rejected 응답(실패)

// Redux 

const PEDNING = "api/pending";
const LOADING = "api/loading";
const FULFILLED = "api/resolved";
const REJECTED = "api/rejected"; 