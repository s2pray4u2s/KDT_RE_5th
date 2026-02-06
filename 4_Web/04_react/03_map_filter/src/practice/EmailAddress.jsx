import { useState } from "react";

function EmailAddress() {
    const [name, setName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [email, setEmail] = useState([]);
    
    const addEmail = () => {
      if (name && inputEmail) {
        const newEmail = email.concat({
          id: email.length + 1,
          name: name,
          email: inputEmail
        });
        setEmail(newEmail);
        setName("");
        setInputEmail("");
      }
    };

    const deleteEmail = (targetId) => {
      const newList = email.filter((item) => item.id !== targetId);
      setEmail(newList);
    }

    return (
        <>
          <div style={{ marginBottom: '20px' }}>
            <input type = "text" placeholder = "name" value = {name} onChange = {(e) => setName(e.target.value)}/>
            <input type = "text" placeholder = "email" value = {inputEmail} onChange = {(e) => setInputEmail(e.target.value)}/>
            <button onClick={addEmail}>ADD!!</button>
          </div>

          <ol style={{textAlign: "left", listStyle: "none", maxWidth: "600px", margin: "0 auto"}}>
            {email.map((value) => {return (
              <li key = {value.id} onDoubleClick = {() => deleteEmail(value.id)}><strong>{value.name}</strong>: {value.email}</li>);
          })}
          </ol>

          {email.length === 0 && <span>이름과 이메일 주소를 입력해주세요</span>}
        </>
    );
}

export default EmailAddress;