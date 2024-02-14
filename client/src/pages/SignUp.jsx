import React, { useState } from "react";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage("Please fill out all fields");
    }

    try {
      setLoading(true);
      setErrorMessage(null);
      setSuccessMessage(null);
      const res = await fetch("api/auth/sign-up", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setSuccessMessage(`Sign in successfully, Redirecting`);
      setLoading(false);
      if (res.ok) {
        setTimeout(() => {
          navigate("/sign-in");
        }, 1500);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };
  console.log(formData);
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center">
        {/* left */}
        <div className="flex-1 mx-3">
          <Link to="/" className="text-[30px] font-bold dark:text-white">
            Pocket&nbsp;
            <span className="text-teal-500 text-[30px]">&#123;</span>&nbsp;
            <span className="px-2 py-1 text-[32px] rounded-lg text-white font-bold bg-gradient-to-b from-slate-900 to-teal-700 ">
              {" "}
              Items: &infin;
            </span>
            &nbsp;
            <span className="text-teal-500 text-[30px]">&#125;</span>
          </Link>
          <p className="my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            optio deleniti possimus voluptatum? Ipsa itaque tempore ut quis,
            laboriosam.
          </p>
        </div>
        {/* right */}
        <div className="flex-1 mx-3">
          {successMessage && (
            <Alert className="mt-5" color="success">
              {successMessage}
            </Alert>
          )}
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Username" />
              <TextInput
                type="text"
                placeholder="Enter valid username"
                id="username"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Email" />
              <TextInput
                type="email"
                placeholder="Enter valid email address"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Password" />
              <TextInput
                type="password"
                placeholder="Enter valid password"
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button
              gradientMonochrome="failure"
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
                "Sign Up"
              )}
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Already registered?</span>
            <Link to="/sign-in" className="text-blue-500">
              &nbsp;Sign In
            </Link>
          </div>
          {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
