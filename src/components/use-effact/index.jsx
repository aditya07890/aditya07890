import React, { useState, useEffect } from "react";
import img from "../image/amaz.jpeg";
import imge from "../image/minitv.jpeg";
import imgee from "../image/amazon1.jpeg";
import img3 from "../image/ronte.jpeg";
import img4 from "../image/same.jpeg";
import img5 from "../image/amer.jpeg";
import img6 from "../image/solser.jpeg";

const Imageslider = () => {
  const [count, setCount] = useState(0);
  const images = [
    { id: 1, image: img },
    { id: 2, image: imge },
    { id: 3, image: imgee },
    { id: 4, image: img3 },
    { id: 5, image: img4 },
    { id: 6, image: img5 },
    { id: 7, image: img6 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  const prevImage = () => {
    setCount((prevCount) =>
      prevCount === 0 ? images.length - 1 : prevCount - 1
    );
  };

  const nextImage = () => {
    setCount((prevCount) => (prevCount + 1) % images.length);
  };

  return (
    <div className="bg-black text-white">
      <div className="">
        <button onClick={prevImage}>prev</button>
        <img src={images[count].image} alt="" />
        <button onClick={nextImage}>next</button>
      </div>
    </div>
  );
};

export default Imageslider;
