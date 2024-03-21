import React from "react";

const Contact = () => {
  return (
    <>
      <div className="mt-5 p-10">
        <div className="text-4xl p-5">
          <p className="text-red-600 font-bold text-5xl">Contact.</p>
          <p className="bg-red-600  p-1 rounded w-10 h-2 mt-5"></p>
        </div>
        <div className="p-3 ">
          <p className="font-serif">
            Do you want us to style your home? Fill out the form and fill me in
            with the details :) We love meeting new people!
          </p>
        </div>
        <div className="flex flex-col gap-2 font-serif ">
          Name
          <input type="text" className="border w-[60rem] h-10" />
          Email
          <input type="text" className="border w-[60rem] h-10" />
          Message
          <input type="text" className="border w-[60rem] h-10" />
          <p className="bg-red-600 h-14 text-center pt-4 hover:bg-gray-600-400">
            Send Message
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
