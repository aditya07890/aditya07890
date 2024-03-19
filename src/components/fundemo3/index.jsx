import React from "react";

const Clicked = () => {
  const handlesub = (a, b) => {
    const num = a - b;
    console.log(num);
  };
  const handleadd = (a, b) => {
    const sum = a + b;
    console.log(sum);
  };
  return (
    <div className="flex bg-red-400 gap-5">
      <button onClick={() => handlesub(50, 18)}>subtration</button>
      <button onClick={() => handleadd(50, 18)}>addition</button>
    </div>
  );
};

export default Clicked;
