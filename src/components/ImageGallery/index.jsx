import React, { useState } from "react";

const ImageGallery = () => {
  const [CurrentImage, setCurrentImage] = useState({
    id: 1,
    image: "https://source.unsplash.com/random/900x700/?lucknow/1",
  });

  const images = [
    { id: 1, image: "https://source.unsplash.com/random/900x700/?lucknow/1" },
    { id: 2, image: "https://source.unsplash.com/random/900x700/?lucknow/2" },
    { id: 3, image: "https://source.unsplash.com/random/900x700/?lucknow/3" },
    { id: 4, image: "https://source.unsplash.com/random/900x700/?lucknow/4" },
    { id: 5, image: "https://source.unsplash.com/random/900x700/?lucknow/5" },
    { id: 6, image: "https://source.unsplash.com/random/900x700/?lucknow/6" },
    { id: 7, image: "https://source.unsplash.com/random/900x700/?lucknow/7" },
    { id: 8, image: "https://source.unsplash.com/random/900x700/?lucknow/8" },
    { id: 9, image: "https://source.unsplash.com/random/900x700/?lucknow/9" },
    { id: 10, image: "https://source.unsplash.com/random/900x700/?lucknow/10" },
    { id: 11, image: "https://source.unsplash.com/random/900x700/?lucknow/11" },
    { id: 12, image: "https://source.unsplash.com/random/900x700/?lucknow/12" },
    { id: 13, image: "https://source.unsplash.com/random/900x700/?lucknow/13" },
    { id: 14, image: "https://source.unsplash.com/random/900x700/?lucknow/14" },
  ];
  return (
    <>
      <div className="flex justify-between bg-lime-400">
        <div className="gap-8 items-center p-5">
          <img src={CurrentImage.image} alt="" className=" rounded-2xl" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {images.map((i) => (
            <img
              src={i.image}
              onClick={() => setCurrentImage(i)}
              className="h-20 border border-black rounded-2xl"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageGallery;
