// 원시 자료형

// 1. 문자열 (string)
const str = "Good morning^^";
console.log(str);

// 문자열 연산
const str2 = "Stay strong😘😘😘";
console.log(str + str2);

const name = "DOOHEE";
const age = "Secret"
console.log("Hello~ My name is " + name + " and, age is "+ age + " 😊");

// 템플릿 리터럴
// 변수와 문자열을 함께 쓸 수 있도록 하는 문법
console.log(`Hello~ My name is ${name} and, age is ${age} 😊`)

console.log(`변수말고 코드 실행 가능해요 ${2 + 4}`)

//======================================================================================

// 2. 숫자형(number)

// 정수와 실수를 구분하지 않음
const num = 100;
const num2 = 3.14;
console.log("number", num, num2);

//======================================================================================

// 3. 불리언 / 논리형 (boolean)

// 참 or 거짓을 표현하는 true, 
const isTrue = true;
const isFalse = false;
console.log("boolean", isTrue, isFalse);

//======================================================================================

// 4. null (빈 값)

// 의도적으로 값을 비운 상태, "값이 없음"을 명시
let isVar = null;
console.log(isVar);

//======================================================================================

// 5. undefined
// 값이 정의(할당)되지 않은 상태
let x;
console.log(x); // undefined 출력
// console.log(x2); >> 할당되지 낳은 변수로 에러 발생

//======================================================================================

// [객체 자료형]

// 1. 배열 (array)
const fruits = ["grape", "orange", "cherry", "peach", "mangosteen"];
console.log("array", fruits);

// 인덱싱
console.log(fruits[3]); // peach
console.log(fruits[-1]); // undefined

// at 활용 시 음수 인덱싱 가능
console.log(fruits.at(2)); // cherry
console.log(fruits.at(-1)); // mangosteen

fruits[3] = "watermelon";
console.log(fruits);

// 배열 안에 요소로 배열 넣을 수 있음
const English = [
    ['A', 'B', 'C'],
    ['D', 'E', 'F'],
    ['G', 'H', 'I']
];

console.log(English[0][1]); // B

// 변수 자체에 대한 재할당은 불가
// 하지만 배열 내부이 요소는 수정 가능
English[2][2] = 'Z';
console.log(English[2][2]); 
console.log(English);

// English = [
// [1, 2, 3],
// [4, 5, 6], 
// [7, 8, 9]
// ];

English[0] = [1, 2, 3];
console.log(English);

//======================================================================================

// 2. 객체 (object)

// 키-값 쌍을 값으로 가짐
let cat = {
    name: "장화",
    age: 18,
    isCute: true,
    mew: function() {
        return "냐옹"
    }
};

console.log("객체", cat);

// 객체의 값 조회
// 1) 점 표기법
// 키가 문자열인 경우만 가능, 키가 숫자인 경우 접근 못함
console.log(cat.name); // 장화
console.log(cat.age); // 18

// 2) 대괄호 표기법
// 키가 숫자여도 접근 가능
console.log(cat["name"]); // 장화
console.log(cat["age"]); // 18

// cat.mew();  >> "야옹" 이라는 문자열이 리턴
console.log(cat.mew()); 

let catMew = cat.mew();
console.log(catMew);

let cat2 = {
    name: "장화",
    age: 18,
    isCute: true,
    mew: function() {
        alert("냐옹22");
    }
};

cat2.mew(); // cat2라는 객체의 mew키 값을 실행시키는 코드

let cat3 = {
    name: "장화",
    age: 18,
    isCute: true,
    mew: function(str) {
        return str;
    }
};

cat3.mew("냐냐냐냐냐옹") // 매캐변수로 전달한 "냐냐냐냐냐옹"를 리턴
alert(cat3.mew("냐냐냐냐냐옹"));

//======================================================================================

// 자료형 확인(typeof)
console.log(typeof "문자"); // string
console.log(typeof 100); // number
console.log(typeof 3.14); // number
console.log(typeof true); // boolean
console.log(typeof false); // boolean
console.log(typeof null); // object
console.log(typeof undefined); // undefined

// 배열은 object 하위의 array 이고, array 에는 메서드들이 자동으로 포함되어 typeof로 자료형 확인 시 object로 출력됨
console.log(typeof fruits); // object
console.log(typeof cat); // object

//======================================================================================

// 형변환

// 1. 암시적 형변환
console.log("암시적 형변환 (1)", "2" + 3);
// 예상: 암시적 형변환 (1), 2(문자열)3(숫자열)
// 결과: 암시적 형변환 (1), 2(문자열)3(문자열)

console.log("암시적 형변환 (2)", typeof(100 + "1"));
// 예상: 에러나야함, 숫자 더하기 문자는 타입(자료형)을 알 수 없기 때문
// 결과: 암시적 형변환 (2) string >> JS가 자기 마음대로 숫자를 문자로 변환해버림

// 2. 명시적 형변환

// 2-1. 문자열로 변환: String(), toString()
let string1 = 123;
let string2 = true;
let string3 = undefined;

// String() 사용
console.log(String(string1), typeof String(string1)); // 숫자 123을 문자열 "123"으로 변환
console.log(String(string2), typeof String(string2)); // "true"
console.log(String(string3), typeof String(string3)); // "undefined"

// toString() 사용
console.log(string1.toString(), typeof string1.toString()); // 숫자 123을 문자열 "123"으로 변환
console.log(string2.toString(), typeof string2.toString()); // "true"
// console.log(string3.toString(), typeof string3.toString()); >> error

// 2-2. 숫자로 변환: Number(), ParseInt()

let number1 = "123";
let number2 = false;
let number3 = "진짜 문자열";
let number4 = 3.14;
let number5 = "3.14";

// Number() 사용
console.log("================================");
console.log(Number(number1), typeof Number(number1)); // 123
console.log(Number(number2), typeof Number(number2)); // 0 >> false는 다르게 표현하면 0이기 때문에 숫자 변환 시 0으로 출력
console.log(Number(number3), typeof Number(number3)); // NaN(Not a Number)
console.log(Number(number4), typeof Number(number4)); // 3.14
console.log(Number(number5), typeof Number(number5)); // 3.14

// "정의되지 않음" >> 값이 아에 없는 것 >> NaN
console.log(Number(undefined), typeof Number(undefined)); // NaN

// 값이 없음을 정의 >> 값이 없다는 것을 표현하는 값인 0으로 변환
console.log(Number(null), typeof Number(null)); // 0

// parseInt() 사용 >> 소수점 버리고 정수로 출력
console.log("=============== parseInt ================");
console.log(parseInt(number1), typeof parseInt(number1)); // 123
console.log(parseInt(number4), typeof parseInt(number4)); // 3
console.log(parseInt(number5), typeof parseInt(number5)); // 3 >> 소수점 버림

// parseFloat() 사용 >> 소수점까지 모두 변환, 자료형은 number로 출력됨
console.log("=============== parseFloat ================");
console.log(parseFloat(number1), typeof parseFloat(number1)); // 123
console.log(parseFloat(number4), typeof parseFloat(number4)); // 3
console.log(parseFloat(number5), typeof parseFloat(number5)); // 3 >> 소수점 버림

