import React from "react";
import CallToAction from "../components/CallToAction";
import images from "../images";
import splitStringUsingRegex from "../utils/splitStringUsingRegex";
import { motion } from "framer-motion";
import "../global.css";
import "./styles/About.css";
import { aboutTextData } from "./textData";

const About = () => {
  const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  };

  const headingChars = splitStringUsingRegex(aboutTextData.aboutHeader);
  const introChars = splitStringUsingRegex(aboutTextData.aboutIntro);
  const heading2Chars = splitStringUsingRegex(aboutTextData.aboutHeader2);
  const intro2Chars = splitStringUsingRegex(aboutTextData.aboutIntro2);

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
            whileInView="reveal"
            viewport={{ once: true }}
            variants={charVariants}
            transition={{ duration: 0.5 }}
          />
          <section className="flex flex-col mb-16 gap-5">
            <motion.h2
              className="text-3xl mb-20 underline underline-offset-4 decoration-red-800 font-semibold"
              initial="hidden"
              whileInView="reveal"
              viewport={{ once: true }}
              variants={charVariants}
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
              whileInView="reveal"
              viewport={{ once: true }}
              variants={charVariants}
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
              whileInView="reveal"
              viewport={{ once: true }}
              variants={charVariants}
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
              whileInView="reveal"
              viewport={{ once: true }}
              variants={charVariants}
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
