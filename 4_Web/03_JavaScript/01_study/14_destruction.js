// 구조분해 할당
// 배열의 구조분해 할당

const arr1 = [10, 20, 30, 40, 50];
const [ten, twenty, thirty, forty, fifty, und] = arr1;

console.log(ten, twenty);
console.log(und);

// 기본값 지정
const arr2 = ["chicken", "pizza"];
const [a, b, c = "cola"] = arr2;
console.log(a, b, c);

// 객체 구조분해 할당 -> 키를 기준으로 할당
const obj = {
    name: "WDH",
    age: 38,
    city: "seoul"
};

const {name, age, city} = obj;
console.log("객체 구조분해 할당: ", name, age, city);

// 전개연산자 ... (spread syntax)
// 배열 전개
const arr3 = [1, 2, 3];
const arr4 = [4, 5, 6];
const spread = [...arr3, ...arr4];
console.log(spread);

// 문자열의 전개
const spread2 = [..."Hello"];
console.log(spread2);

// 객체의 전개
const chip = {base: "포카칩", company: "오리온"};
const potatoChip = {...chip, flavor: "어니언"};

console.log(potatoChip);

// rest 파라미터
const values = ["A", "B", "C", "D", "E"];

function myFunc(a, b, c, ...rest) {
    // 순서대로 받고 나머지는 rest에 넣어줘
    console.log(a, b, c);
    console.log("rest", rest);
}
myFunc(...values);

const{flavor, ...rest} = potatoChip;
console.log(flavor);
console.log(rest);

// 실습 Spread 연산자 만들기
const word1 = "abc";
const letter1 = [...word1];
console.log(letter1);

const word2 = "xyz";
const letter2 = [...word2];
console.log(letter2);

const combined = [...letter1, ...letter2];
console.log(combined);
