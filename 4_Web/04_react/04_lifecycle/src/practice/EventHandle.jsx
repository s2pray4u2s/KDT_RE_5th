import { useState } from "react";

function EventHandle() {
  const [textColor, changeColor] = useState({color: "black", text: "Black"});
  const handleColor = (color, text) => {
    changeColor({color, text});
  }

  return (
    <>
      <h4 style ={{color: textColor.color}}>{textColor.text}글씨</h4>
      <button onClick={(e) => handleColor("red", e.target.innerText)}>Red</button>
      <button onClick={(e) => handleColor("blue", e.target.innerText)}>Blue</button>
    </>
  );
}

export default EventHandle;