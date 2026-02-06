import '../App.css';

function Practice01() {
  const name = "로이";
  const animal = "댕댕이";
  const num1 = 3;
  const num2 = 5;
  const num3 = 8;
  const num4 = 5;
  const title = "HELLO WORLD!";
  
  return (
    <div className="App">
      {/* 실습1 */}
      <h2>{`제 반려 동물의 이름은 ${name} 입니다^^
        ${name}는 ${animal} 입니다.`}</h2>

      {/* 실습2 */}
      <div>{num1 + num2 === 8 ? "That's right!":"That's wrong!"}</div>

      {/* 실습3 */}
      <div>{num3 > num4 && "a가 b보다 큽니다."}</div>

      {/* 실습4 */}
      <h1 className="title" 
      style={{backgroundColor: "#F5E6D3", 
              color: "#C85C5C", 
              fontSize: "48px", 
              width: "50%", 
              margin: "0 auto", 
              padding: "20px"}}>{title}</h1><br />

      <div style = {{textAlign: "center"}}>
        <div>
          아이디: <input type="text" />
        </div>

        <br />

        <div>
          비밀번호: <input type="text" />
        </div> 
      </div>
    </div>
  );
}

export default Practice01;
