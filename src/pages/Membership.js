import { useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Membership = () => {
    useEffect(() => {
        document.body.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Nav posi="absolute" />
            <div className="membership-container">
            </div>
            <Footer />
        </>
    );
}

export default Membership;