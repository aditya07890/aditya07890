import React, { useState } from "react";
import img1 from "../image/university_building_bright_day.png";
import {
  TextField,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";
import * as Material from "@mui/material";
import { DarkMode } from "@mui/icons-material";

import classNames from "classnames";
const DRegistrationForm = () => {
  const [isDark, setIsDark] = useState(false);
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [DateofBirth, setDateofBirth] = useState("");
  const [Nationality, setNationality] = useState("");
  const [Gender, setGender] = useState("");
  const [EmailAddress, setEmailAddress] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [StreetAddress, setStreetAddress] = useState("");
  const [City, setCity] = useState("");
  const [StateProvinceRegion, setStateProvinceRegion] = useState("");
  const [PostalZipCode, setPostalZipCode] = useState("");
  const [Country, setCountry] = useState("");
  const [EnrollmentType, setEnrollmentType] = useState("");
  const [ProgramofStudy, setProgramofStudy] = useState("");
  const [StudentIDNumber, setStudentIDNumber] = useState("");
  const [ExpectedGraduationYear, setExpectedGraduationYear] = useState("");
  const [FullName1, setFullName1] = useState("");
  const [Relationshiptostudent, setRelationshiptostudent] = useState("");
  const [PhoneNumber1, setPhoneNumber1] = useState("");
  const [SchoolInstitutionName, setSchoolInstitutionName] = useState("");
  const [ProgramMajor, setProgramMajor] = useState("");
  const [YearsAttended, setYearsAttended] = useState("");
  const [DegreeEarned, setDegreeEarned] = useState("");
  const [AdditionalSkills, setAdditionalSkills] = useState("");
  const [DisabilitiesorSpecialNeeds, setDisabilitiesorSpecialNeeds] =
    useState("");
  const [Image, setImage] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      FirstName,
      LastName,
      DateofBirth,
      Nationality,
      Gender,
      EmailAddress,
      PhoneNumber,
      StreetAddress,
      StateProvinceRegion,
      PostalZipCode,
      Country,
      EnrollmentType,
      StudentIDNumber,
      ExpectedGraduationYear,
      FullName1,
      Relationshiptostudent,
      PhoneNumber1,
      SchoolInstitutionName,
      ProgramMajor,
      YearsAttended,
      DegreeEarned,
      AdditionalSkills,
      DisabilitiesorSpecialNeeds,
      Image,
    });
    setFirstName("");
    setLastName("");
    setDateofBirth("");
    setNationality("");
    setGender("");
    setEmailAddress("");
    setPhoneNumber("");
    setStreetAddress("");
    setStateProvinceRegion("");
    setPostalZipCode("");
    setCountry("");
    setEnrollmentType("");
    setStudentIDNumber("");
    setExpectedGraduationYear("");
    setFullName1("");
    setRelationshiptostudent("");
    setPhoneNumber1("");
    setSchoolInstitutionName("");
    setProgramMajor("");
    setYearsAttended("");
    setDegreeEarned("");
    setAdditionalSkills("");
    setDisabilitiesorSpecialNeeds("");
    setImage("");
  };

  const theme = Material.createTheme({
    palette: { mode: isDark ? "dark" : "light" },
  });

  return (
    <Material.ThemeProvider theme={theme}>
      <form
        onSubmit={handleSubmit}
        className="pl-[27%] pt-[4%] pr-[27%] pb-[4%]"
      >
        <img src={img1} alt="" className="w-[100%] rounded-t-2xl" />
        <div
          className={classNames(
            "h-full rounded-b-2xl",
            isDark ? "bg-green-600 text-white" : "bg-zinc-400"
          )}
        >
          <div className="flex justify-end">
            <Material.IconButton onClick={() => setIsDark(!isDark)}>
              <DarkMode />
            </Material.IconButton>
          </div>
          <p className="text-2xl font-bold pt-6 pl-9">
            Student Registration Form
          </p>
          <p className="pl-9 pt-6 font-bold text-xl">Personal Information</p>
          <div className="flex gap-5 pl-9 pt-3">
            <TextField
              className="w-[45%]"
              size="small"
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              value={FirstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
            <TextField
              className="w-[45%]"
              size="small"
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              value={LastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          </div>
          <div className="flex gap-5 pl-9 pt-3">
            <TextField
              className="w-[45%]"
              size="small"
              id="outlined-basic"
              label="Date of Birth"
              variant="outlined"
              value={DateofBirth}
              onChange={(event) => setDateofBirth(event.target.value)}
            />
            <TextField
              className="w-[45%]"
              size="small"
              id="outlined-basic"
              label="Nationality"
              variant="outlined"
              value={Nationality}
              onChange={(event) => setNationality(event.target.value)}
            />
          </div>
          <div className="pl-9 pt-3">
            <p className="">Gender</p>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                value={Gender}
                onChange={(event) => setGender(event.target.value)}
              >
                <div className="grid grid-cols-2">
                  <FormControlLabel
                    value="Female"
                    control={<Radio color="default" />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="Transgender Female"
                    control={<Radio color="default" />}
                    label="Transgender Female"
                  />
                  <FormControlLabel
                    value="Non-binary"
                    control={<Radio color="default" />}
                    label="Non-binary"
                  />
                  <FormControlLabel
                    value="Intersex"
                    control={<Radio color="default" />}
                    label="Intersex"
                  />
                  <FormControlLabel
                    value="Male"
                    control={<Radio color="default" />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="Transgender Male"
                    control={<Radio color="default" />}
                    label="Transgender Male
"
                  />
                  <FormControlLabel
                    value="Prefer not to Say"
                    control={<Radio color="default" />}
                    label="Prefer not to Say
"
                  />
                  <FormControlLabel
                    value="Other"
                    control={<Radio color="default" />}
                    label="Other"
                  />
                </div>
              </RadioGroup>
            </FormControl>
          </div>
          <p className="font-bold text-xl pl-9 pt-3">Contact Information</p>
          <div className="flex gap-5 pl-9 pt-3">
            <TextField
              className="w-[45%]"
              size="small"
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
              value={EmailAddress}
              onChange={(event) => setEmailAddress(event.target.value)}
            />
            <TextField
              className="w-[45%]"
              size="small"
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
              value={PhoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
            />
          </div>
          <div className="pl-9 pt-4 pr-10">
            <TextField
              className="w-full"
              size="small"
              id="outlined-basic"
              label="Street Address"
              variant="outlined"
              value={StreetAddress}
              onChange={(event) => setStreetAddress(event.target.value)}
            />
          </div>
          <div className="pl-9 pt-4 flex gap-5">
            <TextField
              className="w-[45%]"
              size="small"
              id="outlined-basic"
              label="City"
              variant="outlined"
              value={City}
              onChange={(event) => setCity(event.target.value)}
            />
            <TextField
              className="w-[45%]"
              size="small"
              id="outlined-basic"
              label="State/Province/Region"
              variant="outlined"
              value={StateProvinceRegion}
              onChange={(event) => setStateProvinceRegion(event.target.value)}
            />
          </div>
          <div className="pl-9 pt-4 flex gap-5">
            <TextField
              className="w-[45%]"
              size="small"
              id="outlined-basic"
              label="Postal/Zip Code"
              variant="outlined"
              value={PostalZipCode}
              onChange={(event) => setPostalZipCode(event.target.value)}
            />
            <TextField
              className="w-[45%]"
              size="small"
              id="outlined-basic"
              label="Country"
              variant="outlined"
              value={Country}
              onChange={(event) => setCountry(event.target.value)}
            />
          </div>
          <p className="text-xl font-bold pl-9 pt-3">Enrollment Details</p>
          <p className="pl-9 pt-3">Enrollment Type</p>
          <div className="pl-9">
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Full-time"
                name="radio-buttons-group"
                value={EnrollmentType}
                onChange={(event) => setEnrollmentType(event.target.value)}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio color="default" />}
                  label="Full-time"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio color="default" />}
                  label="Part-time"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <p className="pl-9 pt-3">Program of Study</p>
          <div className="pl-9 pr-9 pt-2">
            <select
              className="p-2 w-full bg-zinc-400"
              value={ProgramofStudy}
              onChange={(event) => setProgramofStudy(event.target.value)}
            >
              <option value="Bio Education">Bio Education</option>
              <option value="Chemical Education">Chemical Education</option>
              <option value="Economics Education">Economics Education</option>
              <option value="English Language Education">
                English Language Education
              </option>
              <option value="Geograohic Education">Geograohic Education</option>
              <option value="History and Social Science">
                History and Social Science
              </option>
              <option value="Mathematics Education">
                Mathematics Education
              </option>
            </select>
          </div>
          <div className="pl-9 pt-4 flex gap-5">
            <TextField
              className="w-[45%]"
              size="small"
              id="outlined-basic"
              label="Student ID Number"
              variant="outlined"
              value={StudentIDNumber}
              onChange={(event) => setStudentIDNumber(event.target.value)}
            />
            <TextField
              className="w-[45%]"
              size="small"
              id="outlined-basic"
              label="Expected Graduation Year"
              variant="outlined"
              value={ExpectedGraduationYear}
              onChange={(event) =>
                setExpectedGraduationYear(event.target.value)
              }
            />
          </div>
          <p className="font-bold text-xl pl-9 pt-3">Emergency Contact</p>
          <div className="pl-9 pr-9 pt-3">
            <TextField
              className="w-full"
              size="small"
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
              value={FullName1}
              onChange={(event) => setFullName1(event.target.value)}
            />
          </div>
          <div className="pl-9 pt-4 flex gap-5">
            <TextField
              className="w-[45%]"
              size="small"
              id="outlined-basic"
              label="Relationship to Student"
              variant="outlined"
              value={Relationshiptostudent}
              onChange={(event) => setRelationshiptostudent(event.target.value)}
            />
            <TextField
              className="w-[45%]"
              size="small"
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
              value={PhoneNumber1}
              onChange={(event) => setPhoneNumber1(event.target.value)}
            />
          </div>
          <p className="text-xl font-bold pl-9 pt-3">Previous Education</p>
          <div className="pl-9 pt-4 flex gap-5">
            <TextField
              className="w-[45%]"
              size="small"
              id="outlined-basic"
              label="School / Institution Name"
              variant="outlined"
              value={SchoolInstitutionName}
              onChange={(event) => setSchoolInstitutionName(event.target.value)}
            />
            <TextField
              className="w-[45%]"
              size="small"
              id="outlined-basic"
              label="Program / Major"
              variant="outlined"
              value={ProgramMajor}
              onChange={(event) => setProgramMajor(event.target.value)}
            />
          </div>
          <div className="pl-9 pt-4 flex gap-5">
            <TextField
              className="w-[45%]"
              size="small"
              id="outlined-basic"
              label="Years Attended"
              variant="outlined"
              value={YearsAttended}
              onChange={(event) => setYearsAttended(event.target.value)}
            />
            <TextField
              className="w-[45%]"
              size="small"
              id="outlined-basic"
              label="Degree Earned"
              variant="outlined"
              value={DegreeEarned}
              onChange={(event) => setDegreeEarned(event.target.value)}
            />
          </div>
          <p className="text-xl font-bold pl-9 pt-3">Additional Information</p>
          <div className="pl-9 pr-9 pt-3">
            <TextField
              className="w-full"
              id="outlined-basic"
              label="Additional Skills or Certifications"
              variant="outlined"
              multiline
              rows={2}
              value={AdditionalSkills}
              onChange={(event) => setAdditionalSkills(event.target.value)}
            />
          </div>
          <div className="pl-9 pr-9 pt-4">
            <TextField
              className="w-full"
              id="outlined-basic"
              label="Disabilities or Special Needs"
              variant="outlined"
              multiline
              rows={2}
              value={DisabilitiesorSpecialNeeds}
              onChange={(event) =>
                setDisabilitiesorSpecialNeeds(event.target.value)
              }
            />
          </div>
          <p className="pl-9 pt-3">Passport-sized Photo Upload</p>
          <div className="pl-9 pt-3 pr-9">
            <input
              type="file"
              className="p-6 border-2 border-dotted w-full"
              onChange={(event) => setImage(event.target.files[0])}
            />
          </div>
          <div className="flex justify-center pt-4 pb-5 text-black">
            <Button
              type="submit"
              className="!capitalize"
              color="inherit"
              variant="contained"
            >
              Submit
            </Button>
          </div>
        </div>
      </form>
    </Material.ThemeProvider>
  );
};

export default DRegistrationForm;
