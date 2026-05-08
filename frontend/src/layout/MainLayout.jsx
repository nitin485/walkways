import Banner from "../components/Banner";
import Bestsellers from "../components/Bestsellers";
import Categories from "../components/Categories";
import Card from "../components/Card";
import Nav from "../components/Nav";
function MainLayout() {
  return (
    <>
      <Nav />
      <Banner />
      <Categories />  
      <Bestsellers />
    </>
  );
}

export default MainLayout;
