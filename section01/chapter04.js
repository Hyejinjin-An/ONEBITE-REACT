console.log("chapter4");

// 1. 변수
let age = 27;
// console.log(age);

age = 30;
// console.log(age);


// 2. 상수 (const)
// 한 번 정해진 값은 다시 변경할 수 없다.
// 반드시 초기값 설정이 필요.
const birth = "";

// 3. 변수 명명규칙(네이밍 규칙)
// 3-1. 변수명에는 $, _ 제외한 기호는 사용할 수 없다.
let $_name;

// 3-2. 숫자로 시작할 수 없다.
let $2name;

// 3-3. 예약어를 사용할 수 없다.
// 예약어 : let, const 등..

// 4. 변수 명명 가이드
// 누가봐도 이해할 수 있는 변수명으로 사용(협업)
let a = 1;
let b = 1;
let c = a - b;
console.log(c);

let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;