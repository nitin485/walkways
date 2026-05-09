import React from "react";
import Card from "./Card";

function ProductSection({ heading, products }) {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">

        {/* heading */}
        <div className="flex justify-between items-center uppercase font-mono tracking-wide">

          <h1 className="text-3xl tracking-widest font-semibold">
            {heading}
          </h1>

          <button>
            <a
              href="#"
              className="uppercase bg-black text-white text-sm p-2 px-4"
            >
              View All
            </a>
          </button>
        </div>

        {/* products grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 mt-8">

          {products.map((item) => (
            <Card
              key={item.id}
              product={item}
            />
          ))}

        </div>
      </div>
    </section>
  );
}

export default ProductSection;