/* eslint-disable no-unused-vars */
/* ---------------------------------------------------------------------- */
/* Switch                                                                 */
/* ---------------------------------------------------------------------- */

// single (const|let|var) 패턴
const MORNING    = '아침',
      LUNCH      = '점심',
      DINNER     = '저녁',
      NIGHT      = '밤',
      LATE_NIGHT = '심야',
		  DAWN       = '새벽';

// let thisTime = "점심";
// switch (thisTime) {
//   case "아침": 
//     console.log("뉴스 기사 글을 읽는다.");
//     break;

//   case "점심":
//     console.log("자주 가는 식당에 가서 식사를 한다.");
//     break;

//   case "저녁":
//     console.log("동네 한바퀴를 조깅한다.");
//     break;

//   case "밤":
//     console.log("친구에게 전화를 걸어 수다를 떤다.");
//     break;

//   case "심야":
//   case "새벽":
//     console.log("한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.");
//     break;
    
//   default: 
//     console.log("이것은 모든 케이스에 해당되지 않을 때");
// }


/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'


/* switch문 → if문 변환 --------------------------------------------------- */
// let thisTime = DINNER;

// if (thisTime === MORNING) {
//   console.log("뉴스 기사 글을 읽는다.");
// } else if (thisTime === LUNCH) {
//   console.log("자주 가는 식당에 가서 식사를 한다.");
// } else if (thisTime === DINNER) {
//   console.log("동네 한바퀴를 조깅한다.");
// } else if (thisTime === NIGHT) {
//   console.log("친구에게 전화를 걸어 수다를 떤다.");
// } else if (thisTime === LATE_NIGHT || thisTime === DAWN) {
//   console.log("한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.");
// } else {
//   console.log("이것은 모든 케이스에 해당되지 않을 때");
// }

/* switch vs. if -------------------------------------------------------- */

// 요일 가져오기
// 0 ~ 6
// "일" ~ "토"

function getDayOfWeek(day) {
  
  switch(day) {
    case 0: return "일";
    case 1: return "월";
    case 2: return "화";
    case 3: return "수";
    case 4: return "목";
    case 5: return "금";
    case 6: return "토";
    default:
      throw new TypeError("전달 가능한 값은 0~6 사이 정수가 아닙니다.")
  }
}

function getDayOfWeek1(day) {
  const days = "일 월 화 수 목 금 토".split(" ");
  return days[day];
}

// 주말인지 여부를 반환하는 함수
function isWeekand(day) {
  if (day === 0 || day === 6) {
    console.log("주말입니다");
  } else {
    console.log("주말이 아닙니다");
  }
}

// console.log(getDayOfWeek(6));
// console.log(getDayOfWeek1(3));
// console.log(isWeekand(2));



