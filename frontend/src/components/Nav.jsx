import { RiShoppingCartFill } from "@remixicon/react";

function Nav() {
  return (
    <nav
      className="
        fixed top-0 left-0 w-full
        z-50
        bg-white/80
        backdrop-blur-md
        shadow-sm
        
      "
    >
      <div
        className="
          max-w-7xl mx-auto
          px-4 h-16
          flex items-center justify-between
          gap-4
        "
      >
        {/* Logo */}
        <h1
          className="
            text-2xl font-bold
            text-red-700
            tracking-wide
            cursor-pointer
          "
        >
          WalkWays
        </h1>

        {/* Search Bar */}
        <div className="relative flex-1 max-w-xl hidden md:block">
          <input
            type="text"
            placeholder="Search for shoes, brands..."
            className="
              w-full py-2 px-4 pr-24
              border border-gray-300
              rounded-full
              focus:outline-none
              focus:border-black
            "
          />

          <button
            className="
              absolute right-1 top-1
              bg-black text-white
              px-4 py-1
              rounded-full
              hover:bg-gray-800
              transition
            "
          >
            Search
          </button>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <button
            className="
              bg-gray-200
              hover:bg-gray-300
              px-4 py-2
              rounded-xl
              transition
              font-medium
            "
          >
            Log in
          </button>

          {/* Cart */}
          <button
            className="
              relative
              hover:scale-110
              transition duration-300
              cursor-pointer
            "
          >
            <RiShoppingCartFill size={26} />

            {/* Cart Count */}
            <span
              className="
                absolute
                -top-2 -right-2
                bg-red-500 text-white
                text-[10px]
                w-5 h-5
                rounded-full
                flex items-center justify-center
                font-semibold
              "
            >
              0
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
