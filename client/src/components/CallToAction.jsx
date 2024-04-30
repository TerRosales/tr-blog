import React from "react";
import images from "../images.js";
import { Button } from "flowbite-react";

const CallToAction = () => {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center text-center">
      <div className="flex-1 justify-center flex flex-col px-10">
        <h2 className="text-2xl">
          Would you like to see more about my process?
        </h2>
        <p className="text-gray-500 my-2">
          Checkout other topics I have written about
        </p>
        <Button gradientDuoTone="cyanToBlue" outline className="">
          <a
            href="/dashboard?tab=posts"
            target="_blank"
            rel="noopener noreferrer"
          >
            See other posts
          </a>
        </Button>
      </div>
      <div>
        <img className="p-7 flex-1" src={images.CTO} alt="test img" />
      </div>
    </div>
  );
};

export default CallToAction;
