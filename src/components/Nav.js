import "../style/Nav.css";

import LOGO from "../assets/images/nav_logo.png";

import { Link } from "react-router-dom";

export default function Nav({ posi }) {
    return (
        <nav style={{ position: posi }}>
            <Link to="/">
                <div className="logo">
                    <img src={LOGO} alt="logo.png" />
                </div>
            </Link>
            <ul className="menu">
                <li><Link to="/world" className="menu_link">
                    <div className="menu_btn">世界觀</div>
                </Link></li>
                <li><Link to="/article" className="menu_link">
                    <div className="menu_btn">文章分析</div>
                </Link></li>
                <li><Link to="/team" className="menu_link">
                    <div className="menu_btn">團隊介紹</div>
                </Link></li>
            </ul>
        </nav>
    );
}