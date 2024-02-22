import React from "react";
import { Button } from "flowbite-react";
import { AiFillGoogleCircle } from "react-icons/ai";

const OAuth = () => {
  const handleGoogleClick = async () => {};

  return (
    <Button gradientDuoTone="redToYellow" outline onClick={handleGoogleClick}>
      <AiFillGoogleCircle />
      &nbsp;Continue with Google
    </Button>
  );
};

export default OAuth;
