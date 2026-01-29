// 1. 산술연산자
const a = 20;
const b = 3;

console.log("======= 산출연산자 =======");
console.log("plus", a + b); // 23
console.log("minus", a - b); // 17
console.log("multiplication", a * b); // 60
console.log("division", a / b); // 6.666666667
console.log("modulus", a % b); // 2
console.log("power", a ** b); // 8000
console.log(" ");
// 2. 비교 연산자

// 2-1. 동등 비교
// - 같다: ==, ===
// - 다르다: !=, !==
console.log("======= 비교연산자 (동등비교) =======");

// ==, !=: 값만 비교, 자료형은 비교 X
console.log("==", 1 == "1"); // true
console.log("!=", 1 != "1"); // false

// ===, !==: 값만 비교, 자료형은 비교 X
console.log("===", 1 === "1"); // false
console.log("!==", 1 !== "1"); // true

// 번외
console.log("0 == false", 0 == false); // true
console.log("0 === false", 0 === false); // false

console.log("'' == false", '' == false); // true
console.log("'' === false", '' === false); // false

console.log("null == undefined", null == undefined); // true
console.log("null === undefined", null === undefined); // false

console.log(" ");

// 2-2. 크기 비교
console.log("======= 비교연산자 (크기비교) =======");
console.log("a > b", a > b); // 20 > 3 비교결과 20이 더 큼 >> true
console.log("a >= b", a >= b); // true
console.log("a < b", a < b); // false
console.log("a <= b", a <= b); // false

console.log(" ");

// 3. 논리 연산자
// &&: and - 모든 조건이 참이어야 함
// ||: or - 조건 중 하나라도 참이면 참
// !: not - 참 / 거짓 반전
console.log("======= 논리연산자 =======");
console.log("'A' && 'B'", "A" && "B");

let x = " ";
x === "A" || "B"; // 잘못된 표현
x === "A" || x === "B"; // 정상적으로 비교

console.log(" ");

// 4. 복합대입연산자
console.log("======= 복합대입연산자 =======");

let count = 0;

count = count + 1; 
console.log(count); // 1

count += 1;
console.log(count); // 2

count = count / 2; 
console.log(count); // 1

count /= 2;
console.log(count); // 0.5

console.log(" ");

// 5. 증감연산자
console.log("======= 증감연산자 =======");

// 증감연산자(후치)
count++;
console.log(count); // 1.5

count--;
console.log(count); // 0.5

// 증감연산자(전치)
++count;
console.log(count); // 1.5

--count;
console.log(count); // 0.5

// 전치와 후치의 차이 확인
let y;
y = count++;
console.log(y); // 0.5 >> y에 count가 되는 시점에는 일단 기존 값이었던 0.5가 할당, 그리고 그 이후 ++가 동작해서 count 만 1.5로 1 증가
console.log(count); // 1.5

// count값은 현재 1.5
let z;
// z에 count 값이 할당되기 전 1 을 더함, z에 count + 1 값이 할당
z = ++count;
console.log(z); // 2.5 
console.log(count); // 2.5

