import React, { useState } from "react";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import userSlice, {
  signInStart,
  signInFailure,
  signInSuccess,
} from "../redux/user/userSlice";
import OAuth from "../components/OAuth";
import images from "../images.js";
import CallToAction from "../components/CallToAction.jsx";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const [successMessage, setSuccessMessage] = useState(null);
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure("Please fill out all fields"));
    }

    try {
      dispatch(signInStart());
      setSuccessMessage(null);
      const res = await fetch("api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }
      setSuccessMessage(`Signing in...`);
      if (res.ok) {
        dispatch(signInSuccess(data));
        setTimeout(() => {
          navigate("/");
        }, 1500);
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  console.log(formData);
  return (
    <div className="min-h-screen mt-10">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center">
        {/* left */}
        <div className="flex-1 mx-5">
          <div className="flex">
            <img
              src={images.trBlogLogo}
              alt="logo"
              className="w-[100px] h-[120px] mx-auto"
            />
          </div>
          <p className="my-3 mx-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            optio deleniti possimus voluptatum? Ipsa itaque tempore ut quis,
            laboriosam.
          </p>
        </div>
        {/* right */}
        <div className="flex-1 mx-5">
          {successMessage && (
            <Alert className="mt-5" color="success">
              {successMessage}
            </Alert>
          )}
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Email" />
              <TextInput
                type="email"
                placeholder="Enter your email"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Password" />
              <TextInput
                type="password"
                placeholder="**********"
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button
              gradientDuoTone="greenToBlue"
              outline
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                "Sign In"
              )}
            </Button>
            <OAuth />
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Create an account? </span>
            <Link to="/signup" className="text-blue-500">
              &nbsp;Sign Up
            </Link>
          </div>
          {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
      <CallToAction />
    </div>
  );
};

export default SignIn;
