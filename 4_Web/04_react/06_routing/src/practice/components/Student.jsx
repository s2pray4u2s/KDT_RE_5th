import { useParams, useSearchParams, useNavigate } from 'react-router-dom';

function Student() {

    // 1. 경로 파라미터 (:name) 가져오기
    const { name } = useParams();

    // 2. 쿼리 스트링 (?name=kdt5rd) 가져오기
    const [searchParams] = useSearchParams();
    const NameQuery = searchParams.get("name");

    // 3. 페이지 이동을 위한 Navigate 함수
    const navigate = useNavigate();

    return ( 
        <div style = {{textAlign: "center", marginTop: "20px"}}>
            <h2>Student Name is <span style = {{color: "blue", fontWeight: "bold"}}>{name}</span> Nice to Meet You!</h2>

            {/* 쿼리 스트링이 존재할 때만 보여주는 조건부 랜더링 */}
            {NameQuery && (
                <h2>RealName is <span style = {{color: "red", fontWeight: "bold"}}>{NameQuery}</span></h2>)}

            <button onClick = {() => {navigate(-1);}}>Go Back</button>
        </div>
     );
}

export default Student;