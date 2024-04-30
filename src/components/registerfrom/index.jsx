import React, { useRef } from "react";

import {
  TextField,
  Button,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
const CRegistrationForm2 = () => {
  const FirstNameRef = useRef();
  const LastNameRef = useRef();
  const StreetAddressRef = useRef();
  const StreetAddressLine2Ref = useRef();
  const CityRef = useRef();
  const StateProvinceRef = useRef();
  const PostalZipCodeRef = useRef();
  const WillyoubewillingtorecommendusRef = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    const FirstName = FirstNameRef.current.value;
    const LastName = LastNameRef.current.value;
    const StreetAddress = StreetAddressRef.current.value;
    const StreetAddressLine2 = StreetAddressLine2Ref.current.value;
    const City = CityRef.current.value;
    const StateProvince = StateProvinceRef.current.value;
    const PostalZipCode = PostalZipCodeRef.current.value;
    const Willyoubewillingtorecommendus =
      WillyoubewillingtorecommendusRef.current.value;
    console.log({
      FirstName,
      LastName,
      StreetAddress,
      StreetAddressLine2,
      City,
      StateProvince,
      PostalZipCode,
      Willyoubewillingtorecommendus,
    });
  };
  return (
    <form onSubmit={handleSubmit} className=" pt-20 px-[10%] pb-14">
      <div className="bg-white rounded-2xl pb-6">
        <h1 className="text-3xl font-bold pt-10 pl-12">
          New Customer Registration Form
        </h1>
        <h2 className="text-xl font-bold pl-12 pt-14">Customer Details:</h2>
        <div className="flex flex-row pl-12 pt-16">
          <h1 className="font-bold">Full Name</h1>
          <h1 className="text-[#dc2626]">*</h1>
        </div>
        <div className="pl-12 pt-3 pr-12 flex gap-5 outline-blue-400">
          <TextField
            className="w-64"
            size="small"
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            inputRef={FirstNameRef}
          />
          <TextField
            className="w-64"
            size="small"
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            inputRef={LastNameRef}
          />
        </div>
        <div className="flex flex-row pl-12 pt-4">
          <h1 className="font-bold">Address</h1>
          <h1 className="text-[#dc2626]">*</h1>
        </div>
        <div className="pl-12 pt-3 pr-12 outline-blue-400">
          <TextField
            className="w-full"
            size="small"
            id="outlined-basic"
            label="Street Address"
            variant="outlined"
            inputRef={StreetAddressRef}
          />
          <br />
          <br />
          <TextField
            className="w-full"
            size="small"
            id="outlined-basic"
            label="Street Address Line 2"
            variant="outlined"
            inputRef={StreetAddressLine2Ref}
          />
        </div>
        <div className="pl-12 pt-6 pr-12 flex gap-8 outline-blue-400">
          <TextField
            className="w-64"
            size="small"
            id="outlined-basic"
            label="City"
            variant="outlined"
            inputRef={CityRef}
          />
          <TextField
            className="w-64"
            size="small"
            id="outlined-basic"
            label="State / Province"
            variant="outlined"
            inputRef={StateProvinceRef}
          />
        </div>
        <div className="pl-12 pt-6 pr-12 outline-blue-400">
          <TextField
            className="w-full"
            size="small"
            id="outlined-basic"
            label="Postal / Zip Code"
            variant="outlined"
            inputRef={PostalZipCodeRef}
          />
        </div>
        <div className="pl-12">
          <p className="pt-5">Will you be willing to recommend us?</p>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              ref={WillyoubewillingtorecommendusRef}
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio color="default" />}
                label="Yes"
              />
              <FormControlLabel
                value="male"
                control={<Radio color="default" />}
                label="No"
              />
              <FormControlLabel
                value="other"
                control={<Radio color="default" />}
                label="Maybe"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="pt-12 pb-3 flex justify-center">
          <Button
            className="w-36"
            type="submit"
            color="success"
            variant="contained"
          >
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};
export default CRegistrationForm2;
