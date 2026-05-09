import React, { useEffect, useState } from "react";
import ProductSection from "./ProductSection";

function ProductRenderOnCateg() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/demoData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  const latest = products
    .filter((item) => item.badges.includes("latest"))
    .slice(0, 4);

  const trending = products
    .filter((item) => item.badges.includes("trending"))
    .slice(0, 4);

  const bestseller = products
    .filter((item) => item.badges.includes("bestseller"))
    .slice(0, 4);

const explore = products
    .filter((item) => item.badges.includes("bestseller"))
    .slice(0, 4);
    
  return (
    <>
      <ProductSection
        heading="Latest Arrivals"
        products={latest}
      />

      <ProductSection
        heading="Trending Products"
        products={trending}
      />

      <ProductSection
        heading="Best Sellers"
        products={bestseller}
      />

   
    </>
  );
}

export default ProductRenderOnCateg;