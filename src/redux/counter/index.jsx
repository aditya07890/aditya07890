import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../counterslice";

export function Countera() {
  const count = useSelector((state) => state.counter1.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex gap-5 p-5">
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
