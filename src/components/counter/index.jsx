import React from "react";
import { useState } from "react";

const Counters = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>
        <button>0</button>
      </div>
      <div>
        <button> + Increment</button>
      </div>
      <div>
        <button> - Decrement</button>
      </div>
    </div>
  );
};

export default Counters;
