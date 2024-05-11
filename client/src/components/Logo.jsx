import React from "react";
import { Link } from "react-router-dom";
import images from "../images.js";

const Logo = () => {
  return (
    <Link to="/" className="px-2 text-sm font-bold dark:text-white">
      <img src={images.trBlogLogo} alt="blog logo" />
    </Link>
  );
};

export default Logo;
