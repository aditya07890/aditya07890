import React from "react";

const Functiondemo1 = () => {
  const handlecall = (name) => {
    console.log(name);
    if (!name) {
      alert("Who are Calling you");
    } else {
      alert(`Hello ${name}`);
    }
  };
  return (
    <div>
      <button onClick={() => handlecall("Aimr")}>Call Aimr</button>
      <br />
      <button onClick={() => handlecall("Aditya")}>Call Aditya</button>
      <br />
      <button onClick={() => handlecall("Ajay")}>Call Dimple</button>
      <br />
      <button onClick={() => handlecall("Shivam")}>Call Shivam</button>
      <br />
      <button onClick={() => handlecall()}>Call</button>
    </div>
  );
};

export default Functiondemo1;
