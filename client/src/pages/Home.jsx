import { useEffect, useState } from "react";
import CallToAction from "../components/CallToAction";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import PostCard from "../components/PostCard";
import "../global.css";
import "./styles/Home.css";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getposts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div className="">
      {/* intro */}
      <section className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        <h1 className="text-red-400 text-4xl font-bold lg:text-6xl">
          Welcome to my Blog
        </h1>
        <p className="text-gray-500 dark:text-neutral-300 text-xs">
          Thank you! for taking your time to come and check the latest on what
          topics have I been tackling as a Software Developer, in addition to
          developer topics, I will also be sharing some editing thoughts on the
          software that I use while I am building my projects
        </p>
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
