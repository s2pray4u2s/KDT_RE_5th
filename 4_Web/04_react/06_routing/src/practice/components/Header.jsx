import { Link } from 'react-router-dom';

function Header() {
    return ( 
        <>
            <style>{`
                .app-header{
                    background: linear-gradient(90deg, #0f172a, #0b3a5f);
                    color: #fff;
                    padding: 14px 20px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    box-shadow: 0 2px 8px rgba(2,6,23,0.6);
                    border-radius: 8px;
                    margin: 12px 0;
                }
                .app-header .title{
                    font-weight: 700;
                    font-size: 18px;
                }
                .app-header nav ul{
                    display:flex;
                    gap:12px;
                    list-style:none;
                    margin:0;
                    padding:0;
                }
                .app-header nav a{
                    color:#cfe8ff;
                    text-decoration:none;
                    padding:6px 10px;
                    border-radius:6px;
                    transition: background 150ms, color 150ms, transform 120ms;
                }
                .app-header nav a:hover{
                    background: rgba(255,255,255,0.06);
                    color:#fff;
                    transform: translateY(-1px);
                }
                .app-header nav a.active{
                    background:#1f6feb;
                    color:#fff;
                }
            `}</style>
            <header className="app-header">
                <div className="title">Router Tutorial</div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                    </ul>
                </nav>
            </header>
        </>
     );
}

export default Header;