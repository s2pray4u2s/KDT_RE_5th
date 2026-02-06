// Select.jsx - 자식 컴포넌트
// 캐릭터, 배경색, 글자색을 선택하는 드롭다운 3개

// 부모(Practice)로 부터 setData를 props로 받음
function Select({ setData }) {
    
    // 드롭다운 값이 바뀔 때 실행되는 함수
    const handleChange = (e) => {

        // e.target 에서 name(어떤 드롭다운인지)과 value(선택된 값)를 구조 분해
        const {name, value} = e.target;

        // 부모 상태 업데이트 - [name]은 계산된 속성명(computed property name)
        // prev(이전 상태)를 스프레드로 복사하고, 해당 키만 새 값으로 덮어씀
        setData((prev) => ({...prev, [name]: value}));
    };

    return ( 
        <div style = {{display: "flex", gap: "15px", alignItems: "center"}}>

            {/* 캐릭터 선택 - name = "character"이므로 data.character가 업데이트 됨 */}
            <label>Character: 
                <select name = "character" onChange = {handleChange}>
                    <option value="Aemeath">Aemeath</option>
                    <option value="Columbina">Columbina</option>
                    <option value="Furina">Furina</option>
                    <option value="Cyrene">Cyrene</option>
                    <option value="Zibai">Zibai</option>
                </select>
            </label>

            {/* 배경색 선택 - name = "background"이므로 data.background가 업데이트 됨 */}
            <label style = {{color: "black"}}>BackgroundColor: 
                <select name = "background" onChange = {handleChange}>
                    <option value="black">Black</option>
                    <option value="pink">Pink</option>
                    <option value="blue">Blue</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                </select>
            </label>

            {/* 글자색 선택 - name = "color"이므로 data.color가 업데이트 됨 */}
            <label style = {{color: "black"}}>TextColor: 
                <select name = "color" onChange = {handleChange}>
                    <option value="black">Black</option>
                    <option value="pink">Pink</option>
                    <option value="blue">Blue</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                </select>
            </label>
        </div>
     );
}

export default Select;