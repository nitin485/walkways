import React from "react";
import {
  RiInstagramLine,
  RiTwitterXLine,
  RiYoutubeLine,
  RiArrowRightUpLine,
} from "@remixicon/react";

function Footer() {
  return (
    <footer className="bg-[#ffff] mt-32 border-t border-zinc-200">

      <div className="max-w-7xl mx-auto px-10 py-20">

        {/* top section */}
        <div className="flex justify-between items-start pb-20 border-b border-zinc-300">

          {/* left */}
          <div className="max-w-xl">

            <p className="uppercase tracking-[4px] text-sm text-zinc-500 mb-5">
              WalkWays®
            </p>

            <h1 className="text-6xl leading-[1.1] font-semibold tracking-tight text-black">
              Crafted for
              modern sneaker
              culture.
            </h1>

            <p className="text-zinc-600 mt-8 text-[15px] leading-8 max-w-lg">
              Premium footwear designed with a clean aesthetic,
              everyday comfort, and timeless streetwear influence.
            </p>

            {/* socials */}
            <div className="flex gap-5 mt-10">

              <div className="w-12 h-12 rounded-full border border-zinc-300 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
                <RiInstagramLine size={18} />
              </div>

              <div className="w-12 h-12 rounded-full border border-zinc-300 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
                <RiTwitterXLine size={18} />
              </div>

              <div className="w-12 h-12 rounded-full border border-zinc-300 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
                <RiYoutubeLine size={18} />
              </div>

            </div>
          </div>

          {/* right */}
          <div className="flex gap-28">

            {/* shop */}
            <div>
              <h2 className="uppercase text-sm tracking-[3px] text-zinc-400 mb-8">
                Shop
              </h2>

              <ul className="space-y-5 text-[15px] text-zinc-700">

                <li className="hover:text-black transition cursor-pointer">
                  Sneakers
                </li>

                <li className="hover:text-black transition cursor-pointer">
                  Running
                </li>

                <li className="hover:text-black transition cursor-pointer">
                  Basketball
                </li>

                <li className="hover:text-black transition cursor-pointer">
                  Casual
                </li>

                <li className="hover:text-black transition cursor-pointer">
                  New Arrivals
                </li>

              </ul>
            </div>

            {/* company */}
            <div>
              <h2 className="uppercase text-sm tracking-[3px] text-zinc-400 mb-8">
                Company
              </h2>

              <ul className="space-y-5 text-[15px] text-zinc-700">

                <li className="hover:text-black transition cursor-pointer">
                  About
                </li>

                <li className="hover:text-black transition cursor-pointer">
                  Journal
                </li>

                <li className="hover:text-black transition cursor-pointer">
                  Collaborations
                </li>

                <li className="hover:text-black transition cursor-pointer">
                  Careers
                </li>

                <li className="hover:text-black transition cursor-pointer">
                  Contact
                </li>

              </ul>
            </div>

            {/* newsletter */}
            <div className="w-[320px]">

              <h2 className="uppercase text-sm tracking-[3px] text-zinc-400 mb-8">
                Newsletter
              </h2>

              <p className="text-zinc-600 leading-7 text-[15px]">
                Receive updates on limited drops,
                exclusive collections, and early releases.
              </p>

              <div className="mt-8 border-b border-zinc-400 flex items-center justify-between pb-4">

                <input
                  type="email"
                  placeholder="Email address"
                  className="bg-transparent outline-none w-full text-[15px] placeholder:text-zinc-400"
                />

                <button className="group">

                  <RiArrowRightUpLine
                    size={24}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                  />

                </button>

              </div>

            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="flex justify-between items-center pt-8">

          <p className="text-sm text-zinc-500">
            © 2026 WalkWays. All rights reserved.
          </p>

          <div className="flex gap-10 text-sm text-zinc-500">

            <p className="hover:text-black transition cursor-pointer">
              Privacy
            </p>

            <p className="hover:text-black transition cursor-pointer">
              Terms
            </p>

            <p className="hover:text-black transition cursor-pointer">
              Cookies
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;