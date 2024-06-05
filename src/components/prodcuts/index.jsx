import { Rating } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const Products = () => {
  const data = useSelector((i) => i.products.value);
  console.log(data);
  return (
    <div className="bg-gray-200 p-2 gap-5 grid grid-cols-4">
      {data.map((product) => {
        return (
          <div key={product.id} className=" bg-white p-2 rounded-xl">
            <img
              src={product.profile_url}
              alt=""
              className="h-40 object-cover w-full"
            />
            <p>{product.title}</p>
            <p>{product.price}</p>
            <p className="text-green-500">{product.discountPercentage}%</p>
            <Rating name="read-only" value={product.rating} readOnly />
          </div>
        );
      })}
    </div>
  );
};

export default Products;
