import React from "react";
import imgs from "../images/atrium.jpg";
import imga from "../images/bedroom.jpg";
import imgas from "../images/diningroom.jpg";
import imag from "../images/kitchenconcrete.jpg";
import imge from "../images/livingroom.jpg";
import imges from "../images/livingroom2.jpg";

const ShowCase = () => {
  const card = [
    {
      id: 1,
      image: imgs,
    },
    {
      id: 2,
      image: imga,
    },
    {
      id: 3,
      image: imgas,
    },
    {
      id: 4,
      image: imag,
    },
    {
      id: 5,
      image: imge,
    },
    {
      id: 6,
      image: imges,
    },
  ];
  return (
    <>
      <div className=" ml-10">
        <div className="text-4xl">
          <p className="px-10 text-red-500 font-bold text-5xl">Showcase.</p>
          <p className="bg-red-500 ml-10 p-1 rounded w-10 h-2 mt-5"></p>
        </div>
        <div className="grid grid-cols-2  justify-between p-5 min-h-svh gap-5">
          {card.map((i) => (
            <img src={i.image} alt="" className="h-[25rem] w-[35rem] gap-2" />
          ))}
        </div>
      </div>
    </>
  );
};

export default ShowCase;
