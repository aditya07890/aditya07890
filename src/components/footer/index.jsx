import React from "react";
import imgs from "../image/amalogo-removebg-preview.png";
const Footer = () => {
  return (
    <div>
      <div className="flex flex-col bg-gray-800 h-[160px]">
        <div className="flex flex-grid gap-3 pt-5">
          <div className="h-8 ">
            <img src={imgs} alt="" className="" />
          </div>
          <img
            src="https://m.media-amazon.com/images/G/31/img17/Home/AmazonTV/Young_Janta_ko_yahi_mangta.png"
            alt=""
            className="h-4"
          />
          <img
            src="https://m.media-amazon.com/images/G/31/img17/Home/AmazonTV/Web/images/play-store-icon.svg0"
            alt=""
            className="h-16 w-20"
          />
          <img
            src="https://m.media-amazon.com/images/G/31/img17/Home/AmazonTV/Web/images/app-store-icon.svg"
            alt=" "
            className="h-16 w-20"
          />
          <div className="h-30 w-20">
            <img
              src="https://m.media-amazon.com/images/G/31/img17/Home/AmazonTV/qrcode.jpeg"
              alt=""
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
