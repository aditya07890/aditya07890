import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const Navigate = useNavigate();
  const registerFn = async (name, email, password) => {
    const response = await axios.post(
      "https://api-eduvila.onrender.com/register",
      { name: name, email: email, password: password }
    );
    console.log(response.data);
    Navigate("/Singin1");
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: () => {
      console.log(formik.values);
      registerFn(
        formik.values.name,
        formik.values.email,
        formik.values.password
      );
    },
  });

  return (
    <div className="flex justify-center items-center gap-3 p-5">
      <form
        onSubmit={formik.handleSubmit}
        className="grid gap-3 bg-emerald-500 p-5 rounded-md"
      >
        <p className="">User Register page </p>
        <TextField
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
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
        <Button type="submit" className="!bg-green-400">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Register;
