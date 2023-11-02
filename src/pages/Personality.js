import "../style/Personality.css";
import { useParams } from "react-router-dom";

import typeData from "../assets/jsons/personality.json";

import Nav from "../components/Nav";

const Personality = () => {
    const { typeId } = useParams()
    const Personality = typeData.find(
        (x) => x.typeLetter == typeId
    );
    return (
        <>
            <Nav />
            <div className="personality-container">
                <div className="Banner">
                    <div className="intro">
                        <div className="item title">
                            <div className="typeLetter">{Personality.typeLetter}</div>
                            <div className="typeChinese">{Personality.typeChinese}</div>
                        </div>
                        <div className="item subTitle" style={{ color: Personality.mainColor }}>
                            {Personality.subTitle}
                        </div>
                        <div className="item content" dangerouslySetInnerHTML={{ __html: Personality.content }}>
                        </div>
                    </div>
                    <img src={require("../assets/images/" + typeId + "_light.png")} alt="type.png" />
                </div>
                <div className="personality-content">
                    <div className="section-title">字母意思</div>
                    <div className="section-content">
                        {Personality.lettermeans.map((item) => {
                            return (
                                <LetterMeans item={item} />
                            );
                        })}
                    </div>
                    <div className="section-title">認知功能</div>
                    {Personality.cognition.map((item) => {
                        return (
                            <Cognition item={item} color={Personality.mainColor} />
                        );
                    })}
                </div>
            </div>
        </>
    );
}

const LetterMeans = ({ item }) => {
    return (
        <div className="lettermeans-cont">
            <div className="meansCard-img">
                <img src={require("../assets/images/" + item.english + ".png")} alt={item.english + ".png"} />
            </div>
            <div className="lettermeans-chinese">{item.chinese}</div>
            <div className="lettermeans-english">{item.english}</div>
        </div>
    );
};

const Cognition = ({ item, color }) => {
    return (
        <div className="cognition-cont">
            <div className="cognition-title">
                <div className="list-style" style={{ backgroundColor: color }}></div>
                <div className="cognition-title-text">{item.title}</div>
            </div>
            <div className="cognition-text">{item.content}</div>
        </div>

    );
};

export default Personality;


