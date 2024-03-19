import React from "react";

const Demo = () => {
  const handleadd = (a, b) => {
    const Num = a + b;
    console.log("reult:", Num);
  };
  return (
    <div className="flex flex-col gap-15 p-5 box-border bg-slate-400">
      <button onClick={() => handleadd(25, 45)}>Add Number 25 or 45</button>
      <button onClick={() => handleadd(50, 15)}>Add Number 50 or 15</button>
    </div>
  );
};

export default Demo;
