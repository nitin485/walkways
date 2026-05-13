import React from "react";
import Banner from "../components/Banner"
import Categories from "../components/Categories";
import PROcateg from "../components/ProductRenderOnCateg"

function Home() {
  return (
    <div>
      <Banner />
      <Categories />
      {/* <ProductSection/> */}
      <PROcateg />
    </div>
  );
}

export default Home;
