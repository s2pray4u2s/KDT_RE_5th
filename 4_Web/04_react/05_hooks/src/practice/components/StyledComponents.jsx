import styled from "styled-components"

// CSS in JS
// 각 컴포넌트 마다 격리된 스타일 적용 가능

const StyledContainer = styled.div`
    display: flex;
`;

const StyledBox = styled.div`
    width: 100px;
    height: 100px;
    background-color: #ccc;
`;

function StyledComponent() {
    return ( 
        <StyledContainer>
            <StyledBox />
        </StyledContainer>
    );
}

export default StyledComponent;