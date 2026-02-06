import '../App.css';

function JsxExample() {
  const name = "WDH";
  const styles = {
    backgroundColor: "yellow",
    color: "pink",
    fontSize: "48px"
  };

  return (
    <>
      <div className="App">
        {/* JSX 문법 */}

        {/* 1. 하나로 감사인 요소 */}
        <div>Nice to Meet You!</div>

        {/* 2. Javascript 표현식 사용 
              - {}로 감싸면 js 표현식 사용 가능
              - {} 안에서 삼항 연산자 사용 가능 (if, for 등은 안됨)*/}
        <div>{name} HELLO!</div>
        <div>{name === "WDH" ? "Nice to Meet You!":"Who Are You?!"}</div>

        {/* 3. Style 속성
             - 리액트에서 dom 요소에 스타일 적용 시 문자열 X >> 객체 사용
             - 스타일 이름 중 하이픈(-) 포함 시 camelCase로 작성해야 함*/}
        <div style={styles}>HEY!</div>
        <div 
          style={{
            backgroundColor: "purple",
            color: "white",
            fontSize: "48px"
        }}>Nice to Meet You!</div>

        {/* 4. className 사용
              - class 속성이 아닌 className 속성 사용!

            5. 종료 태그가 없는 태그의 사용
              - 기존의 종료 태그가 없는 태그를 사용하더라도 종료 태그를 작성해야 함 or self-closing
              
            6. 주석
              - //: js 외부 주석*/}
      </div>
      <div></div>
    </> 
  );
}

export default JsxExample;