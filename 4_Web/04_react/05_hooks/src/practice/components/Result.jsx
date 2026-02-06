// Result.jsx - 자식 컴포넌트
// 선택된 캐릭터 이미지와 입력한 내용을 배경색 / 글자색 적용해서 보여주는 결과 영역

// 부모(Practice)로 부터 data 객체를 props로 받음
// data = {character, background, color, content}
function Result({ data }) {

    // 캐릭터별 이미지 매핑 객체
    // key: 캐릭터 이름, value: 이미지 경로
    const images = {
        Aemeath: "/images/Aemeath.webp",
        Columbina: "/images/Columbina.webp",
        Cyrene: "/images/Cyrene.webp",
        Furina: "/images/Furina.webp",
        Zibai: "/images/Zibai.webp"
    };

    return ( 
        <div style = {{textAlign: "center"}}>

            {/* 이미지 영역 - 고정 크기로 흔들림 방지 */}
            <div style = {{width: "300px", height: "700px", margin: "0 Auto"}}>
                <img src = {images[data.character]} alt = {data.character} style = {{width: "300px", height: "700px", objectFit: "cover"}} />
            </div>

            {/* 결과 텍스트 박스 - 배경색과 글자색이 data 값에 따라 동적으로 변함 */}
            <div style = {{
                backgroundColor: data.background,
                color: data.color,
                padding: "10px 20px",
                marginTop: "3px",
                display: "inline-block"}}>
            
            {/* data.content: Input에서 입력한 텍스트 표시 */}
            {data.content}
            </div>
        </div>
     );
}

export default Result;