import "../style/Footer.css";

import FACEBOOK from "../assets/images/fb.png";
import LOGO from "../assets/images/footer.png";
import MBTI from "../assets/images/mbti.png";
import YOUTUBE from "../assets/images/youtube.png";

export default function Footer() {
    return (
        <footer>
            <div className="logo">
                <img src={LOGO} alt="Logo" />
            </div>
            <button className="f_btn f_n_btn">
                <img src={YOUTUBE} alt="YouTube logo" />
            </button>
            <button className="f_btn f_n_btn">
                <img src={FACEBOOK} alt="Facebook logo" />
            </button>
            <a href="https://www.16personalities.com/free-personality-test" className="f_btn">
                <img src={MBTI} alt="MBTI logo" />
            </a>
        </footer>
    );
}