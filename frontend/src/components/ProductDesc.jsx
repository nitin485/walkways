import { useState } from "react";
import {
  FaHeart,
  FaShoppingBag,
  FaStar,
  FaStarHalfAlt,
  FaArrowRight,
} from "react-icons/fa";
import { MdKeyboardArrowDown, MdVerifiedUser } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";

export default function PremiumProductPage() {
  const images = [
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1400&auto=format&fit=crop",
  ];

  const relatedProducts = [
    { title: "Aura Runner Gen 2", price: "$160", image: images[0], tag: "Best Seller" },
    { title: "Aura Stealth", price: "$210", image: images[1], tag: "New" },
    { title: "Aura Air Cushion", price: "$145", image: images[2], tag: "Classic" },
    { title: "Aura Pro-Lift", price: "$190", image: images[3], tag: "Pro" },
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [selectedSize, setSelectedSize] = useState(9);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="min-h-screen bg-[#fcfcfb] text-[#111] selection:bg-black selection:text-white">
      {/* --- ANNOUNCEMENT BAR --- */}
      <div className="bg-black py-2.5 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-white">
        Free express shipping on orders over $200
      </div>

      {/* --- NAVBAR --- */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-md">
        {/* <nav className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 lg:px-12">
          <h1 className="text-2xl font-black tracking-tighter">AURA.</h1>
          
          <div className="hidden items-center gap-10 md:flex">
            {["New Arrivals", "Men", "Women", "Performance", "Sale"].map((item) => (
              <a key={item} href="#" className="text-[13px] font-bold uppercase tracking-wider text-black/60 hover:text-black transition-colors">
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <button className="relative transition-transform hover:scale-110">
              <FaHeart size={20} />
            </button>
            <button className="relative transition-transform hover:scale-110">
              <FaShoppingBag size={20} />
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[10px] font-bold text-white">
                {quantity}
              </span>
            </button>
          </div>
        </nav> */}
      </header>

      <main className="mx-auto max-w-[1440px] px-6 py-8 lg:px-12 lg:py-18">
        {/* --- BREADCRUMBS --- */}
        {/* <nav className="mb-8 flex items-center gap-2 text-[12px] font-medium uppercase tracking-widest text-black/40">
          <span>Home</span> <span>/</span> <span>Footwear</span> <span>/</span> <span className="text-black">Speed Elite</span>
        </nav> */}

        <section className="grid items-start gap-12 lg:grid-cols-12">
          {/* --- LEFT: IMAGE GALLERY --- */}
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="grid gap-4 md:grid-cols-2">
              {images.map((img, i) => (
                <div key={i} className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-[#f3f3f1]">
                  <img
                    src={img}
                    alt={`Product view ${i}`}
                    className="h-full w-full object-cover mix-blend-multiply transition duration-700 group-hover:scale-110"
                  />
                  {i === 0 && (
                    <span className="absolute left-6 top-6 rounded-full bg-black px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white">
                      Top Rated
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* --- RIGHT: PRODUCT INFO --- */}
          <aside className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-32">
            <div className="flex flex-col">
              <div className="mb-2 flex items-center gap-2 text-orange-500">
                <div className="flex text-xs">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                </div>
                <span className="text-sm font-bold text-black">4.8</span>
                <span className="text-sm text-black/40">(124 Reviews)</span>
              </div>

              <h1 className="text-5xl font-black leading-[0.9] tracking-tight sm:text-6xl">
                Aura Speed Elite
              </h1>
              
              <div className="mt-6 flex items-baseline gap-4">
                <span className="text-3xl font-black">$180.00</span>
                <span className="text-xl text-black/30 line-through font-medium">$240.00</span>
              </div>

              <p className="mt-6 text-lg leading-relaxed text-black/60">
                Engineered for explosive pace. The Speed Elite features our proprietary 
                <span className="text-black font-medium"> AuraFoam+</span> tech for 15% more energy return.
              </p>

              {/* COLORS */}
              {/* <div className="mt-10">
                <h3 className="text-sm font-bold uppercase tracking-widest">Color: <span className="text-black/40">Ghost White</span></h3>
                <div className="mt-4 flex gap-4">
                  {['bg-white', 'bg-black', 'bg-blue-600'].map((color, i) => (
                    <button key={i} className={`h-12 w-12 rounded-full border-2 ${i === 0 ? 'border-black ring-2 ring-black/10 ring-offset-2' : 'border-transparent'} ${color} shadow-inner transition-transform active:scale-90`} />
                  ))}
                </div>
              </div> */}

              {/* SIZES */}
              <div className="mt-10">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-sm font-bold uppercase tracking-widest">Select Size (US)</h3>
                  <button className="text-[12px] font-bold uppercase tracking-tighter underline underline-offset-4">Size Guide</button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[7, 8, 9, 10, 11, 12].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`h-14 rounded-xl border-2 text-sm font-bold transition-all ${
                        selectedSize === size
                          ? "border-black bg-black text-white"
                          : "border-black/5 bg-white hover:border-black/20"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* ACTIONS */}
              <div className="mt-10 space-y-4">
                <div className="flex gap-4">
                  <div className="flex items-center rounded-2xl border-2 border-black/5 bg-white px-2">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 font-bold">-</button>
                    <span className="w-8 text-center font-bold">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="p-3 font-bold">+</button>
                  </div>
                  <button className="flex-1 rounded-2xl bg-black py-5 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-zinc-800 active:scale-[0.98]">
                    Add To Cart
                  </button>
                </div>
                <button className="w-full rounded-2xl border-2 border-black/5 bg-[#f3f3f1] py-5 text-sm font-bold uppercase tracking-widest transition-all hover:border-black">
                  Express Checkout
                </button>
              </div>

              {/* TRUST BADGES */}
              <div className="mt-10 grid grid-cols-2 gap-4 border-t border-black/5 pt-10">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/5"><TbTruckDelivery size={20}/></div>
                  <span className="text-[12px] font-bold uppercase leading-tight">Free Next Day<br/>Delivery</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/5"><TbReplace size={20}/></div>
                  <span className="text-[12px] font-bold uppercase leading-tight">30-Day Risk Free<br/>Trial</span>
                </div>
              </div>
            </div>
          </aside>

          
        </section>

        {/* --- RELATED SECTION --- */}
        <section className="mt-32">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="text-4xl font-black tracking-tight">Pairs well with</h2>
              <p className="mt-2 text-black/50">Complete your performance kit with these essentials.</p>
            </div>
            <button className="group flex items-center gap-2 font-bold uppercase tracking-widest text-sm">
              View All <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((product, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative aspect-square overflow-hidden rounded-[32px] bg-[#f3f3f1]">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-cover mix-blend-multiply transition duration-500 group-hover:scale-105"
                  />
                  <button className="absolute bottom-4 right-4 translate-y-4 rounded-full bg-white p-4 opacity-0 shadow-xl transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <FaShoppingBag size={18} />
                  </button>
                </div>
                <div className="mt-6 px-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold">{product.title}</h3>
                    <span className="font-black">{product.price}</span>
                  </div>
                  <p className="mt-1 text-sm text-black/40">{product.tag}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      {/* <footer className="mt-32 bg-black py-20 text-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="grid gap-16 md:grid-cols-4">
            <div className="col-span-2">
              <h2 className="text-4xl font-black italic tracking-tighter">AURA.</h2>
              <p className="mt-6 max-w-sm text-lg text-white/50">
                The future of footwear isn't just about style—it's about the science of movement. Join the elite.
              </p>
              <div className="mt-10 flex gap-4">
                <input type="email" placeholder="Email for drops" className="w-full max-w-xs border-b border-white/20 bg-transparent py-3 outline-none focus:border-white transition-colors" />
                <button className="font-bold uppercase tracking-widest text-sm">Join</button>
              </div>
            </div>
            {['Shop', 'Company'].map((cat) => (
              <div key={cat}>
                <h3 className="mb-6 font-bold uppercase tracking-widest text-xs text-white/40">{cat}</h3>
                <ul className="space-y-4 font-bold">
                  {['New Releases', 'Outlet', 'Sustainability', 'Technology'].map(link => (
                    <li key={link} className="hover:text-white/60 cursor-pointer">{link}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-20 border-t border-white/10 pt-10 text-[11px] font-bold uppercase tracking-[0.2em] text-white/30">
            © 2026 Aura Performance Lab. All Rights Reserved.
          </div>
        </div>
      </footer> */}


    </div>
  );
}