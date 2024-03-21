import React from "react";
import imagb from "../images/John Doe.jpg";
import imagc from "../images/Jane Doe.jpg";
import image from "../images/Mike Rose.jpg";

const Designers = () => {
  const Card = [
    {
      id: 1,
      image: imagb,
      name: "John Doe ",
      postion: "CEO & Founder",
      text: "Phasellus eget enim eu lectus faucibus vestibulum.Suspendisse sodales pellentesque elementum.",
    },
    {
      id: 2,
      image: imagc,
      name: "Jane Doe",
      postion: "Designer",
      text: "Phasellus eget enim eu lectus faucibus vestibulum.Suspendisse sodales pellentesque elementum",
    },
    {
      id: 3,
      image: image,
      name: "Mike Ross",
      text: "Phasellus eget enim eu lectus faucibus vestibulum.Suspendisse sodales pellentesque elementum.",
      postion: "Architect",
    },
  ];
  return (
    <div className="p-10">
      <div className="text-4xl p-5">
        <p className="text-red-600 font-bold text-5xl">Designers.</p>
        <p className="bg-red-600  p-1 rounded w-10 h-2 mt-5"></p>
      </div>
      <div className="p-5 ">
        <p className="text-xl">The best team in the world.</p>
        <p className="text-xl gap-5 mt-2">
          We are lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className="text-xl gap-5 font-bold mt-5">
          Our designers are thoughtfully chosen:
        </p>
      </div>
      <div className="">
        <div className="flex flex-row border gap-3 ">
          {Card.map((j) => (
            <div className="bg-slate-300">
              <img src={j.image} alt="" />
              <p className="text-xl font-bold p-3">{j.name}</p>
              <p className="p-1 text-neutral-500">{j.postion}</p>
              <p className="p-3 font-semibold">{j.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Designers;
