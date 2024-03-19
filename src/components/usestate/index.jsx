import React, { useState } from "react";

const UseStateDemo = () => {
  const [open, setOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState({});

  const categories = [
    {
      id: 1,
      name: "Tranding Top-10",
      button: "click",
      products: [
        {
          id: 101,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/8e028501f85e943dd732536f8ebc40e262aa665ce1906790618ec24d1b447c4f.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 102,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/867e034ae26de6f30ddf1453c28302d9abd7bc679c49dee1d5c4fb5375a3aefd.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 103,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/c0981e3b601f9e49d8cfe174a4a307ccd61893aec892b8061bb377891a0370f5.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 104,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/0d48af3bfaae5d42b1cfc62e96d6f600401a8116ec0d3f9a1d413fdae98487ec.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 105,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/ccf57f9d6b7719fbb5766607d163c46c37280a1340705deb88c22486b307a212.__SX330__SY186__QL60__._TTH_.jpg",
        },
      ],
    },
  ];

  const toggleCategory = (categoryId) => {
    setCategoryOpen((prevState) => ({
      ...prevState,
      [categoryId]: !prevState[categoryId],
    }));
  };
  return (
    <div className="flex flex-col gap-2 p-5">
      <button onClick={() => setOpen(!open)}>Toggle Images</button>
      {open && (
        <div>
          {categories.map((e) => (
            <div key={e.id}>
              <p>{e.name}</p>
              <div className="flex">
                {e.products.map((j) => (
                  <div key={j.image}>
                    <img
                      src={j.image}
                      alt=""
                      style={{ display: categoryOpen[e.id] ? "block" : "none" }}
                    />
                  </div>
                ))}
              </div>
              <button onClick={() => toggleCategory(e.id)}>Images</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UseStateDemo;
