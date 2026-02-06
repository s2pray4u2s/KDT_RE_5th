import PropTypes from "prop-types";

export default function FunctionComponent01 ({food = "기본 이름"}) {
    return (
        <div>
            <div>
                {/* 실습1 */}
                <span style = {{color : "red"}}>{food}</span>
                : 돼지의 갈비 부근에 붙은 뱃살 부위. 다른 말로는 세겹살이라고도 한다. 비계가 세 겹으로 겹쳐 보이기 때문에 삼겹살로 불린다.
            </div>
        </div>
    );
}

// 리액트 18 ver 가능 >> Type
FunctionComponent01.propTypes = {
    food: PropTypes.string
};