import { useState, useEffect } from "react";
import images from "../images.js";
import { Button } from "flowbite-react";
import { motion } from "framer-motion";

const CallToAction = () => {
  const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="reveal"
      viewport={{ once: true }}
      variants={charVariants}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-3 flex flex-col sm:flex-row border border-teal-500 mt-5 mb-10 justify-center items-center text-center"
    >
      <div className="flex-1 justify-center flex flex-col px-10">
        <h2 className="text-2xl text-black dark:text-[#3df] font-semibold">
          Learn, Build and Share
        </h2>
        <p className="text-black dark:text-gray-300 my-3">
          Collaboration creates communities
        </p>
        <Button
          gradientDuoTone="cyanToBlue"
          outline
          className="font-thin mt-0 mb-3"
        >
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
    </motion.div>
  );
};

export default CallToAction;
