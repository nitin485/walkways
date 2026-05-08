const categ = [
  {
    type: "casual",
    image:
      "https://i.pinimg.com/control1/1200x/95/07/5a/95075a40865b7457b76b7651fdc5931d.jpg",
  },
  {
    type: "sports",
    image:
      "https://i.pinimg.com/736x/90/4f/4a/904f4ac784b2d6e369dfd37ff18a5483.jpg",
  },

  {
    type: "formal",
    image:
      "https://i.pinimg.com/736x/a0/dd/33/a0dd33d8213f6ff1b023426775533fda.jpg",
  },

  {
    type: "slippers",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnbPk5p1uveNfsrCkzr-yVcK5HE52OYPt2vQ&s",
  },
  {
    type: "ethnic",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7ynXYL3Czx7NkEUTN8C_3nimPU9em-u08Tg&s",
  },
];
function Categories() {
  return (
    <>
      <section className="py-4  mt-2  bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 ">
            <h1 className=" uppercase  tracking-widest   text-2xl text-center font-mono">categories</h1>
          {/* <div className=""> */}
          <ul className="grid grid-cols-5 gap-4 ">
            {categ.map((categ) => (
              <li key={categ.type}>
                <div className="">
                  <img
                    src={categ.image}
                    alt="shoes image"
                    className="w-full h-38 object-contain p-4
                    hover:scale-120"
                  />
                  {/* caption of shoes */}
                  <div className="text-sm uppercase text-center">
                    <h3>{categ.type}</h3>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {/* </div> */}
        </div>
      </section>
    </>
  );
}

export default Categories;

// casual, formal, sports, party, and ethnic shoes.
