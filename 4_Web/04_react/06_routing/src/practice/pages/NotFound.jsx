import { useNavigate } from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate();

    return ( 
        <div style = {{padding: "50px", textAlign: "center", marginTop: "20px"}}>
            <h1 style = {{fontSize: "5rem", color: "#764ba2"}}>404 Not Found</h1>
            <h2>Oops! The page you're looking for doesn't exist.</h2>
            <p>The page you are looking for doesn't exist or has been moved.</p>
            <button 
                onClick = {() => navigate("/")}
                style = {{
                    padding: "10px 20px", 
                    backgroundColor: "#667eea", 
                    color: "white", 
                    border: "none", 
                    borderRadius: "5px", 
                    cursor: "pointer",
                    marginTop: "20px"}}>Go Back to Home</button>
        </div>
     );
}

export default NotFound;