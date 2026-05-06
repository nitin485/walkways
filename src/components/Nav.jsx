import { RiShoppingCartFill } from "@remixicon/react";
function Nav() {
  return (
    <nav className="py-4   bg-gray-100 ">
      <div
        className="max-w-7xl mx-auto px-4 bg-grey-400    h-16
      flex flex-col md:flex-row md:items-center md:justify-between gap-3 "
      >
        {/* logo */}
        <h1 className="text-xl font-bold text-red-800 text-shadow-amber-900">Walkways</h1>

        {/* search bar */}
        <div className="relative w-full    md:max-w-xl ">
          <input
            type="text"
            placeholder="Search for shoes , brands..."
            className="w-full p-2 pr-24 border focus:border-red-500  00 rounded-3xl focus:outline-none"
          />
          <button className="absolute right-1 top-1 bg-[#111827] text-white px-3 py-1 rounded-3xl hover:bg-sky-700">
            Search
          </button>
        </div>

        {/* sign in and cart btn */}
        <div className="flex justify-center items-center ">
          <button className="bg-[#E5E4E2] text-black px-4 py-2 rounded-xl w-full md:w-auto ">
            Log in
          </button>
          <button className="flex ml-4 relative   ">
            <RiShoppingCartFill className="my-icon " size={22} />
            <span className="absolute left-6 bottom-2">0</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
