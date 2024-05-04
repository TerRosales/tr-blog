import React from "react";
import images from "../images.js";
import { Button } from "flowbite-react";

const CallToAction = () => {
  return (
    <div className="p-3 flex flex-col sm:flex-row border border-teal-500 justify-center items-center text-center">
      <div className="flex-1 justify-center flex flex-col px-10">
        <h2 className="text-2xl text-[#3df] font-semibold">
          Learn, Build and Share
        </h2>
        <p className="text-gray-300 my-3">Collaboration creates comminities</p>
        <Button gradientDuoTone="cyanToBlue" outline className="font-thin mt-3">
          <a
            href="/dashboard?tab=posts"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs"
          >
            More Work
          </a>
        </Button>
      </div>
      <div>
        <img className="flex-1" src={images.CTA} alt="test img" />
      </div>
    </div>
  );
};

export default CallToAction;