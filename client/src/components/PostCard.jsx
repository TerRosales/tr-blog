import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <div className="group relative w-full border border-teal-500 hover:border-2 h-[400px] overflow-hidden rounded-lg sm:w-[430px] transition-all">
      <Link to={`/post/${post.slug}`}>
        <img
          src={post.image}
          alt="post cover"
          className="h-[260px] w-full object-cover group-hover:h-[220px] transition-all duration-300 z-20"
        />
      </Link>
      <div className="p-3 flex flex-col gap-2">
        <p className="text-lg font-semibold line-clamp-2">{post.title}</p>
        <span className="italic text-sm">{post.category}</span>
        <Link
          to={`/post/${post.slug}`}
          className="z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-gradient-to-b from-slate-900 to-teal-500 hover:text-white transition-all duration-300 p-2 text-center py-2 rounded-md !rounded-tl-none m-2"
        >
          Read Post
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
