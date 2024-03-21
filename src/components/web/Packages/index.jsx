import React from "react";

const Packages = () => {
  return (
    <>
      <div className="mt-5 p-10">
        <div className="text-4xl p-5">
          <p className="text-red-500 font-bold text-5xl">Packages.</p>
          <p className="bg-red-500  p-1 rounded w-10 h-2 mt-5"></p>
        </div>
        <div className="p-5 ">
          <p className="font-serif">
            Some text our prices. Lorem ipsum consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 text-center">
          <div className="flex flex-col">
            <p className="bg-gray-600 text-center text-white py-5">Basic</p>
            <div className="bg-neutral-300 *:p-3 *:border *:font-semibold">
              <p>Floorplanning</p>
              <p>10 hours support</p>
              <p>Photography</p>
              <p>20% furniture discount</p>
              <p>Good deals</p>
              <p>
                $ 199 <p>per room</p>
              </p>
              <p className="h-24">Sign Up</p>
            </div>
          </div>
          <div className="flex flex-col text-center">
            <p className="bg-red-600 text-xl  py-4">Pro</p>
            <div className="bg-neutral-300 *:p-3 *:border *:font-semibold ">
              <p>Floorplanning</p>
              <p>50 hours support</p>
              <p>50 hours support</p>
              <p>50% furniture discount</p>
              <p>GREAT deals</p>
              <p>
                $ 249 <p>per room</p>
              </p>
              <p className="justify-center items-center h-24">Sign Up</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Packages;
