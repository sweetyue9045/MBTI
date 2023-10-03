import "../style/Article.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import BANNER from "../assets/images/article_cover.png";
import BANNER2 from "../assets/images/article_cover2.png";
import Btn from "../assets/images/downBtn.png";

// import typeData from "../assets/jsons/personality.json";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Article = () => {
    useEffect(() => {
        document.body.scrollTo(0, 0);
    }, []);
    var cover = "cover1";
    if (document.body.clientWidth > 430) {
        cover = "cover1"
    }
    else {
        cover = "cover2"
    }
    return (
        <>
            <Nav posi="fixed" />
            <div className="article-container">
                <div className="Banner">
                    <img src={BANNER} alt="cover.png" style={{ display: cover == "cover1" ? "block" : "none" }} />
                    <img src={BANNER2} alt="cover.png" style={{ display: cover == "cover2" ? "block" : "none" }} />

                    <div className="intro">
                        <div className="item title">文章解析</div>
                        <div className="item content">
                            透過各路心理學大師<br />解析不一樣的自己
                        </div>
                        <div className="item btn">
                            <img src={Btn} alt=""  style={{ display: cover == "cover1" ? "block" : "none" }}/>
                        </div>
                    </div>
                </div>
                <div className="article-content">
                    Coming soon...
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Article;