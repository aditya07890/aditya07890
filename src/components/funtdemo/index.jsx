import React from "react";

const Functiondemo = () => {
  const handleclicked = () => {
    alert("clicked");
    handleprint();
  };
  function handleprint() {
    console.log("clicked");
  }
  return (
    <div className="flex flex-col gap-16  ">
      <button onClick={handleclicked} className="bg">
        Single Button Click
      </button>
      <br />
      <button onClick={handleclicked}>DubleButton Click</button>
      <br />
      <button onMouseOver={handleclicked}>Over Button</button>
      <br />
      <button onClick={() => alert("clicked")}>Button</button>
    </div>
  );
};

export default Functiondemo;
