// 1. if 문
console.log("======= if문 =======");

let a = 10;
if (a > 5) {
    // if문의 조건이 true일 때 실행할 코드
    console.log(`${a}이(가) 5 보다 큽니다.`);
}

// 코드가 한 줄일 때는 scope({}) 생략 가능
if (a > 3) console.log(`${a}이(가) 3 보다 큽니다.`);

// if - else
if (a > 20) {
    console.log(`${a}이(가) 20 보다 큽니다`);
} else {
    // if문의 모든 조건이 false인 경우에도 무조건 실행시킬 코드
    console.log(`${a}이(가) 20 보다 작거나 같습니다.`);
}

// if - else if - else
let score = 85;

if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else if (score >= 60) {
    console.log("D");
} else {
    console.log("F");
}

// if문을 따로 따로 작성하는 경우
if (score < 90 && score >= 80) {
    console.log("B");
}

// 마지막 else 문도 else if 문으로 작성 가능
else if (score < 60) {
    console.log("F");
}

// 근데 이렇게 될 경우에는 코드를 쓰는 입장에서도 글자를 많이 써야 하고
// 실핼될 때도 조건에 만족하는지 불필요하게 검사를 진행함

console.log(" ");

// if문 중첩
console.log("======= if문 중첩 =======");

let userId = "DOOHEE";
let userPw = "1234";
let userInputId = prompt("아이디를 입력해주세요.");

if (userId === userInputId) {
    // 아이디가 맞음
    let userInputPw = prompt("비밀번호를 입력해주세요.");
    if (userPw === userInputPw) {
        // 비밀번호가 맞음
        alert("로그인 성공!");
    } else {
        alert("비밀번호가 틀렸습니다.");
    }
} else {
    alert("아이디가 일치하지 않습니다.");
}

console.log(" ");

// 2.switch
console.log("======= switch문 =======");

let b = Number(prompt("숫자를 입력해주세요."));

switch (b) {
    case 1:
        console.log("b가 1이군요.");
        // switch 문에서 케이스 내 코드 작성 시 무조건 break 꼭 써야함!
        break;
    case 2:
    case 3:
    case 4:
        // case 만 연달아 작성한 경우 해당 케이스 중 하나라도 만족하면 ":" 다음 코드 실행
        console.log("b가 2 ~ 4중 하나로군요");
    case 5:
        console.log("b가 5이군요.");
    default:
        // 위의 모든 조건들이 불만족할 때 무조건 실행되는 코드
        // default로 실행할 코드가 없다면 작성하지 않아도 됨
        // default문 꼭 작성 하지 않아도 괜찮음 (생략 가능)
        console.log("b가 뭔가요? 알려주세요.");
        break;
}

console.log(" ");

// 3. 삼항연산자
console.log("======= 삼항연산자 =======");
// 간단한 조건문을 간결하게 표현 하는 데 사용

let num = 100;

// 일반 if 문
if (num > 50) {
    console.log("num이 50 보다 큽니다.");
} else {
    console.log("num이 50 보다 작거나 같습니더.");
}

// 동일한 로직 삼항연산자로 변환
// 조건 ? , 조건이 true일 때 실핼될 코드 : 조건이 false일 때 실행될 코드
num > 50 
    ? console.log("num이 50 보다 큽니다.") // ? 다음은 참일 때 실행
    : console.log("num이 50 보다 작거나 같습니다."); // : 다음은 거짓말일 때 실행