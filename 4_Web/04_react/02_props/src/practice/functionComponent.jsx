import PropTypes from "prop-types";

export default function FunctionComponent({name = "기본 이름", age }) {
    const student = "Columbina";
    // console.log(props.name);
    // const {name} = props;

    return (
        <div>
            <h1>Nice to Meet You {student}!</h1>
            {/* <div>넘겨받은 props {props.name}</div> */}
            <div>넘겨받은 props {name}</div>
            {age}
        </div>
    );
}

// 리액트 18 ver 가능 >> Type
FunctionComponent.propTypes = {
    age: PropTypes.number
};