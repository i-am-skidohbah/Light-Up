import React from "react";

const Headings = ({ tips, title }) => {
  return (
    <div>
      <div className="flex items-center justify-center flex-col  bg-white">
        <h1 className="text-black tracking-wider text-center text-base uppercase">
          {tips}
        </h1>
        <h2 className="text-black text-3xl  font-extrabold text-center uppercase tracking-wide">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default Headings;
