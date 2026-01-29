let str = "    Hello JavaScript World    ";

console.log("원본 str: ", str);

console.log(" ");

// .length
console.log("===== length =====");
console.log("length: ", str.length); // 함수 X , 하나의 속성
console.log(" ");

// .trim: 공백 제거
console.log("===== trim =====");
console.log("공백 제거: ", str.trim()); // "Hello JavaScript World" 앞 뒤 공백 사라짐
console.log("원본 str: ", str); // 원본 변경 x
console.log(" ");

// 대문자 변환
console.log("===== toUpperCase =====");
console.log("Upper: ", str.toUpperCase()); // "    HELLO JAVASCRIPT WORLD    "
console.log("원본 str: ", str); // 원본 변경 x
console.log(" ");

// 소문자 변환
console.log("===== toLowerCase =====");
console.log("Lower: ", str.toLowerCase()); // "    hello javascript world    "
console.log("원본 str: ", str); // 원본 변경 x
console.log(" ");

// 탐색
console.log("===== indexOf =====");
console.log("index search: ", str.indexOf("J")); // 10
console.log("word search - 1: ", str.indexOf("Java")); // 10 >> 매개변수로 받은 문자열의 첫 번째 글자 인덱스 반환
console.log("word search - 2: ", str.indexOf("Jva")); // -1 >> 매개변수로 받은 문자열이 없다면 -1 반환
console.log(" ");

console.log("===== includes =====");
console.log("문자열의 포함 여부 확인: ", str.includes("Java")); // true >> 불리언으로 반환
// .indexOf()로도 문자열에 포함 여부 알 수 있음 >> -1 반환하면 없다는 것
console.log("문자열의 포함 여부 확인: ", str.includes("Jva")); // false
console.log(" ");

// 슬라이싱
console.log("===== slice =====");
console.log("슬라이싱: ", str.slice(6, 16)); // llo JavaSc >> 6번 인덱스부터 15번 인덱스 문자열 까지 출력
console.log("원본 str: ", str); // 원본 변경 x
console.log(" ");

// 치환
console.log("===== replace =====");
console.log("한 글자 치환: ", str.replace("a", "e")); // 문자열 중에서 가장 처음 나오는 a라는 문자을 e 치환
console.log("한 단어 치환: ", str.replace("World", "Universe")); // 단어 치환 가능
console.log("전부 치환: ", str.replaceAll("l", "v")); // Hevvo JavaScript Worvd
console.log("원본 str: ", str); // 원본 변경 x
console.log(" ");

// 분할
console.log("===== split =====");
// ""(공백)을 매개변수로 전달 시 문자열의 모든 글자들이 하나씩 짤려서 배열로 반환
console.log('"" 기준 분할: ', str.split("")); // [' ', ' ', ' ', ' ', 'H', 'e', 'l', 'l', 'o', ' ', 'J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't', ' ', 'W', 'o', 'r', 'l', 'd', ' ', ' ', ' ', ' ']

// " "(공백 한 칸)을 기준으로 문자열을 나눠서 배열로 반환
console.log('" " 기준 분할: ', str.split(" ")); // ['', '', '', '', 'Hello', 'JavaScript', 'World', '', '', '', '']

// 분할하는 기준인 매개변수 문자는 사라지고, 배열로 만들어져서 반환
console.log("l 기준 분할: ", str.split("l")); // ['    He', '', 'o JavaScript Wor', 'd    ']
console.log("원본 str: ", str); // 원본 변경 x
console.log(" ");

// 합치기 
console.log("===== concat =====");
let str2 = "With html";
console.log("문자열 합치기1: ", str.concat(str2)); //      Hello JavaScript World    With html
console.log(`문자열 합치기2: ${"Hello ".concat(str2)}`); // Hello with html
console.log(`문자열 합치기3: ${"Hello ".concat(str2, str)}`); // Hello with html    Hello JavaScript World 
console.log(`문자열 합치기4: ${'Hello '.concat("I'm DOOHEE", " nice to meet you")}`); // Hello I'm DOOHEE nice to meet you

console.log("원본 str: ", str); // 원본 변경 x
console.log("원본 str2: ", str2); // 원본 변경 x