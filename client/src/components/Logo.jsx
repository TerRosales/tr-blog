import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="text-lg font-bold dark:text-white">
      Pocket&nbsp;
      <span className="px-2 py-1 text-lg rounded-lg button-gradient">
        {" "}
        thought:
      </span>
      &nbsp;
    </Link>
  );
};

export default Logo;
