import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="text-lg font-bold dark:text-white">
      Pocket&nbsp;
      <span className="px-2 py-1 text-lg rounded-lg text-white font-bold bg-gradient-to-b from-slate-900 to-teal-700 ">
        {" "}
        Items: &infin;
      </span>
      &nbsp;
    </Link>
  );
};

export default Logo;
