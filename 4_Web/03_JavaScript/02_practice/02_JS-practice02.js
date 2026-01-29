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
