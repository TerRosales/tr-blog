import React, { useEffect, useRef, useState } from "react";
import { FaCamera } from "react-icons/fa";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useSelector } from "react-redux";
import { TextInput, Button, Alert, Modal } from "flowbite-react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import {
  updateStart,
  updateSuccess,
  updateFailure,
  deleteUserStart,
  deleteUserFailure,
  deleteUserSuccess,
  signoutSuccess,
} from "../redux/user/userSlice.js";
import { useDispatch } from "react-redux";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Link } from "react-router-dom";

const DashProfile = () => {
  const { currentUser, error, loading } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({});
  const [imageFile, setImageFile] = useState(null);
  const [imageFileUrl, setImageFileUrl] = useState(null);
  const [updateUserSuccess, setUpdateUserSuccess] = useState(null);
  const [updateUserError, setUpdateUserError] = useState(null);
  const [imageFileUploadProgress, setImageFileUploadProgress] = useState(null);
  const [imageFileUploadError, setImageFileUploadError] = useState(null);
  const [imageFileUploading, setimageFileUploading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const filePickerRef = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImageFileUrl(URL.createObjectURL(file));
    }
  };
  useEffect(() => {
    if (imageFile) {
      uploadImage();
    }
  }, [imageFile]);
  const uploadImage = async () => {
    //firebase storage rules
    // service firebase.storage {
    //   match /b/{bucket}/o {
    //     match /{allPaths=**} {
    //       allow read;
    //       allow write: if request.request.size < 2 * 1024 * 1024 &&
    //       request.resource.contentType.matches('image/.*')
    //     }
    //   }
    // }
    setimageFileUploading(true);
    setImageFileUploadError(null);
    const storage = getStorage(app);
    const fileName = new Date().getTime() + imageFile.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImageFileUploadProgress(progress.toFixed(0));
      },
      (error) => {
        setImageFileUploadError("Must be less than 2MB in JPEG/JPG/PNG format");
        setImageFileUploadProgress(null);
        setImageFile(null);
        setImageFileUrl(null);
        setimageFileUploading(false);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageFileUrl(downloadURL);
          setFormData({ ...formData, profilePicture: downloadURL });
          setimageFileUploading(false);
        });
      }
    );
  };

  const handleChange = (e) => {
    setFormData({ ...FormData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setUpdateUserError(null);
    setUpdateUserSuccess(null);
    if (Object.keys(formData).length === 0) {
      setUpdateUserError("No changes were made");
      return;
    }
    if (imageFileUploading) {
      setUpdateUserError("Please wait for the upload to finish");
      return;
    }
    try {
      dispatch(updateStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        dispatch(updateFailure(data.message));
        setUpdateUserError(data.message);
      } else {
        dispatch(updateSuccess(data));
        setUpdateUserSuccess("Profile has been successfully updated");
      }
    } catch (error) {
      dispatch(updateFailure(error.message));
      setUpdateUserError(error.message);
    }
  };
  const handleDeleteUser = async () => {
    setShowModal(false);
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok) {
        dispatch(deleteUserFailure(data.message));
      } else {
        dispatch(deleteUserSuccess(data));
      }
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };

  const handleSignout = async () => {
    try {
      const res = await fetch("/api/user/signout", { method: "POST" });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="max-w-lg mx-auto p-3 w-full">
      <h1 className="my-7 text-center font-semibold text-3xl text-[white]">
        Profile
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="relative">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            ref={filePickerRef}
            hidden
          />
          {isHovered && (
            <>
              <span className="cursor-pointer absolute z-10 mt-16 inset-0 flex flex-col  items-center justify-center text-gray-300 font-semibold opacity-[0.86]">
                Upload Profile Picture
              </span>
              <FaCamera className="cursor-pointer absolute mt-20 w-12 h-12 justify-center items-center text-gray-300 opacity-[0.86] left-1/2 -translate-x-1/2" />
            </>
          )}
        </div>
        <div
          className="relative w-32 h-32 self-center cursor-pointer shadow-md everflow-hidden rounded-full hover:bg-white"
          onClick={() => filePickerRef.current.click()}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {imageFileUploadProgress && (
            <CircularProgressbar
              value={imageFileUploadProgress || 0}
              text={`${imageFileUploadProgress}%`}
              strokeWidth={5}
              styles={{
                root: {
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                },
                path: {
                  stroke: `rgba(3,21,17, ${imageFileUploadProgress / 100})`,
                },
              }}
            />
          )}
          <img
            src={imageFileUrl || currentUser.profilePicture}
            alt="user"
            className={`rounded-full w-full h-full object-cover border-8 border-[#1f2939] ${
              imageFileUploadProgress &&
              imageFileUploadProgress < 100 &&
              "opacity-60"
            }`}
          />
        </div>
        <TextInput
          type="text"
          id="username"
          onChange={handleChange}
          placeholder="Username"
          defaultValue={currentUser.username}
        />
        <TextInput
          type="email"
          id="email"
          onChange={handleChange}
          placeholder="Email Address"
          defaultValue={currentUser.email}
        />
        <TextInput
          type="password"
          id="password"
          onChange={handleChange}
          placeholder="Password"
        />
        <Button
          type="submit"
          gradientDuoTone="greenToBlue"
          outline
          disabled={loading || imageFileUploading}
        >
          Update
        </Button>
        {currentUser.isAdmin && (
          <Link to={"/create-post"}>
            <Button
              type="button"
              outline
              gradientDuoTone="cyanToBlue"
              className="w-full"
            >
              Create a post
            </Button>
          </Link>
        )}
      </form>
      {imageFileUploadError && (
        <Alert color="failure">{imageFileUploadError}</Alert>
      )}
      {updateUserSuccess && (
        <Alert color="success" className="mt-5">
          {updateUserSuccess}
        </Alert>
      )}
      {updateUserError && (
        <Alert color="failure" className="mt-5">
          {updateUserError}
        </Alert>
      )}
      {error && (
        <Alert color="failure" className="mt-5">
          {error}
        </Alert>
      )}
      <div className="text-red-500 flex justify-between mt-52">
        <span onClick={() => setShowModal(true)} className="cursor-pointer">
          Delete Account
        </span>
        <span onClick={handleSignout} className="cursor-pointer">
          Sign Out
        </span>
      </div>
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
            <h3 className="mb-5 text-lg text-gray-500 dark:text-gray-400">
              Confirm your account deletion. Are you sure?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleDeleteUser}>
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

export default DashProfile;
