import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Table, Modal, Button } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { FaCheck, FaTimes } from "react-icons/fa";

const DashComments = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [comments, setComments] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [commentsIdToDelete, setCommentsIdToDelete] = useState("");
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch(`/api/comment/getComments`);
        const data = await res.json();
        if (res.ok) {
          setComments(data.comments);
          if (data.comments.length < 9) {
            setShowMore(false);
            if (data.comments.length <= 9) {
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
      fetchComments();
    }
  }, [currentUser._id, currentUser.isAdmin]);

  const handleShowMore = async () => {
    const startIndex = comments.length;
    try {
      const res = await fetch(
        `/api/comment/getComments?startIndex=${startIndex}`
      );
      const data = await res.json();
      if (res.ok) {
        setComments((prev) => [...prev, ...data.comments]);
        if (data.comments.length < 9) {
          setShowMore(false);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDeleteComment = async () => {
    try {
      const res = await fetch(
        `/api/comment/deleteComment/${commentsIdToDelete}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      if (res.ok) {
        setComments((prev) =>
          prev.filter((comments) => comments._id !== commentsIdToDelete)
        );
        setShowModal(false);
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-teal-950 scrollbar-thumb-teal-950 dark:scrollbar-track-teal-900 dark:scrollbar-thumb-teal-950">
      {currentUser.isAdmin && comments.length > 0 ? (
        <>
          <Table
            hoverable
            className="text-black shadow-md bg-white dark:border-teal-950 dark:bg-gradient-to-bl from-teal-900 to-black scrollbar dark:scrollbar-track-teal-900 dark:scrollbar-thumb-teal-950"
          >
            <Table.Head>
              <Table.HeadCell>Date Updated</Table.HeadCell>
              <Table.HeadCell>Comment Content</Table.HeadCell>
              <Table.HeadCell>Number of Likes</Table.HeadCell>
              <Table.HeadCell>UserName</Table.HeadCell>
              <Table.HeadCell>Email</Table.HeadCell>
              <Table.HeadCell>Delete</Table.HeadCell>
            </Table.Head>
            {comments.map((comments) => (
              <Table.Body key={comments._id} className="divide-y">
                <Table.Row className="bg-white dark:border-teal-400 dark:bg-gradient-to-bl to-black from-teal-900">
                  <Table.Cell>
                    {new Date(comments.updatedAt).toLocaleDateString()}
                  </Table.Cell>
                  <Table.Cell>{comments.content}</Table.Cell>
                  <Table.Cell>{comments.numberOfLikes}</Table.Cell>
                  <Table.Cell>{comments.postId}</Table.Cell>
                  <Table.Cell>{comments.userId}</Table.Cell>
                  <Table.Cell>
                    <span
                      onClick={() => {
                        setShowModal(true);
                        setCommentsIdToDelete(comments._id);
                      }}
                      className="text-red-600 hover:underline hover:font-semibold"
                    >
                      Delete
                    </span>
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
        <p>You currently have no comments</p>
      )}
      <Modal
        show={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        popup
        size="md"
      >
        <Modal.Header />
        <Modal.Body>
          <div>
            <HiOutlineExclamationCircle
              color="red"
              className="h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto"
            />
            <h3 className="mb-5 text-lg text-gray-500 dark:text-gray-400 text-center">
              Please confirm comment deletion?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleDeleteComment}>
                Confirm
              </Button>
              <Button color="gray" onClick={() => setShowModal(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default DashComments;
