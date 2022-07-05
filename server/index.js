// JavaScript Runtime Env.
// Server Env.

// 모듈(module) 개념(concept)
// 코드 조각
// 컴포넌트(Component)
// 함수 (Function) 도 같은 개념

// 설치한 패키지(package) - live-server
// 모듈(module)을 불러와 사용
// 모듈 로드(load)
// Node.js 환경에서 모듈을 불러오는 방식
// CommonJS 진영의 모듈 사용 방법
// 모듈 내보내기 (module.exports, exports.모듈이름)
// 모듈 불러오기 (require 함수)

// 상수 이름 작명 규칙
// 언제 대문자만 사옹하는가?
// const PI = 3.141592;
// const API_ENDPOINT = "https://randomuser.me.api"

// 언제 소문자를 포함한 카멜케이스, 타이틀케이스 등을 사용하는가?
// const server = require("live-server/index.js")
// const value = getValue();

// console.log(global.process.env.LANG);

// Linting (코드 검사, 오류 확인, 자동 포멧팅) -ESLint
// Formatting (코드 일관성 유지) - Prettier

const server = require("live-server/index.js"); // live-server module을 반환. index.js 생략해도 됨.

const params = {
  host: "localhost",
  port: 3000,

  root: "client",
  open: false,
  cors: true,
};
server.start(params);
