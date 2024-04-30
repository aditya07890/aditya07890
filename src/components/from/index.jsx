import React, { useState } from "react";

const FormDemo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [skills, setSkills] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ title, description, content, name, email, skills });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col p-4 gap-4 bg-neutral-400"
    >
      <p className="text-xl text-center">From Blog</p>
      <input
        type="text"
        placeholder="FullName"
        className="p-2"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        className="p-2"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="text"
        placeholder="Skills"
        className="p-2"
        value={skills}
        onChange={(event) => setSkills(event.target.value)}
      />
      <input
        type="text"
        placeholder="Title"
        className="p-2 "
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        className="p-2 "
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <textarea
        type="text"
        placeholder="Content"
        rows={9}
        className="p-2"
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />
      <div className="flex justify-center items-center">
        <button
          className="flex justify-center items-center border h-10 w-[100px] rounded bg-green-600"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormDemo;
