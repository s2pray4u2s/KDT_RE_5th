// 요소 선택
document.addEventListener("DOMContentLoaded", () => {
    const value1 = document.querySelector("#value1");
    const value2 = document.querySelector("#value2");
    const operator = document.querySelector("#operator");
    const button = document.querySelector("#btn");
    const reset = document.querySelector("#reset");
    const result = document.querySelector("#result");
    
    // 계산 버튼 클릭
    button.addEventListener("click", () => {
        const val1 = Number(value1.value); // 숫자로 변환
        const val2 = Number(value2.value);
        const op = operator.value.trim(); // trim: 공백 제거
        
        if (isNaN(val1) || isNaN(val2)) {
            result.value = "Invalid number";
            return;
        }
        
        let res; // 결과 담을 변수
        
        // 연산
        switch(op) {
            case "+": res = val1 + val2; break;
            case "-": res = val1 - val2; break;
            case "*": res = val1 * val2; break;
            case "/": res = val2 !== 0 ? val1 / val2 : "Error"; break;
            default: res = "invalid operator";
        }
        
        // 결과 표시
        result.value = res;
    });
    
    // 초기화 버튼
    reset.addEventListener("click", () => {
        value1.value = "";
        value2.value = "";
        operator.value = "";
        result.value = "";
    });
});
