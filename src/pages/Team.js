// import "../style/Home.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Team = () => {
    useEffect(() => {
        document.body.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Nav posi="absolute" />
            <div className="home-container">
            </div>
            <Footer />
        </>
    );
}

export default Team;