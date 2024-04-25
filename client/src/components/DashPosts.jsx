import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Table } from "flowbite-react";
import { Link } from "react-router-dom";

const DashPosts = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [userPosts, setUserPosts] = useState([]);
  const [showMore, setShowMore] = useState(true);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`/api/post/getposts?userId=${currentUser._id}`);
        const data = await res.json();
        if (res.ok) {
          setUserPosts(data.posts.slice(0, 9));
          if (data.posts.length < 9) {
            setShowMore(false);
            if (data.posts.length <= 9) {
              // Checking if there are fewer than 9 posts
              setShowMore(false);
            }
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    if (currentUser.isAdmin) {
      fetchPosts();
    }
  }, [currentUser._id, currentUser.isAdmin]);

  const handleShowMore = async () => {
    const startIndex = userPosts.length;
    try {
      const res = await fetch(
        `/api/post/getPosts?userId=${currentUser._id}&startIndex=${startIndex}`
      );
      const data = await res.json();
      if (res.ok) {
        setUserPosts((prev) => [...prev, ...data.posts]);
        if (data.posts.length < 9) {
          setShowMore(false);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-teal-950 scrollbar-thumb-teal-950 dark:scrollbar-track-teal-900 dark:scrollbar-thumb-teal-950">
      {currentUser.isAdmin && userPosts.length > 0 ? (
        <>
          <Table
            hoverable
            className="text-black hover:text-white sshadow-md bg-white dark:border-teal-950 dark:bg-gradient-to-bl from-teal-900 to-black"
          >
            <Table.Head>
              <Table.HeadCell>Date Updated</Table.HeadCell>
              <Table.HeadCell>Post Image</Table.HeadCell>
              <Table.HeadCell>Post Title</Table.HeadCell>
              <Table.HeadCell>Category</Table.HeadCell>
              <Table.HeadCell>Delete</Table.HeadCell>
              <Table.HeadCell>
                <span>Edit</span>
              </Table.HeadCell>
            </Table.Head>
            {userPosts.map((post) => (
              <Table.Body key={post._id} className="divide-y">
                <Table.Row className="bg-white dark:border-teal-200 dark:bg-gradient-to-bl to-black hfrom-teal-900">
                  <Table.Cell>
                    {new Date(post.updatedAt).toLocaleDateString()}
                  </Table.Cell>
                  <Table.Cell>
                    <Link to={`post/${post.slug}`}>
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-20 h-10 object-cover bg-gray-300"
                      />
                    </Link>
                  </Table.Cell>
                  <Table.Cell>
                    <Link
                      className="font-medium text-teal-700 dark:text-white"
                      to={`/post/${post.slug}`}
                    >
                      {post.title}
                    </Link>
                  </Table.Cell>
                  <Table.Cell>{post.catergory}</Table.Cell>
                  <Table.Cell>
                    <span className="text-red-600 hover:underline hover:font-semibold">
                      Delete
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <Link
                      className="text-blue-400 hover:underline hover:font-semibold"
                      to={`/update-post/${post._id}`}
                    >
                      Edit
                    </Link>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            ))}
          </Table>
          {showMore && (
            <button
              onClick={handleShowMore}
              className="w-full text-teal-500 self-center text-sm py-71"
            >
              Show More
            </button>
          )}
        </>
      ) : (
        <p>You currently have no posts</p>
      )}
    </div>
  );
};

export default DashPosts;
