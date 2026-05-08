import React from "react";
import { RiShoppingCart2Line } from "@remixicon/react";
  

function Card({ product }) {
  // console.log(product?.thumbnail)
  return (
    <div
      className="  border-2    rounded-2xl overflow-hidden  w-72  border-[#ffffff] hover:scale-103
"
    >
      <div className="h-58 ">
        <img
          src={product?.images}
          alt="shoes"
          className="object-cover w-full h-full   "
        />
      </div>
      <div className=" flex flex-col  gap-1 pt-6 pl-2 h-full bg-[#ffffff]"> 
        <p className="uppercase">{product?.brand}</p>
        <p className="font-semibold text-lg opacity-90">{product?.title}</p>
        <p></p>

        {/* ================== */}
        <div className="flex items-center gap-2">
          <span className="text-yellow-500">★</span>

          <span className="text-sm font-medium">{product.rating}</span>

          <span className="text-sm text-gray-500">
            ({product.totalReviews})
          </span>
        </div>
        {/* ========================= */}
        <div className=" flex justify-between pl-1  ">
          <p className="font-mono font-semibold">
            <span>&#8377;</span>
            {product?.price}
          </p>
          <p className="line-through pr-4">
            <span>&#8377;</span>
            {product?.discountPercentage}
          </p>
        </div>
               {/* Add To Cart Icon */}
        <button className="text-black p-2.5 rounded-full bg-gray-50 hover:bg-black hover:text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer group">
  <RiShoppingCart2Line size={20} className="group-hover:scale-110 transition-transform duration-300" />
</button>
      </div>
    </div>
  );
}

export default Card;

// border-[ffffff]

//  border-[#ffffff]
