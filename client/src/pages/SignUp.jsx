import React from "react";
import { Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center">
        {/* left */}
        <div className="">
          <Link Link to="/" className="text-[30px] font-bold dark:text-white">
            Pocket&nbsp;
            <span className="text-teal-500 text-[30px]">&#123;</span>&nbsp;
            <span className="px-2 py-1 text-[32px] rounded-lg text-white font-bold bg-gradient-to-b from-slate-900 to-teal-700 ">
              {" "}
              Items: &infin;
            </span>
            &nbsp;
            <span className="text-teal-500 text-[30px]">&#125;</span>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            optio deleniti possimus voluptatum? Ipsa itaque tempore ut quis,
            laboriosam, molestiae distinctio quae reiciendis voluptatibus
            praesentium alias, rerum aliquam.
          </p>
        </div>
        {/* right */}
        <div className=""></div>
      </div>
    </div>
  );
};

export default SignUp;
