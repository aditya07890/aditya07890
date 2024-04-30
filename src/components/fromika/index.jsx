import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import img from "../image/university_building_bright_day.png";
import React from "react";

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      address: "",
    },
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });
  const signUpData = [
    {
      name: "name",
      label: "Name",
      type: "text",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
    },
    {
      name: "phone",
      label: "Phone",
      type: "number",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
    },
    {
      name: "address",
      label: "Address",
      type: "text",
    },
  ];

  return (
    <div className="lg:flex bg-emerald-400 p-5 justify-center items-center min-h-screen">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-5 bg-green-300 p-5 lg:w-[50%] rounded-xl h-[80%]"
      >
        <img src={img} alt="" className="rounded-lg" />
        {signUpData.map((input) => {
          return (
            <TextField
              key={input.name}
              size="small"
              name={input.name}
              InputProps={{ className: "!rounded-full" }}
              label={input.label}
              value={formik.values[input.name]}
              onChange={formik.handleChange}
              variant="outlined"
            />
          );
        })}
        <Button
          type="submit"
          variant="contained"
          className="lg:flex !rounded-full"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
