import "../style/Personality.css";
import Nav from "../components/Nav";
import { Link , useParams} from "react-router-dom";
import typeData from "../assets/jsons/personality.json";
import Footer from "../components/Footer";


function Personality() {
    const {typeId} = useParams()
    const Personality = typeData.find(
        (x) => x.typeLetter == typeId
    );
    console.log(Personality)
    return (
        <>
            <Nav posi="absolute" />
            <div className="personality-container">
                <div className="Banner">
                    <div className="intro">
                        <div className="item typeLetter">{Personality.typeLetter}</div>
                        <div className="item">
                            透過MBTI來認識<br />誕生於宇宙中<br />獨一無二的自己
                        </div>

                    </div>
                    <img
                        className=""
                        src={require("../assets/images/" + typeId + "_light.png")}
                    />
                </div>
                <div className="home-content">
                    {/* {homeData.map((item) => {
                        return <Section item={item}></Section>;
                    })} */}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Personality;


