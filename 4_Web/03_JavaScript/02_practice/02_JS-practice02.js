console.log("========== 실습1 ==========");

let age = parseInt(prompt("나이를 입력해주세요."));

if (isNaN(age) || age < 0) {
    console.log("올바른 나이를 입력해주세요.");
} else if (age >= 20) {
    console.log("귀하는 성인 입니다.");
} else if (age >= 17) {
    console.log("귀하는 고등어네요 ^^");
} else if (age >= 14) {
    console.log("귀하는 fresh한 중학색 이군요~");
} else if (age >= 8) {
    console.log("귀하는 초등학생 이군요. 열심히 노세요");
} else {
    console.log("귀하는 유아군요! 열심히 성장하세요.");
}

console.log(" ");

console.log("========== 실습2 ==========");

let nowTime = new Date().getHours();

nowTime >= 12 ? console.log("지금은 오후군요! 오늘하루 힘내세요.") : console.log("상쾌한 오전이네요! 화이팅입니다.");

console.log(" ");

console.log("========== 실습3 ==========");

for (let i = 1; i <= 10000; i++) {
    if (i % 13 === 0 && i % 2 === 1) {
        console.log(i);
    }
}

console.log(" ");

console.log("========== 실습4 ==========");

let myNumber = parseInt(prompt("숫자를 입력해주세요."));

console.log(`1 ~ ${myNumber}의 숫자 중 13의 배수이면서 홀수인 숫자 구하기`);

for (let i = 1; i <= myNumber; i++) {
    if (i % 13 === 0 && i % 2 === 1) {
        console.log(i);
    }
}

console.log(" ");

console.log("========== 실습5 ==========");

for (let i = 1; i < 10; i++) {
    console.log(`=== ${i} 단 ===`)
    for (let j = 1; j < 10; j++) {
        console.log(`${i} × ${j} = ${i * j}`);
    }
    console.log(" ");
}

console.log(" ");

console.log("========== 실습6 ==========");

let myNum = 0; // 합
let count = 0; // for 문에서 i 역할 (반복 횟수)

while (count <= 100) {
    if (count % 2 === 0 || count % 5 === 0) {
        myNum += count;
    }
    count++;
}

console.log("0 ~ 100까지의 합: ", myNum);

console.log(" ");

console.log("========== 실습7 ==========");

let numbers = [];
for (i = 0; i <= 100; i++) {
    numbers.push(i);
}

console.log(" ");

console.log("== 배열의 합 (for 문) ==");
let sum1 = 0
for (i = 0; i < 101; i++) {
    sum1 += i
}
console.log(sum1);

console.log(" ");

console.log("== 배열의 합 (for of 문) ==");
let sum2 = 0;
for (let number of numbers) {
    sum2 += number;
}
console.log(sum2);

console.log(" ");

console.log("== 배열의 합 (forEach 문) ==");
let sum3 = 0;
numbers.forEach((n) => sum3 += n);
console.log(sum3);

console.log(" ");

console.log("== 배열의 합 (reduce) ==");
let sum4 = numbers.reduce((acc, cur) => acc + cur);
console.log(sum4);

console.log(" ");

console.log("========== 실습8 ==========");

// 2. 배열끼리 비교 (filter() 메서드 사용)
let fruit2 = ["사과", "딸기", "파인애플", "수박", "참외", "오렌지", "자두", "망고"];
let fruit3 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];

// 2-1. 두 배열에서 동일한 요소만 가지는 배열 생성
let same = fruit2.filter ((fruit) => fruit3.includes(fruit));
console.log("same 배열 출력: ", same);

// 2-1. 두 배열에서 다른 요소만 가지는 배열 생성
let diff = fruit2.filter ((fruit) => !fruit3.includes(fruit));
console.log("diff 배열 출력: ", diff);

console.log(" ");

console.log("========== 실습9 ==========");
// 3. 평일 / 주말 구분
// JS에 내장된 Date 객체 활용
// Date.getDay(): 요일별로 0 ~ 6 (일 ~ 토)로 숫자 반환
let now = new Date();
console.log(now.getDay()); 

let day = new Date().getDay();

// switch 문 사용
switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("오늘은 평일이군요.... 힘내요");
        break;
    case 0:
    case 6:
        console.log("오늘은 주말!!!!!! 야호");
        break;
    default:
        console.log("잘못 입력되어있어요...");
        break;
}

console.log(" ");

// if - else if
if (day === 0) {
    console.log("오늘은 주말!!!!!! 야호");
} else if (day === 1) {
    console.log("오늘은 평일이군요.... 힘내요");
} else if (day === 2) {
    console.log("오늘은 평일이군요.... 힘내요");
} else if (day === 3) {
    console.log("오늘은 평일이군요.... 힘내요");
} else if (day === 4) {
    console.log("오늘은 평일이군요.... 힘내요");
} else if (day === 5) {
    console.log("오늘은 평일이군요.... 힘내요");
} else if (day === 6) {
    console.log("오늘은 주말!!!!!! 야호");
}

console.log(" ");

// if - else
if (
    day === 5 ||
    day === 1 ||
    day === 2 ||
    day === 3 ||
    day === 4
) {
console.log("오늘은 평일이군요.... 힘내요");
} else {
    console.log("오늘은 주말!!!!!! 야호");
}

console.log(" ");

// 삼항연산자
let today = day === 0 || day === 6 ? "오늘은 주말!!!!!! 야호" : "오늘은 평일이군요.... 힘내요";
console.log(today);

console.log(" ");

console.log("========== 실습10 ==========");
// 4. 0 ~ 10 사이의 랜덤 숫자 출력
// Math.random(): 0 이상 1미만의 난수 생성
// Math.floor(): 양수 기준으로는 소수점 버림, 음수 기준으로는 더 작은 음수로 소수점 사라짐
//      floor 즉, 바닥으로 내린다는것은 값을 줄인다 그래서 음수에서는 더 작은 음수값으로 반환
console.log(Math.floor(Math.random() * 11));

// 0.2 * 10 = 2
// 0.6354 * 10 = 6.354
// 즉, Math.random() * 10의 결과는 0이상 10미만 결과 출력
// 하지만 실습 조건은 10을 포함해야 함
// Math.random() * 11
// 0 * 11 = 0
// 0.966 * 11 = 10.626
// 0.999999999 * 11 = 10.999999989
// 무조건 11 미만 숫자가 나옴
// 그리고 그 결과를 Math.floor()하면 0~10 사이 숫자가 반환됨