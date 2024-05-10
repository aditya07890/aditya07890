import { Avatar, Button, Dialog, Divider, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Register from "../Authentication/Register";

const Home = ({ num }) => {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState("Register");

  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);

  console.log(isOpen);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const profile = localStorage.getItem("profile");
  const Id = localStorage.getItem("id");
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const gender = localStorage.getItem("gender");

  const handleLogout = () => {
    localStorage.clear();
    setAnchorEl(null);
  };

  return (
    <div className="h-full">
      <div className="flex justify-between gap-5 p-2 items-center bg-black text-white px-5">
        <div className="flex gap-5 items-center">
          <button className="hover:bg-white hover:text-black p-2">Home</button>
          <button className="hover:bg-white hover:text-black p-2">
            About-Us
          </button>
          <button className="hover:bg-white hover:text-black p-2">
            ContactS
          </button>
          <button className="hover:bg-white hover:text-black p-2">
            Help-Us
          </button>
        </div>

        {token ? (
          <Avatar
            src="jgjg"
            alt={name}
            onClick={(event) => setAnchorEl(event.currentTarget)}
          />
        ) : (
          <button onClick={() => navigate("/Singin1")}>Login</button>
        )}
      </div>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <div className="w-96">
          <div className="flex h-10">
            <Button
              color={page === "Register" ? "success" : "primary"}
              className="!w-full"
              onClick={() => setPage("Register")}
            >
              Sign Up
            </Button>
            <div className="h-full border" />
            <Button
              color={page === "SignIn1" ? "success" : "primary"}
              className="!w-full"
              onClick={() => setPage("SignIn1")}
            >
              Sign In
            </Button>
          </div>
          <Divider />
          {page === "register" && <Register />}
          {page === "Singin1" && <Singin1 />}
        </div>
      </Dialog>
      <Menu anchorEl={anchorEl} open={isOpen} onClose={() => setAnchorEl(null)}>
        <MenuItem className="!flex !flex-col gap-2">
          <Avatar src="guygliu" alt={name} />
          <p>{name}</p>
        </MenuItem>
        <MenuItem onClick={() => navigate("/profile")}>Profile</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default Home;
