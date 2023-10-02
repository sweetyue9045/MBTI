import "../style/Article.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import BANNER from "../assets/images/article_cover.png";
import Btn from "../assets/images/downBtn.png";

// import typeData from "../assets/jsons/personality.json";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Article = () => {
    useEffect(() => {
        document.body.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Nav posi="fixed" />
            <div className="article-container">
                <div className="Banner">
                    <div className="intro">
                        <div className="item title">文章解析</div>
                        <div className="item content">
                            透過各路心理學大師<br />解析不一樣的自己
                        </div>
                        <div className="item btn">
                            <img src={Btn} alt="" />
                        </div>
                    </div>
                    <img src={BANNER} alt="cover.png" />
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