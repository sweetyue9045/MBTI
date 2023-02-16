import "../style/Article.css";
import { Link } from "react-router-dom";
import BANNER from "../assets/images/article_cover.png";
// import typeData from "../assets/jsons/personality.json";
import Nav from "../components/Nav";
import Footer from "../components/Footer";


function Article() {
    return (
        <>
            <Nav posi="fixed" />
            <div className="article-container">
                <div className="Banner">
                    <div className="intro">
                        
                    </div>
                    <img src={BANNER} alt="cover.png" />
                </div>
                <div className="article-content">
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Article;