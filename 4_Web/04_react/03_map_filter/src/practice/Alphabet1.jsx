import { useState } from "react";

function Alphabet1() {
    const list = ["A", "B", "C", "D", "E"];
    // input 값을  state 변수로 선언
    const [inputValue, setInputValue] = useState("");
    const [alphabet, setAlphabet] = useState(["B", "A", "N", "A", "N", "A"]);
   
    const addAlpha = () => {
        const newAlpha = alphabet.concat(inputValue);
        setAlphabet(newAlpha);
        setInputValue("");
    };

    return (
        <>
          {/* <ol>
            {list.map((value, idx) => {
                return (<li key = {idx}>{value}</li>)
            })}
          </ol> */}
          
          {/* onChange 이벤트로 값의 변경 감지 -> state 변수값이 변경되게끔 만들기 */}
          <input type = "text" placeholder = "알파벳 입력" value = {inputValue} onChange = {(e) => setInputValue(e.target.value)}/>
          <button onClick={addAlpha}>ADD!!</button>
          <ol>
            {alphabet.map((value, idx) => {return <li key = {idx}>{value}</li>})}
          </ol>
        </>
    );
}

export default Alphabet1;