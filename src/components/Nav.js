import "../style/Nav.css";
import { NavLink } from "react-router-dom";
import LOGO from "../assets/images/nav_logo.png";
import LOGO2 from "../assets/images/nav_logo2.png";
import HAM_OPEN from "../assets/images/ham_open.png";
import HAM_CLOSE from "../assets/images/ham_close.png";


export default function Nav() {
    const ClickHandler = (event) => {
		event.preventDefault();
	};
    var logo = "logo1";
    if (document.body.clientWidth > 430) {
        logo = "logo1"
    }
    else {
        logo = "logo2"
    }

    var click_open = function (e) {
        var target_open = document.getElementById("ham_close");
        var target_close = document.getElementById("ham_open");
        var hamnav = document.getElementById("nav-container");
        var nav = document.getElementById("nav");

        target_open.classList.remove("none");
        target_close.classList.remove("block");

        target_open.classList.add("block");
        target_close.classList.add("none");

        hamnav.style.display="flex";
        nav.style.height="100vh";
        nav.style.backgroundColor="#fff";
        nav.style.position = "fixed";

    }

    var click_close = function (e) {
        var target_open = document.getElementById("ham_open");
        var target_close = document.getElementById("ham_close");
        var hamnav = document.getElementById("nav-container");
        var nav = document.getElementById("nav");

        target_open.classList.remove("none");
        target_close.classList.remove("block");


        target_open.classList.add("block");
        target_close.classList.add("none");

        hamnav.style.display="none";
        nav.style.height="10vw";
        nav.style.backgroundColor="transparent";
        nav.style.position = "absolute";
    }
    return (
        <nav id="nav">
            <div id="nav-container" className="nav-container" style={{  display: logo == "logo1" ? "flex":"none"}}>
                <NavLink to="/" onClick={() => click_close()}>
                    <div className="logo">
                        <img src={LOGO} alt="logo.png" style={{ display: logo == "logo1" ? "block" : "none" }}/>
                        <img src={LOGO2} alt="logo.png" style={{ display: logo == "logo2" ? "block" : "none" }} />
                    </div>
                </NavLink>
                <ul className="menu">
                    <li><NavLink to="/world" className="menu_link" onClick={() => click_close()}>
                        <div className="menu_btn">世界觀</div>
                    </NavLink></li>
                    <li><NavLink to="/article" className="menu_link" onClick={() => click_close()}>
                        <div className="menu_btn">文章解析</div>
                    </NavLink></li>
                    <li><NavLink to="/membership" className="menu_link" style={{cursor: "default", color:"#777"}} onClick={ClickHandler}>
                        <div className="menu_btn" style={{border:"#777 solid 3px"}}>註冊</div>
                    </NavLink></li>
                </ul>
            </div>
            <div className="hambtn" style={{ display: logo == "logo2" ? "block":"none"}}>
            <img id="ham_open" className="block" src={HAM_OPEN} alt="ham_open.png" onClick={click_open.bind(this)} />
            <img id="ham_close" className="none" src={HAM_CLOSE} alt="ham_close.png" onClick={click_close.bind(this)}/>
            </div>
        </nav>
    );
}