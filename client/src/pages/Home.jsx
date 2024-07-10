import { useEffect, useState } from "react";
import CallToAction from "../components/CallToAction";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import PostCard from "../components/PostCard";
import { motion } from "framer-motion";
import "../global.css";
import "./styles/Home.css";
import { homeTextData } from "./textData";
import splitStringUsingRegex from "../utils/splitStringUsingRegex";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getposts?limit=3");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  };

  const headingChars = splitStringUsingRegex(homeTextData.homeHeader);
  const introChars = splitStringUsingRegex(homeTextData.homeIntro);

  return (
    <div>
      {/* intro */}
      <section className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        <motion.h1
          className="text-red-400 text-4xl font-bold lg:text-6xl"
          initial="hidden"
          whileInView="reveal"
          viewport={{ once: true }}
          variants={charVariants}
          transition={{ duration: 0.5 }}
        >
          {headingChars.map((char, index) => (
            <motion.span key={index} variants={charVariants}>
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          className="text-xl"
          initial="hidden"
          whileInView="reveal"
          viewport={{ once: true }}
          variants={charVariants}
          transition={{ staggerChildren: 0.02 }}
        >
          {introChars.map((char, index) => (
            <motion.span key={index} variants={charVariants}>
              {char}
            </motion.span>
          ))}
        </motion.p>
        <section>
          <Button gradientDuoTone="greenToBlue" outline>
            <Link
              to="/search"
              className="text-xs sm:text-sm font-bold hover:underline"
            >
              View All Posts
            </Link>
          </Button>
        </section>
      </section>
      {/* intro */}
      {/* CTO */}
      <section className="p-3 teal-gradient">
        <CallToAction />
      </section>
      {/* CTO */}
      {/* Posts */}
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7 lg:px-[7%] md:px-[25%]">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
            <div className="flex flex-wrap gap-3">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-lg text-teal-500 hover:underline underline-offset-2 decoration-red-500 text-center"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
      {/* Posts */}
    </div>
  );
};

export default Home;
