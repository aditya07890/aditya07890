import React from "react";
import ShowCase from "../showcase";
import Services from "../Services";

const InteriorDesign = () => {
  return (
    <>
      <div className="flex">
        <div className="bg-red-500 w-80 max-h-full ">
          <div className=" grid gap-2 p-8 text-white text-4xl ">
            Company Name
          </div>
          <div className="grid  gap-5 p-5 text-white text-xl">
            <p className="hover:bg-white hover:text-black">Home</p>
            <p className="hover:bg-white hover:text-black">Showcase</p>
            <p className="hover:bg-white hover:text-black">Servies</p>
            <p className="hover:bg-white hover:text-black">Designers</p>
            <p className="hover:bg-white hover:text-black">Packages</p>
            <p className="hover:bg-white hover:text-black">Contact</p>
          </div>
        </div>
        <div className="">
          <div className="text-7xl p-10 ">Interior Design</div>
          <ShowCase />
          <Services />
        </div>
      </div>
    </>
  );
};

export default InteriorDesign;
