import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const loginFn = async (email, password) => {
    const response = await axios.post(
      "https://api-eduvila.onrender.com/login",
      { email: email, password: password }
    );
    console.log(response.data);
    localStorage.setItem("token", response.data[0].token);
    localStorage.setItem("name", response.data[0].name);
    localStorage.setItem("user_id", response.data[0].id);
    alert(response.data);
    navigate("/Home");
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: () => {
      console.log(formik.values);
      loginFn(formik.values.email, formik.values.password);
    },
  });

  return (
    <>
      <div className="flex gap-5 justify-center items-center p-5">
        <form
          onSubmit={formik.handleSubmit}
          className="grid gap-3 bg-slate-400  p-5 rounded-md"
        >
          <p className="flex justify-center items-center">User Login Page !</p>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLqnO_ftYph0pFI768DEJQbY837t7oaowhFw&s"
            alt=""
          />
          <TextField
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <TextField
            name="password"
            label="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <Button type="submit">Submit</Button>
          <p>you dont have any account create an account</p>
        </form>
      </div>
    </>
  );
};

export default Login;
