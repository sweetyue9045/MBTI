import "../style/Home.css";
import { Link } from "react-router-dom";
import BANNER from "../assets/images/home_cover.png";
import Nav from "../components/Nav";
import homeData from "../assets/jsons/home.json";
import Section from "../components/H_section";
import Footer from "../components/Footer";
// import { useState, useEffect, createContext } from "react";

// export const ScrollY = createContext();

function Home() {
    return (
        <>
            <Nav posi="absolute" />
            <div className="home-container">
                <div className="Banner">
                    <div className="intro">
                        <div className="item typo"></div>
                        <div className="item content">
                            透過MBTI來認識<br/>誕生於宇宙中<br/>獨一無二的自己
                        </div>
                        <div className="item button">
                            <Link to={"/world"} className="b_text">
                                世界觀 GO!
                            </Link>
                        </div>

                    </div>
                    <img src={BANNER} alt="cover.png" />
                </div>
                <div className="home-content">
                    {homeData.map((item) => {
                        return <Section item={item}></Section>;
                    })}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;