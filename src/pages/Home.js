import "../style/Home.css";

import { Link } from "react-router-dom";
import BANNER from "../assets/images/home_cover.png";
import BANNER2 from "../assets/images/home_cover2.png";
import homeData from "../assets/jsons/home.json";

import Section from "../components/H_section";
import Nav from "../components/Nav";

const Home = () => {
    const cover = document.body.clientWidth > 430 ? "cover1" : "cover2";
    return (
        <>
            <Nav/>
            <div className="home-container">
                <div className="Banner">
                    <img src={BANNER} alt="cover.png" style={{ display: cover === "cover1" ? "block" : "none" }} />
                    <img src={BANNER2} alt="cover.png" style={{ display: cover === "cover2" ? "block" : "none" }} />
                    <div className="intro">
                        <div className="item typo"></div>
                        <div className="item content">
                            透過MBTI來認識<br />誕生於宇宙中<br />獨一無二的自己
                        </div>
                        <div className="item button">
                            <Link to={"/world"} className="b_text">
                                世界觀 GO!
                            </Link>
                        </div>

                    </div>
                   </div>
                <div className="home-content">
                    {homeData.map((item) => (
                        <Section item={item}/>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Home;