import useToggle from "../hooks/UseToggle";

function Faq() {
    const [isFaqOpen, setIsFaqOpen] = useToggle();

    return ( 
        <div>
            <h1>Custom Book Ex</h1>
            <div style = {{cursor: "pointer"}} onClick = {setIsFaqOpen}>
                Q. 리액트에서 커스텀 훅을 만들 수 있나요?
            </div>
            {isFaqOpen && <div>A. Sure!</div>}
        </div>
     );
}

export default Faq;