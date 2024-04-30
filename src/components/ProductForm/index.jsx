import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import imga from "../image/imagea.jpg";
import {
  Button,
  FormControl,
  FormControlLabel,
  RadioGroup,
} from "@mui/material";

const FormHandeling = () => {
  const [order, setOrder] = useState(" ");
  const [buy, setBuy] = useState(" ");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState(" ");
  const [zipCode, setZipeCode] = useState(" ");
  const [address1, setAddress1] = useState(" ");
  const [address2, setAddress2] = useState(" ");
  const [color, setColor] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      order,
      buy,
      firstName,
      lastName,
      email,
      phone,
      city,
      state,
      zipCode,
      address1,
      address2,
      color,
    });
    setOrder("");
    setBuy("");
    setFirstName("");
    setEmail("");
    setPhone("");
    setPhone("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="">
        <div className="flex justify-center items-center">
          <img src={imga} className="w-[600px] h-[270px]" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className=" bg-black h-[1000px] w-[600px]">
            <p className="flex justify-center items-center text-white text-2xl">
              Product Order Form
            </p>
            <p className=" text-white mx-5 ">
              What product would you like to order?
            </p>
            <input
              type=""
              value={order}
              className="mx-5 mt-5 rounded"
              onChange={(event) => setOrder(event.target.value)}
            />
            <p className=" text-white mx-5 mt-5">
              How many products do you want to buy?
            </p>
            <input
              type=""
              value={buy}
              className="mx-5 mt-5 rounded"
              onChange={(event) => setBuy(event.target.value)}
            />
            <p className=" text-white mx-5 mt-5">What color?</p>
            <div className="grid grid-cols-2">
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue=""
                  name="radio-buttons-group"
                  className="text-white"
                >
                  <div className="flex">
                    <FormControlLabel
                      value="Red"
                      control={<Radio />}
                      label="Red"
                      onChange={(event) => setColor(event.target.value)}
                    />
                    <FormControlLabel
                      value="Blue"
                      control={<Radio />}
                      label="Blue"
                      onChange={(event) => setColor(event.target.value)}
                    />
                    <FormControlLabel
                      value="White"
                      control={<Radio />}
                      label="White"
                      onChange={(event) => setColor(event.target.value)}
                    />
                  </div>

                  <div>
                    <FormControlLabel
                      value="green"
                      control={<Radio />}
                      label="green"
                      onChange={(event) => setColor(event.target.value)}
                    />
                    <FormControlLabel
                      value="Black"
                      control={<Radio />}
                      label="Black"
                      onChange={(event) => setColor(event.target.value)}
                    />
                    <FormControlLabel
                      value="Orange"
                      control={<Radio />}
                      label="Orange"
                      onChange={(event) => setColor(event.target.value)}
                    />
                  </div>
                </RadioGroup>
              </FormControl>
            </div>
            <p className=" text-white mx-5 mt-5">Shipping Method</p>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                className="text-white"
              >
                <FormControlLabel
                  value="Overnight - $10"
                  control={<Radio />}
                  label="Overnight - $10"
                />
                <FormControlLabel
                  value="2-day Delivery - $5"
                  control={<Radio />}
                  label="2-day Delivery - $5e"
                />
                <FormControlLabel
                  value="Standard (5-7 days) - Free"
                  control={<Radio />}
                  label="Standard (5-7 days) - Free"
                />
              </RadioGroup>
            </FormControl>

            <div className="flex flex-col-2">
              <div className="text-white  px-5 pt-5">
                First Name
                <input
                  type=""
                  placeholder="First Name"
                  value={firstName}
                  className=" mt-5 rounded  text-black"
                  onChange={(event) => setFirstName(event.target.value)}
                />
                <div className=" text-white mt-3">
                  Last Name
                  <input
                    type=""
                    placeholder="Last Name"
                    value={lastName}
                    className="mt-5 rounded text-black"
                    onChange={(event) => setLastName(event.target.value)}
                  />
                </div>
              </div>
              <div className=" text-white mx-5 mt-5">
                Email
                <input
                  type=""
                  placeholder="Enter your Email"
                  value={email}
                  className="mx-5 mt-5 rounded text-black"
                  onChange={(event) => setEmail(event.target.value)}
                />
                <div className=" text-white px-5 mt-5">
                  Phone Number
                  <input
                    type=""
                    placeholder="Phone number"
                    value={phone}
                    className="mx-5 mt-5 rounded text-black"
                    onChange={(event) => setPhone(event.target.value)}
                  />
                </div>
              </div>
            </div>
            <p className=" text-white mx-5 mt-5">
              How many products do you want to buy?
            </p>
            <input
              type="text"
              placeholder="Address1"
              className="mx-5 mt-5 rounded text-black"
              value={address1}
              onChange={(event) => setAddress1(event.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="Address2"
              className="mx-5 mt-5 w-[550px] rounded text-black"
              value={address2}
              onChange={(event) => setAddress2(event.target.value)}
            />
            <br />
            <div className="grid grid-cols-3">
              <input
                type="text"
                placeholder="city"
                value={city}
                className="mx-5 mt-5 rounded text-black"
                onChange={(event) => setCity(event.target.value)}
              />
              <input
                type="text"
                placeholder="state"
                value={state}
                className="mx-5 mt-5 rounded text-black"
                onChange={(event) => setState(event.target.value)}
              />
              <input
                type="number"
                placeholder="Zip Code"
                value={zipCode}
                className="mx-5 mt-5 rounded text-black"
                onChange={(event) => setZipeCode(event.target.value)}
              />
            </div>
            <div className="flex justify-center justify-items-center bg-black w-[600px] h-24 pt-5">
              <div className=" h-10 w-24 ">
                <Button
                  type="submit"
                  variant="contained"
                  className="!rounded-full !bg-red-500"
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormHandeling;
