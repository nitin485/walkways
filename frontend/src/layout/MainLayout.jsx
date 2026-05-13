// import Banner from "../components/Banner";
// import Bestsellers from "../components/Bestsellers";
import { ReactLenis } from "lenis/react";
// import Categories from "../components/Categories";
// import Card from "../components/Card";
import Nav from "../components/Nav";
// import ProductSection from "../components/ProductSection";
// import PROcateg from "../components/ProductRenderOnCateg";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
function MainLayout() {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <div className="">
        <Nav />
        <Outlet />
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default MainLayout;
