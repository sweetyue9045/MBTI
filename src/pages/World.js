import "../style/World.css";
import { useEffect } from "react";
import WV_img1 from "../assets/images/WV_img1.png";
import WV_img2 from "../assets/images/WV_img2.png";
import WV_img3 from "../assets/images/WV_img3.png";
import Btn from "../assets/images/downBtn.png";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import fourDimensionData from "../assets/jsons/world.json";

var h_top = [];
const World = () => {
    // const [offsetY, setOffsetY] = useState(0);
    const scrolltop = () => {
        h_top = [
            document.getElementById("target0").offsetTop,
            document.getElementById("target1").offsetTop,
            document.getElementById("target2").offsetTop,
            document.getElementById("target3").offsetTop,
        ];
    }
    useEffect(() => {
        document.body.scrollTo(0, 0);
        scrolltop();
    }, []);

    const scrollToElement = (buttonId, targetId) => {
        const button = document.getElementById(buttonId);
        const target = document.getElementById(targetId);

        if (button && target) {
            button.addEventListener('click', () => {
                const targetOffsetTop = target.offsetTop;
                if(targetOffsetTop==0){
                    const scrollOptions = {
                        top: targetOffsetTop,
                        behavior: 'smooth'
                    };
                    document.body.scroll(scrollOptions);
                }
                else{
                    const scrollOptions = {
                        top: targetOffsetTop + 100,
                        behavior: 'smooth'
                    };
                    document.body.scroll(scrollOptions);
                }
                
                console.log(targetOffsetTop)
            });
        }
    };
    const handleScroll = event => {
        const offsetY = document.documentElement.scrollTop + document.body.scrollTop
        if (offsetY >= h_top[3] - 300) {
            for (var i = 0; i <= 3; i++) {
                document.getElementById("btn" + i).classList.remove("bottom_line")
            }
            document.getElementById("btn3").classList.add("bottom_line")
        }
        else if (offsetY >= h_top[2] - 300 && offsetY <= h_top[3] + 100) {
            for (var i = 0; i <= 3; i++) {
                document.getElementById("btn" + i).classList.remove("bottom_line")
            }
            document.getElementById("btn2").classList.add("bottom_line")
        }
        else if (offsetY >= h_top[1] - 300 && offsetY <= h_top[2] + 100) {
            for (var i = 0; i <= 3; i++) {
                document.getElementById("btn" + i).classList.remove("bottom_line")
            }
            document.getElementById("btn1").classList.add("bottom_line")
        }
        else if (offsetY >= h_top[0] - 300 && offsetY <= h_top[1] + 100) {
            for (var i = 0; i <= 3; i++) {
                document.getElementById("btn" + i).classList.remove("bottom_line")
            }
            document.getElementById("btn0").classList.add("bottom_line")
        }
    };

    useEffect(() => {
        document.body.addEventListener('scroll', handleScroll);
        return () => {
            document.body.removeEventListener('scroll', handleScroll);
        };
    }, []);

    var cover = "cover1";

    if (document.body.clientWidth > 430) {
        cover = "cover1"
        console.log(cover)
    }
    else {
        cover = "cover2"
        console.log(cover)

    }

    return (
        <>
            <Nav posi="relative" />
            <div className="world-container">
                <div className="tab-bar">
                    <div className="progress-bar">
                        <a id="btn0" className="progress-btn bottom_line" onClick={() => scrollToElement("btn0", "target0")}>世界觀介紹</a>
                        <a id="btn1" className="progress-btn" onClick={() => scrollToElement("btn1", "target1")}>MBTI是什麼</a>
                        <a id="btn2" className="progress-btn" onClick={() => scrollToElement("btn2", "target2")}>四大維度介紹</a>
                        <a id="btn3" className="progress-btn" onClick={() => scrollToElement("btn3", "target3")}>認知功能介紹</a>
                    </div>
                </div>
                <div className="main-content">
                    <div id="target0" className="text-content">
                        <ContentTitle item="世界觀介紹" fz={cover == "cover1" ? "36px" : "23px"} />
                        <img src={WV_img1} alt="WV_img1.png" />
                        <div className="content-cont">
                            一個誕生於宇宙，沒有姓名，不知道自己是誰的生物，"0號"，探索宇宙的過程，遇見了不同個性的心智怪獸們，最終融合並誕生成獨一無二的自己。
                        </div>
                        <div className="content-cont">
                            0號身上的圖案有四個顏色，代表分類人格的四個氣質。心智小怪獸是將MBTI的心智功能們擬人化，0號與小怪獸們的融合，象徵活在世界上探索自我的大家，最終找到自己的過程。
                        </div>
                        <div className="content-cont">
                            每個人格身上也都有小怪獸的特徵，搭配分類的顏色組合而成。
                        </div>
                        <img src={WV_img2} alt="WV_img2.png" />
                    </div>
                    <div id="target1" className="text-content">
                        <ContentTitle item="MBTI是什麼" fz={cover == "cover1" ? "36px" : "23px"}/>
                        <div className="content-cont">
                            MBTI 中文全名為邁爾斯-布里格斯性格分類指標（Myers-Briggs Type Indicator），是一種人格類型學的分類模式，為美國作家Katharine Cook Briggs 和女兒 Isabel Briggs Myers 因對心理學的愛好，以心理學家榮格在 1921 年的《心理類型》為基礎，深入研究後提出。
                        </div>
                        <div className="content-cont">
                            自1998年之後的版本學界普遍認為MBTI具備一定的信度與效度。在逐漸被心理學界認可後，運用在職場、教育等領域的人員評估。
                        </div>
                        <ContentTitle item="理論基礎" fz={cover == "cover1" ? "30px" : "22px"} mt="50px"/>
                        <div className="content-cont">
                            性格分類源自卡爾·榮格的主觀觀察，而非控制實驗。榮格認為人的意識具有四種功能，各有兩個極端。兩種非理性功能，為知覺和直覺；兩種理性功能，為思維和情感；意識的四種功能又受到兩種態度，外向性與內向性的影響。MBTI評量就是依此理論為基礎所發展出來的。
                        </div>
                        <ContentTitle item="MBTI的爆紅" fz={cover == "cover1" ? "30px" : "22px"} mt="50px"/>
                        <div className="content-cont">
                            因為MBTI的爆紅，網路上已經有許多免費網站可以測驗，其中最受歡迎的是來自英國的公司 NERIS Analytics Limited 架設的平台：<a href="https://www.16personalities.com/free-personality-test">16Personalities</a>，將人格們賦予角色名稱和各種形象圖，讓使用者們更感覺有趣。
                        </div>
                    </div>
                    <div id="target2" className="text-content">
                        <ContentTitle item="四大維度介紹" fz={cover == "cover1" ? "36px" : "23px"}/>
                        <img src={WV_img3} alt="WV_img1.png" />

                        <div className="content-cont">
                            MBTI 人格有四個維度，就是人格所代表的四個英文字母。通過了解人們在做事、獲取信息、決策等方面的偏好，從四個角度對人定義出功能並進行分析。
                        </div>
                        <div className="content-cont">
                            一個健全的人會使用全部的功能，並不是你測出來是 E（外向），你就一定不會運用或有 I（內向）的特質，會因為情境和狀態選擇這八項功能做搭配使用，而使用的頻率和優勢變成你的代表人格。
                        </div>
                        <div className="content-cont">
                            每個維度有兩個方向，總共是八個功能，分別是：
                        </div>
                        {fourDimensionData.map((item) => {
                            return (
                                <FourDimension
                                    id={item.listTitle}
                                    item={item}
                                />
                            );
                        })}

                    </div>
                    <div id="target3" className="text-content">
                        <ContentTitle item="認知功能介紹" fz={cover == "cover1" ? "36px" : "23px"}/>
                        <div className="content-cont">
                            MBTI 中文全名為邁爾斯-布里格斯性格分類指標（Myers-Briggs Type Indicator），是一種人格類型學的分類模式，為美國作家Katharine Cook Briggs 和女兒 Isabel Briggs Myers 因對心理學的愛好，以心理學家榮格在 1921 年的《心理類型》為基礎，深入研究後提出。
                        </div>
                    </div>
                </div>
            </div>
            <div id="upbtn" className="upbtn" onClick={() => scrollToElement("upbtn", "nav" ,"-100")}>
                <img src={Btn} alt="" style={{ display: cover == "cover2" ? "block" : "none" }} />
            </div>
            <Footer />
        </>
    );
}
const ContentTitle = ({ item, fz, mt }) => {
    return (
        <div className="content-title" style={{ fontSize: fz, marginTop: mt }}>
            {item}
        </div>
    );
};

const FourDimension = ({ item }) => {
    return (
        <div className="fourDimension-cont">
            <div className="fourDimension-title">
                <div className="list-style"></div>
                <div className="fourDimension-title-text">{item.listTitle}</div>
            </div>
            <div className="fourDimension-content">{item.description}</div>
            <div className="fourDimension-twoSide">
                <img src={item.twoSide[0].image} alt={item.twoSide[0].twoSideTitle + ".png"} />
                <div className="fourDimension-twoSide-cont">
                    <div className="fourDimension-twoSide-title">{item.twoSide[0].twoSideTitle}</div>
                    <div className="fourDimension-twoSide-text">{item.twoSide[0].twoSideDescription}</div>
                </div>
            </div>
            <div className="fourDimension-twoSide">
                <img src={item.twoSide[1].image} alt={item.twoSide[1].twoSideTitle + ".png"} />
                <div className="fourDimension-twoSide-cont">
                    <div className="fourDimension-twoSide-title">{item.twoSide[1].twoSideTitle}</div>
                    <div className="fourDimension-twoSide-text">{item.twoSide[1].twoSideDescription}</div>
                </div>
            </div>
        </div>
    );
};
export default World;