import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const Navigate = useNavigate();
  const [data, setData] = useState({});
  const token = localStorage.getItem("token");
  console.log(token);
  const getProfileFn = async () => {
    const response = await axios.get(
      "https://api-eduvila.onrender.com/profile",
      { params: { token: token } }
    );
    console.log(response.data[0]);
    setData(response.data[0]);
  };

  useEffect(() => {
    getProfileFn();
  }, []);

  return (
    <>
      <div className="bg-slate-500 grid gap-5 justify-center items-center p-3">
        <table>
          <thead className="grid grid-cols-5 gap-5 justify-center items-center">
            <th>Profile</th>
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Email</th>
          </thead>
          <tr className="grid grid-cols-5 gap-5 justify-center items-center">
            <td>{data?.Profile}</td>
            <td>{data?.id}</td>
            <td>{data?.name}</td>
            <td>{data?.gender}</td>
            <td>{data?.email}</td>
          </tr>
        </table>
        <div className="flex justify-center items-center gap-5 p-5">
          <Button
            className="!bg-emerald-600 !text-white"
            onClick={() => Navigate("/ProfileUpdate")}
          >
            UpDateProfile
          </Button>
        </div>
      </div>
    </>
  );
};

export default Profile;
