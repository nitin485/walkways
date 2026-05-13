import React, { useEffect, useMemo, useState } from "react";
// import Banner from '../'
import Card from "../components/Card";

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // filters
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("default");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [priceRange, setPriceRange] = useState(15000);

  // views
  const [view, setView] = useState("grid");

  // pagination
  const [currentPage, setCurrentPage] = useState(1);

  // products per page
  const productsPerPage = 9;

  // fetch data
  useEffect(() => {
    fetch("/data/demoData.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  // categories
  const categories = [
    "all",
    "sneakers",
    "sports",
    "casual",
    "running",
    "formal",
  ];

  // premium tags
  const tags = [
    "trending",
    "best-seller",
    "new-arrival",
    "premium",
    "streetwear",
    "running",
    "casual",
    "sports",
    "retro",
    "limited",
  ];

  // FILTER + SORT
  const filteredProducts = useMemo(() => {
    let updated = [...products];

    // category
    if (category !== "all") {
      updated = updated.filter(
        (item) =>
          item.subCategory === category ||
          item.category === category
      );
    }

    // colors
    if (selectedColor) {
      updated = updated.filter((item) =>
        item.colors?.includes(selectedColor)
      );
    }

    // tags
    if (selectedTag) {
      updated = updated.filter((item) =>
        item.tags?.includes(selectedTag)
      );
    }

    // price
    updated = updated.filter(
      (item) => item.price <= priceRange
    );

    // sorting
    if (sort === "low") {
      updated.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      updated.sort((a, b) => b.price - a.price);
    }

    return updated;
  }, [
    products,
    category,
    selectedColor,
    selectedTag,
    priceRange,
    sort,
  ]);

  // pagination logic
  const totalPages = Math.ceil(
    filteredProducts.length / productsPerPage
  );

  const startIndex =
    (currentPage - 1) * productsPerPage;

  const endIndex =
    startIndex + productsPerPage;

  const currentProducts =
    filteredProducts.slice(startIndex, endIndex);

  return (
    <section className="bg-white min-h-screen pt-20">

      {/* HERO */}
      <div className="relative h-[260px] md:h-[320px] overflow-hidden">

        <img
        //   src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
        src="https://www.magnific.com/free-vector/modern-black-friday-sale-banner-template-with-3d-background-red-splash_5952228.htm#fromView=search&page=1&position=0&uuid=27940ebd-7936-4885-9917-8fc989032081&query=Banner+shoes"
          alt="banner"
          className="w-full h-full object-cover"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white">

          <h1 className="text-3xl md:text-5xl font-semibold tracking-[2px] uppercase">
            Men’s Sneakers Collection
          </h1>

          {/* breadcrumb */}
          {/*
          <p className="text-sm mt-3 text-zinc-200">
            Home / Shop
          </p>
          */}
        </div>
      </div>

      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-4 py-14">

        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10">

          {/* SIDEBAR */}
          <aside className="space-y-10">

            {/* CATEGORY */}
            <div>

              <h3 className="text-lg font-semibold uppercase tracking-wide border-b pb-3 mb-5">
                Categories
              </h3>

              <div className="flex flex-col gap-4 text-sm text-zinc-600">

                {categories.map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setCategory(item);
                      setCurrentPage(1);
                    }}
                    className={`text-left capitalize transition hover:text-black

                    ${
                      category === item
                        ? "text-black font-semibold"
                        : ""
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* PRICE */}
            <div>

              <h3 className="text-lg font-semibold uppercase tracking-wide border-b pb-3 mb-5">
                Price
              </h3>

              <div className="space-y-5">

                <input
                  type="range"
                  min="1000"
                  max="15000"
                  step="500"
                  value={priceRange}
                  onChange={(e) => {
                    setPriceRange(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="w-full accent-black cursor-pointer"
                />

                <div className="flex items-center justify-between text-sm text-zinc-600">

                  <span>
                    ₹1000
                  </span>

                  <span className="font-medium text-black">
                    ₹{priceRange}
                  </span>
                </div>

                {/* PRICE BUTTONS */}
                <div className="flex flex-wrap gap-2">

                  {[3000, 6000, 9000, 15000].map((price) => (
                    <button
                      key={price}
                      onClick={() => {
                        setPriceRange(price);
                        setCurrentPage(1);
                      }}
                      className={`border px-3 py-2 text-xs transition

                      ${
                        priceRange === price
                          ? "bg-black text-white border-black"
                          : "hover:bg-black hover:text-white"
                      }`}
                    >
                      Under ₹{price}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* COLORS */}
            <div>

              <h3 className="text-lg font-semibold uppercase tracking-wide border-b pb-3 mb-5">
                Colors
              </h3>

              <div className="flex flex-col gap-4">

                {[
                  "black",
                  "white",
                  "gray",
                  "blue",
                  "green",
                  "red",
                  "pink",
                  "purple",
                  "navy",
                  "orange",
                ].map((color) => (
                  <button
                    key={color}
                    onClick={() => {
                      setSelectedColor(
                        selectedColor === color
                          ? ""
                          : color
                      );

                      setCurrentPage(1);
                    }}
                    className={`flex items-center gap-3 text-sm capitalize transition

                    ${
                      selectedColor === color
                        ? "text-black font-semibold"
                        : "text-zinc-600"
                    }`}
                  >
                    <span
                      className="w-3 h-3 rounded-full border"
                      style={{
                        backgroundColor: color,
                      }}
                    />

                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* TAGS */}
            <div>

              <h3 className="text-lg font-semibold uppercase tracking-wide border-b pb-3 mb-5">
                Tags
              </h3>

              <div className="flex flex-wrap gap-2">

                {tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => {
                      setSelectedTag(
                        selectedTag === tag
                          ? ""
                          : tag
                      );

                      setCurrentPage(1);
                    }}
                    className={`border px-3 py-2 text-xs uppercase tracking-wide transition

                    ${
                      selectedTag === tag
                        ? "bg-black text-white border-black"
                        : "hover:bg-black hover:text-white"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* PROMO */}
            <div className="relative overflow-hidden">

              <img
                src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b"
                alt="promo"
                className="w-full h-[300px] object-cover"
              />

              <div className="absolute inset-0 bg-black/35" />

              <div className="absolute bottom-6 left-6 text-white z-10">

                <h2 className="text-3xl font-semibold uppercase">
                  New Arrivals
                </h2>

                <p className="text-sm mt-2">
                  Sale Off 30%
                </p>
              </div>
            </div>
          </aside>

          {/* PRODUCTS */}
          <div>

            {/* TOP BAR */}
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 border-b pb-5 mb-10">

              {/* VIEW BUTTONS */}
              <div className="flex items-center gap-3 text-zinc-600 text-sm">

                {/* GRID */}
                <button
                  onClick={() => setView("grid")}
                  className={`border px-3 py-2 transition

                  ${
                    view === "grid"
                      ? "bg-black text-white"
                      : "hover:bg-black hover:text-white"
                  }`}
                >
                  ⬛
                </button>

                {/* LIST */}
                <button
                  onClick={() => setView("list")}
                  className={`border px-3 py-2 transition

                  ${
                    view === "list"
                      ? "bg-black text-white"
                      : "hover:bg-black hover:text-white"
                  }`}
                >
                  ☰
                </button>
              </div>

              {/* RIGHT */}
              <div className="flex items-center gap-5 flex-wrap">

                <p className="text-sm text-zinc-500">
                  Showing {filteredProducts.length} products
                </p>

                {/* SORT */}
                <select
                  value={sort}
                  onChange={(e) => {
                    setSort(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="border px-4 py-2 text-sm outline-none"
                >
                  <option value="default">
                    Sort By
                  </option>

                  <option value="low">
                    Price Low → High
                  </option>

                  <option value="high">
                    Price High → Low
                  </option>
                </select>

                {/* RESET */}
                <button
                  onClick={() => {
                    setCategory("all");
                    setSort("default");
                    setSelectedColor("");
                    setSelectedTag("");
                    setPriceRange(15000);
                    setCurrentPage(1);
                  }}
                  className="border px-4 py-2 text-sm hover:bg-black hover:text-white transition"
                >
                  Reset
                </button>
              </div>
            </div>

            {/* PRODUCTS GRID/LIST */}
            {loading ? (

              <div className="h-[400px] flex items-center justify-center">
                <h2 className="text-zinc-500 text-lg">
                  Loading Products...
                </h2>
              </div>

            ) : (

              <div
                className={`

                ${
                  view === "grid"
                    ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8"
                    : "flex flex-col gap-6"
                }

              `}
              >

                {currentProducts.map((product) => (
                  <Card
                    key={product.id}
                    product={product}
                    view={view}
                  />
                ))}
              </div>

            )}

            {/* PAGINATION */}
            <div className="flex justify-center items-center gap-3 mt-14">

              {Array.from(
                { length: totalPages },
                (_, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      setCurrentPage(index + 1)
                    }
                    className={`w-10 h-10 border transition

                    ${
                      currentPage === index + 1
                        ? "bg-black text-white"
                        : "hover:bg-black hover:text-white"
                    }`}
                  >
                    {index + 1}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Shop;