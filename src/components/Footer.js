import "../style/Footer.css";

import LOGO from "../assets/images/footerImg.png";
import YOUTUBE from "../assets/images/youtube.png";
import FACEBOOK from "../assets/images/fb.png";
import MBTI from "../assets/images/mbti.png";

export default function Footer() {
    return (
        <footer>
            <div className="logo">
                <img src={LOGO} alt="logo.png" />
            </div>
            <a href="javascript:void(0)" className="f_btn f_n_btn">
            <img src={YOUTUBE} alt="youtube.png" />
            </a>
            <a href="javascript:void(0)" className="f_btn f_n_btn">
            <img src={FACEBOOK} alt="facebook.png" />
            </a>
            <a href="https://www.16personalities.com/free-personality-test" className="f_btn">
            <img src={MBTI} alt="mbti.png" />
            </a>
        </footer>
    );
}