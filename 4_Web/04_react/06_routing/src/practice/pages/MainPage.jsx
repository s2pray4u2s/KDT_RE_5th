import { useSearchParams } from "react-router-dom";

function MainPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get("mode"));

    return ( 
        <div className = {["main", searchParams.get("mode")].join(" ")}>
            <h1>Home</h1>
            <button onClick = {() => {setSearchParams({mode: "dark"});}}>Dark Mode</button>
        </div> 
    );
}

export default MainPage;