import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="px-2 text-sm font-bold dark:text-white">
      Pocket
      <span className="px-2 py-1 text-sm rounded-lg button-gradient">
        thought:
      </span>
      &nbsp;
    </Link>
  );
};

export default Logo;
