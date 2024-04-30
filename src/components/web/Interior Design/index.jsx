import React, { useState } from "react";
import ShowCase from "../showcase";
import Services from "../Services";
import Designers from "../Designers";
import Packages from "../Packages";
import Contact from "../Contact";
import { Button, Drawer } from "@mui/material";

const InteriorDesign = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex">
        <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
          <div className="bg-red-500 w-80 min-h-full">
            <div className=" grid gap-2 p-8 text-white text-4xl  ">
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
        </Drawer>
        <div className="">
          <Button varient="contained" onClick={() => setOpen(true)}>
            Drawer Open
          </Button>
          <div className="text-7xl font-bold p-10 ml-10 mt-10">
            Interior Design
          </div>
          <ShowCase />
          <Services />
          <Designers />
          <Packages />
          <Contact />
          <div className="bg-slate-400 h-24">
            <p className="text-end items-center pt-12 pr-12">
              Powered by w3.css
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InteriorDesign;
