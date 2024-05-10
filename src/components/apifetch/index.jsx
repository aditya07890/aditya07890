import { CircularProgress, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getPostsFn = () => {
    setIsLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts?q=${search}`)
      .then((res) => res.json())
      .then((res) => {
        setIsLoading(false);
        setData(res);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getPostsFn();
  }, [search]);

  return (
    <>
      <div className="flex justify-between p-2 items-center">
        <p className="font-semibold">Posts Name Api json</p>
        <TextField
          placeholder="Search Posts"
          size="small"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center h-96">
          <CircularProgress color="success" />
          Loading...
        </div>
      ) : (
        <div className="bg-gray-200 p-2 gap-5 grid grid-cols-4">
          {data.map((post) => (
            <div key={post.id} className=" bg-white p-2 rounded-xl">
              <p className="font-bold">{post.title}</p>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Products;
