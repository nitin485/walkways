import { useEffect, useState } from "react";


//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("/data/demoData.json")
//       .then((res) => res.json())
//       .then((data) => setProducts(data))
//       .catch((err) => console.log(err));
//   }, []);

//   const latest = products
//     .filter((item) => item.badges.includes("latest"))
//     .slice("0", "4");
//   const trending = products.filter((item) => item.badges.includes("latest"));
//   const bestseller = products.filter((item) => item.badges.includes("latest"));

function ProductRenderOnCateg() {
  return (
    <section className="py-12 ">
      <div className="max-w-7xl mx-auto px-4">
        {/* latest Arrivals  */}
        <div className="">
          <div className="flex  justify-between  uppercase text-center font-mono tracking-wide  ">
            <h1 className="uppercase text-center w-fit text-3xl tracking-widest font-semiold  ">
              Latest arrivals
            </h1>
            <button>
              <a
                href="#"
                className="uppercase bg-black text-white text-SM p-2 px-4 font-light opacity-95"
              >
                view all
              </a>
            </button>
          </div>

          {/* <div className=" grid border-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 "> */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6  bg-[#f3f4f6] mt-8 ">
            {/* {products
              .filter((item) => item.badges.includes("latest"))
              .map((item) => (
                <Card key={item.id} product={item} />
              ))} */}

            {/* {latest.map((item) => (
              <Card product={item} />
            ))} */}

            {latest.map((item) => (
              <Card key={item.id} heading={item} product={item} />
            ))}
          </div>
        </div>
        {/* trending */}
      </div>
    </section>
  );
}

export default ProductRenderOnCateg;
