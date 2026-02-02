// greeting이라는 클래스를 가진 요소를 greetingE1 변수에 저장하고 콘솔에 출력하기
let greetingEl = document.querySelector(".greeting");
console.log(greetingEl);

console.log(" ");

// 태그 내용 출력
console.log("===== 태그 내용 출력 =====");
console.log(greetingEl.innerHTML);
console.log(greetingEl.textContent); // 태그 안쪽을 불러올 때 더 선호되는 방식

console.log(" ");

// 태그 내부 내용 변경
// innerHTML: 태그 안쪽 HTML를 주입 (HTML 반영 가능)
greetingEl.innerHTML = "안녕하세요! 행복한 금요일이네요.. 조그만 <b>힘</b>내자구요";

// textContent: 태그 안쪽에 문자열을 입력 (HTML 반영 X)
greetingEl.textContent = "<b>화이팅</b>!";

// 속성 변경
console.log("===== 속성 변경 =====");
const naverEl = document.querySelector("#naver");
naverEl.textContent = "Google";
naverEl.setAttribute("href", "http://www.google.com");
console.log(naverEl);

// <a href = "http://www.google.com" id = "naver">네이버</a>
// 여기에서 id 속성 값을 google로 바꾸기
naverEl.setAttribute("id", "google");
console.log(naverEl);

console.log(" ");

// 속성값 가져오기
console.log("===== 속성값 가져오기 =====");
const starrailEl = document.querySelector("#starrail");
const starrailURLl = starrailEl.getAttribute("src");
console.log(starrailURLl);

// id가 test인 img 태그를 포드 이미지가 보이도록 src 속성 수정하기
const testEl = document.querySelector("#test");
testEl.setAttribute("src", starrailURLl);

console.log(" ");

// CSS 지정하기
console.log("===== CSS 지정하기 =====");
const fruitsLi = document.querySelectorAll(".fruit");
console.log(fruitsLi[0]);

console.log(" ");

// fruitsLi의 첫 번째 태그의 스타일 속성에서 backgroundColor를 red로 바꾸겠다.
fruitsLi[0].style.backgroundColor = "red";
fruitsLi[1].style.fontSize = "30px";

// for of 문 활용 모든 fruitsLi 요소 순회하면서 스타일 지정
for (let el of fruitsLi) {
    el.style.backgroundColor = "skyblue";
    el.style.fontSize = "20px";
    el.style.fontWeight = "bold";
}

// classList 활용
console.log("===== classList =====");
const h1E1 = document.querySelector("h1");
h1E1.classList.add("title");
console.log(h1E1);

// title 클래스 포함 여부 확인 후 불리언 으로 반환
console.log(h1E1.classList.contains("title"));

h1E1.classList.remove("title");
console.log(h1E1.classList.contains("title"));

h1E1.classList.toggle("title"); // title 클래스가 없다면 추가, 있다면 삭제
console.log(h1E1.classList.contains("title"));

h1E1.classList.toggle("title"); 
console.log(h1E1.classList.contains("title"));

if (h1E1.classList.contains("title")) {
    console.log("This is title");
} else {
    console.log("No title");
}

console.log(" ");

// 요소 조회
console.log("===== 요소조회 =====");
const fruitsE1 = document.querySelector("#fruits");

// 자식 요소 조회
console.log("자식 요소 조회: ", fruitsE1.children);
console.log("1번 인덱스 자식 요소 조회: ", fruitsE1.children[1]); // 인덱스로 접근 가능

// 형제 요소 조회
const SBE1 = document.querySelector("#SB");

console.log("#SB 이전 요소", SBE1.previousElementSibling);
console.log("#SB 다음 요소", SBE1.nextElementSibling);
console.log("#SB 다다음 요소", SBE1.nextElementSibling.nextElementSibling);

console.log(" ");

// 새로운 요소 생성
console.log("===== createElement =====");
const newLi = document.createElement("li");
newLi.textContent = "내가 만든 li"
console.log(newLi);

// createElement는 그냥 하나의 태그를 만들었을 뿐, html에는 삽입되지 않음
console.log(document.body);

console.log(" ");

// 요소 삽입
console.log("===== append =====");
fruitsE1.append(newLi); // fruitsE1 라는 요소에 자식 중 가장 마지막으로 newLi가 삽입
fruitsE1.appendChild(newLi); // 위랑 똑같은 동작을 함.

// append 와 appendChild 의 차이
// fruitsE1.append("문자열 추가 가능");
// fruitsE1.appendChild("문자열 추가 불가");

// fruitsEl.append(newLi, newLi, newLi); // 여러 요소를 한 번에 삽입 가능
// fruitsEl.appendChild(newLi, newLi, newLi); // 여러 요소를 한 번에 삽입 불가

// append가 더 최신 메서드여서 현재는 더 선호되고 있음 

fruitsE1.prepend(newLi); // fruitsE1라는 요소에 자식 중 가장 처음으로 newLi가 삽입

// 선택한 요소에 형제로 새로운 요소 추가
fruitsE1.before(newLi);
console.log(document.body);

fruitsE1.after(newLi);
console.log(document.body);

// 요소 삭제
const firstChild = document.querySelector("#fruits > li"); // <li class = "fruit">사과</li>
fruitsE1.removeChild(firstChild); // 사과 li 삭제

// 자기 자신 삭제
fruitsE1.remove();
