import React from "react";

const ArrayDemo = () => {
  // const arr = [1, 2, 3, 4, 5, 6, 7];
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  // const arrlength = arr.length;
  // console.log(arr.length);
  // console.log(arr[arrlength - 1]);
  // arr.push(15);
  // arr.pop();
  // arr.unshift(0);
  // arr.shift();
  // console.log(arr.unshift());
  // console.log(arr.join("-"));
  // console.log(arr.reverse());
  // console.log(arr.sort());
  // console.log(arr.sort((a, b) => b - a));
  // arr[2] = 4;
  //console.log(arr.slice(0, 3));
  // const slicedarr = arr.slice(5);
  // console.log([arr.slice(5)]);
  //console.log(delete arr[2]);
  fruits.splice(2, 0, "Lemon", "Kiwi");
  return (
    <div>
      {fruits.splice}
      {/* <p>{arr}</p> */}
      {/* <p>{arrlength - 1}</p> */}
      {/* <p>{arr.join("-")}</p> */}
      {/* <p>{arr.unshift(1)}</p> */}
      {/* <p>{delete arr[2]}</p> */}
    </div>
  );
};

export default ArrayDemo;
