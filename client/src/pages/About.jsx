import React, { useState, useEffect } from "react";
import CallToAction from "../components/CallToAction";
import images from "../images";
import splitStringUsingRegex from "../utils/splitStringUsingRegex";
import { motion } from "framer-motion";
import "../global.css";
import "./styles/About.css";

const heading = "Join me on my journey";
const intro = `👋 Hi! Good Day! I am Terrence Rosales, I'm a software developer based in the United States. I
              have a passion for creating and building Web applications that can
              provide value to anyone. I'm always looking to learn new
              things and expand my skill set.`;
const heading2 = "What to expect?";
const intro2 = `First of all thank you for taking some time off of your day to stop and visit my blog page 🙏.The purpose of all this was because I wanted to share more if my thought process, the things that I have learned, I will also have sections on this page where you will see the resource I used weather its free or paid, I will also share my thoughts on the software that I use to build my projects. I hope you enjoy your stay here and if you have any questions or comments feel free to reach out to me.`;

const About = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  // Function to mark animation as complete once it has played
  const onAnimationComplete = () => {
    setAnimationComplete(true);
  };

  const headingChars = splitStringUsingRegex(heading);
  const introChars = splitStringUsingRegex(intro);
  const heading2Chars = splitStringUsingRegex(heading2);
  const intro2Chars = splitStringUsingRegex(intro2);
  const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  };

  useEffect(() => {
    // Mark animation as complete once the component mounts
    setAnimationComplete(true);
  }, []);

  return (
    <div className="p-5 teal-gradient">
      <div className="aboutInner px-10">
        <h3 className="my-7 text-center font-semibold text-3xl text-gray-500">
          About
        </h3>
        <section className="text-gray-600 dark:text-white text-xl flex flex-col mx-auto text-center max-w-2xl">
          <motion.img
            className="aboutImg my-20 mx-auto"
            src={images.aboutImg}
            alt="about me image"
            initial="hidden"
            animate={animationComplete ? "reveal" : "hidden"}
            variants={charVariants}
            onAnimationComplete={onAnimationComplete}
            transition={{ duration: 0.5 }}
          />
          <section className="flex flex-col mb-16 gap-5">
            <motion.h2
              className="text-3xl mb-20 underline underline-offset-4 decoration-red-800 font-semibold"
              initial="hidden"
              animate={animationComplete ? "reveal" : "hidden"}
              variants={charVariants}
              onAnimationComplete={onAnimationComplete}
              transition={{ staggerChildren: 0.02 }}
            >
              {headingChars.map((char, index) => (
                <motion.span
                  key={index}
                  variants={charVariants}
                  transition={{ duration: 0.5 }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h2>

            <motion.p
              initial="hidden"
              animate={animationComplete ? "reveal" : "hidden"}
              variants={charVariants}
              onAnimationComplete={onAnimationComplete}
              transition={{ staggerChildren: 0.02 }}
            >
              {introChars.map((char, index) => (
                <motion.span
                  key={index}
                  variants={charVariants}
                  transition={{ duration: 0.5 }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.p>
            <motion.h2
              className="text-3xl my-20 underline underline-offset-4 decoration-red-800 font-semibold"
              initial="hidden"
              animate={animationComplete ? "reveal" : "hidden"}
              variants={charVariants}
              onAnimationComplete={onAnimationComplete}
              transition={{ staggerChildren: 0.02 }}
            >
              {heading2Chars.map((char, index) => (
                <motion.span
                  key={index}
                  variants={charVariants}
                  transition={{ duration: 0.5 }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h2>
            <motion.p
              initial="hidden"
              animate={animationComplete ? "reveal" : "hidden"}
              variants={charVariants}
              onAnimationComplete={onAnimationComplete}
              transition={{ staggerChildren: 0.02 }}
            >
              {intro2Chars.map((char, index) => (
                <motion.span
                  key={index}
                  variants={charVariants}
                  transition={{ duration: 0.5 }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.p>
          </section>
        </section>
        <section></section>
        <section>
          <CallToAction />
        </section>
      </div>
    </div>
  );
};

export default About;
