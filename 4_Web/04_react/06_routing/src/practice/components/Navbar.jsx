import { Link, Route, Routes } from 'react-router-dom';
import "../styles/Navbar.css";
import Student from './Student';
import Home from './Home';
import NotFound from '../pages/NotFound';

function Navbar() {
    return (
        <>
        <div className = "nav-container">
            <nav>
                {/* 1. "ReactRouter 실습" h2 링크 - to="/" */}
                <Link to = "/" className = "nav-title"><h2>ReactRouter Practice</h2></Link>

                {/* 2. nav > ul > li 3개 > 각 li에 Link 넣기 */}
                <ul className = "nav-list">
                    <li><Link className = "nav-item" to = "/student/WDH">Student KDT</Link></li>
                    <li><Link className = "nav-item" to = "/student/Alice">Student CodingOn</Link></li>
                    <li><Link className = "nav-item" to = "/student/Justin?name=DOOHEE">SearchParams</Link></li>
                </ul>
            </nav>
        </div>
        
        <hr className = "nav-divider" />

        <Routes>
            <Route path = "/" element={<Home />} />
            <Route path = "/student/:name" element = {<Student />} />
            <Route path = "*" element={<NotFound />} />
        </Routes>

        </>
    );
}

export default Navbar;