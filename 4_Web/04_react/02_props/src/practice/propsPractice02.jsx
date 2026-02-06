import PropTypes from "prop-types";

export default function FunctionComponent02 ({title, author, price, type}) {
    return (
        <div>
            <div style={{backgroundColor: "#F5E6D3", width: "20%", height: "50vh", padding: "20px", textAlign: "center", margin: "0 auto"}}>
                <h1 style={{ marginTop: "-10px" }}>
                    {/* 실습2 */}
                    <span style = {{color : "#C85C5C"}}>이번주 베스트샐러</span>
                </h1>

                <img src = "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9783982438801.jpg" alt = "book_image" style = {{ width: "100px", display: "block", margin: "0 auto" }} />
                
                <h2>
                    <span style = {{color : "black"}}>{title}</span>
                </h2>

                <ul style={{ paddingLeft: "20px", textAlign: "left", marginLeft: "60px", marginTop: "50px" }}>
                    <li><strong>Author:</strong> {author}</li> 
                    <li><strong>price:</strong> {price}</li>
                    <li><strong>type:</strong> {type}</li>
                </ul>
            </div>
        </div>
    );
}

// 리액트 18 ver 가능 >> Type
FunctionComponent02.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    price: PropTypes.number,
    type: PropTypes.string
};