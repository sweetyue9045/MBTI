import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;