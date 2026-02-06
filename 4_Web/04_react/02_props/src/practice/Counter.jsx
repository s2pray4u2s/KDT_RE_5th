import { useState } from "react";

function Counter() {
    const [number, setNumber] = useState(0);
    const handlePlus = () => setNumber(number + 1);
    let num = 0;

    return (
        <div>
            <h1>{number}</h1>
            <button onClick = {handlePlus}>Plus1</button>

            <h1>{num}</h1>
            <button onClick = {() => { 
                num = num + 1;
                console.log("num: ", num)}}>Plus2</button>
        </div>
     );
}

export default Counter;