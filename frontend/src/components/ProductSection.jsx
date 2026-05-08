import React, { useEffect, useState } from "react";
import Card from "./Card";

function ProductSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/demoData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  const latest = products.filter((item) => item.badges.includes("latest"));
  const trending = products.filter((item) => item.badges.includes("latest"));
  const bestseller = products.filter((item) => item.badges.includes("latest"));

  return (
    <section className="py-8 ">
      <div className="max-w-7xl mx-auto px-4">
        {/* latest Arrivals  */}
        <div className="">
          <div className="">
            <h1 className="uppercase text-center text-2xl font-mono tracking-wide">
              Latest arrivals
            </h1>
          </div>
          {/* <div className=" grid border-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 "> */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6  bg-[#f3f4f6] ">
            {/* {products
              .filter((item) => item.badges.includes("latest"))
              .map((item) => (
                <Card key={item.id} product={item} />
              ))} */}

            {/* {latest.map((item) => (
              <Card product={item} />
            ))} */}

            {latest.map((item) => (
              <Card product={item} />
            ))}
          </div>
        </div>  
        {/* trending */}
      </div>
    </section>
  );
}

export default ProductSection;
