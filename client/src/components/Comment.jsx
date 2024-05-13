import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { FaThumbsUp } from "react-icons/fa";
import { Textarea, Button } from "flowbite-react";

const Comment = ({ comment, onLike, onEdit, onDelete }) => {
  const [user, setUser] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(comment.content);
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`/api/user/${comment.userId}`);
        const data = await res.json();
        if (res.ok) {
          setUser(data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getUser();
  }, [comment]);

  const handleEdit = () => {
    setIsEditing(true);
    setEditedContent(comment.content);
  };

  const handleSave = async () => {
    try {
      const res = await fetch(`/api/comment/editComment/${comment._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: editedContent,
        }),
      });
      if (res.ok) {
        setIsEditing(false);
        onEdit(comment, editedContent);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flext p-4 border-b dark:border-gray-600 text-sm">
      <div className="flex-srhink-0 mr-3">
        <img
          src={user.profilePicture}
          alt={user.username}
          className="w-10 h-10 rounded-full bg-gray-200"
        />
      </div>
      <div className="flex-1">
        <div className="my-2 flex items-center">
          <span className="font-bold mr-1 text-xs truncate">
            {user ? `@${user.username}` : "anonymous"}
          </span>
          <span className="text-gray-500 text-xs">
            {moment(comment.createdAt).fromNow()}
          </span>
        </div>
        {isEditing ? (
          <>
            <Textarea
              className="mb-2 w-full p-2 text-gray-700 bg-gray-200 rounded-md resize-none focus:outline-none focus:bg-gray-100 dark:outline-teal-600 dark:bg-teal-600"
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
            />
            <div className="flex justify-end gap-2 text-xs">
              <Button
                className="text-teal-700 dark:text-white"
                type="button"
                size="sm"
                gradientDuoTone="greenToBlue"
                onClick={handleSave}
              >
                Save
              </Button>
              <Button
                className="text-teal-700 dark:text-white"
                type="button"
                size="sm"
                gradientDuoTone="greenToBlue"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </Button>
            </div>
          </>
        ) : (
          <>
            <p className="dark:border-teal-400 border-t border-gray-400 text-gray-500 pb-2 pt-2 pl-5">
              {comment.content}
            </p>
            <div className="flex items-center pt-2 text-xs border-t dark:border-teal-500 max-w-fit gap-2">
              <button
                type="button"
                onClick={() => onLike(comment._id)}
                className={`text-gray-400 hover:text-blue-500 ${
                  currentUser &&
                  comment.likes.includes(currentUser._id) &&
                  "!text-blue-500"
                }`}
              >
                <FaThumbsUp className="text-sm" />
              </button>
              <p className="text-gray-400">
                {comment.numberOfLikes > 0 &&
                  comment.numberOfLikes +
                    " " +
                    (comment.numberOfLikes === 1 ? "like" : "likes")}
              </p>
              {currentUser &&
                (currentUser._id === comment.userId || currentUser.isAdmin) && (
                  <>
                    <button
                      type="button"
                      onClick={handleEdit}
                      className="text-gray-400 hover:text-blue-500"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => onDelete(comment._id)}
                      className="text-gray-400 hover:text-red-500"
                    >
                      Delete
                    </button>
                  </>
                )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Comment;
