import React, { useState } from "react";

const FornHandling = () => {
  const [Fname, setFName] = useState("");
  const [Lname, setLName] = useState("");
  const [Age, setAge] = useState("");
  const [Email, setEmail] = useState("");
  const [Gender, setGender] = useState("");
  const [data, setData] = useState({});
  const [skill, setSkill] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ Fname, Lname, Age, Email, Gender });
    setData({ Fname, Lname, Age, Email, Gender, skill });
  };
  console.log(data);
  return (
    <>
      <div className="flex flex-col gap-2 justify-center items-center bg-slate-400">
        <form
          onSubmit={handleSubmit}
          className="p-4 flex flex-col gap-3 bg-lime-500"
        >
          <input
            type="text"
            className="p-2"
            placeholder="FirstName"
            value={Fname}
            onChange={(event) => setFName(event.target.value)}
          />
          <input
            type="text"
            className="p-2"
            placeholder="LastName"
            value={Lname}
            onChange={(event) => setLName(event.target.value)}
          />
          <input
            type="number"
            className="p-2"
            placeholder="Age"
            value={Age}
            onChange={(event) => setAge(event.target.value)}
          />
          <input
            type="email"
            className="p-2"
            placeholder="Email"
            value={Email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <select
            className="p-2"
            value={Gender}
            onChange={(event) => setGender(event.target.value)}
          >
            <option>Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <p>Skills</p>
          <div className="flex gap-1">
            <input
              type="radio"
              value="ReactJs"
              onChange={(event) => setSkill(event.target.value)}
            />
            <label for="html">HTML</label>
          </div>
          <div className="flex gap-1">
            <input
              type="radio"
              value="CSS"
              onChange={(event) => setSkill(event.target.value)}
            />
             <label for="css">CSS</label>
          </div>
          <div className="flex gap-1">
            <input
              type="radio"
              value="JavaScript"
              onChange={(event) => setSkill(event.target.value)}
            />
            <label for="javascript">JavaScript</label>
          </div>

          <button
            type="submit"
            className="p-2 bg-slate-800 text-white h-30 w-44"
          >
            Submit
          </button>
          <div className="flex flex-col gap-2">
            <p>First Name : {data.Fname}</p>
            <p>Last Name : {data.Lname}</p>
            <p>Age : {data.Age}</p>
            <p>Email : {data.Email}</p>
            <p>Gender : {data.Gender}</p>
            <p>Skill : {data.skill}</p>
          </div>
        </form>
      </div>
    </>
  );
};

export default FornHandling;
