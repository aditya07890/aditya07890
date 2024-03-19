import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("white");
  const [textColor, setTextColor] = useState("black");
  console.log(color);
  const colors = ["red", "blue", "yellow", "green", "grey", "white"];
  const color1 = ["pink", "orange", "yellow", "brown", "white"];
  return (
    <>
      <div className="flex flex-col items-center p-3">
        <div
          style={{ backgroundColor: color }}
          className="flex flex-col gap-5 justify-center items-center rounded-lg border h-fit w-fit p-5"
        >
          <p className="text-3xl" style={{ color: textColor }}>
            {count}
          </p>
          <div className="flex items-center gap-2">
            <button
              className="bg-green-500 p-2 rounded"
              onClick={() =>
                count < 10 ? setCount(count + 1) : setCount(count)
              }
            >
              + Increment
            </button>
            <button
              disabled={count === 0}
              className="bg-lime-600 p-2 rounded"
              onClick={() =>
                count > 0 ? setCount(count - 1) : setCount(count)
              }
            >
              - Decrement
            </button>
            <button
              className="bg-gray-500 p-2 rounded"
              onClick={() => setCount(0)}
            >
              Reset
            </button>
          </div>
          <div className="flex items-center gap-2 bg-slate-300 rounded p-1">
            {colors.map((i) => {
              return (
                <button
                  style={{ backgroundColor: i }}
                  onClick={() => setColor(i)}
                >
                  {i}
                </button>
              );
            })}
          </div>
          <div className="flex items-center gap-2 bg-slate-400 rounded p-1">
            {color1.map((e) => {
              return (
                <button
                  style={{ backgroundColor: e }}
                  onClick={() => setTextColor(e)}
                >
                  {e}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
