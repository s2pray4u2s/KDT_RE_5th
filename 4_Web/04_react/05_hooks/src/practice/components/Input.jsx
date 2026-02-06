// Input.jsx - 자식 컴포넌트
// 결과 박스에 표시할 내용을 입력받는 텍스트 입력창

// 부모(Practice)로 부터 setData를 props로 받음
function Input({ setData }) {
    
    // 텍스트 입력할 때마다 실행되는 함수
    const handleChange = (e) => {
        // Select와 달리 입력창이 하나라 name으로 구분할 필요 없음
        // 바로 content 키를 지정해서 업데이트
        setData((prev) => ({...prev, content: e.target.value}));
    };

    return ( 
        <div>
            {/* onChange: 타이핑할 때마다 발생 >> handleChange 호출 >> 부모 data.content 업데이트 */}
            <label> Content: 
                <input type = "text" placeholder = "Enter your content" onChange = {handleChange} />
            </label>
        </div>
     );
}

export default Input;