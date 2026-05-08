import React, { useEffect, useState } from "react";
import Card from "./Card";

function Bestsellers() {
  const [bestSeller, setBestSeller] = useState([]);

  // useEffect(() => {
  //   fetch("/data/demoData.json")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err));
  // }, []);

  useEffect(() => {
    fetch("/data/demoData.json")
      .then((res) => res.json())
      .then((data) => setBestSeller(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <section className="py-8 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="">
          <h1 className="uppercase text-center text-2xl font-mono tracking-wide">
            Latest arrivals
          </h1>
        </div>
        {/* <div className=" grid border-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 "> */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6  bg-[#f3f4f6] ">
          {/* {
            bestSeller.map((item)=>{
            return  <Card key={item.id} product={item }/>
                  })
          } */}
          {bestSeller
            .filter((item) => item.badges.includes("best-seller"))
            .map((item) => (
              <Card key={item.id} product={item} />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Bestsellers;
