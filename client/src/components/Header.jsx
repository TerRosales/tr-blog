import React from "react";
import Logo from "./Logo";
import { Navbar, TextInput, Button } from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const path = useLocation().pathname;

  return (
    <Navbar className="border-b-2 p-0 m-0">
      <Logo />
      <form>
        <TextInput
          className="hidden lg:inline button-gradient"
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
        />
      </form>
      <Button className="button-gradient">
        <AiOutlineSearch />
      </Button>
      <div className="flex">
        <Button className="w-12 h-10 hidden sm:inline button-gradient">
          <FaMoon />
        </Button>
        <Link to="/signin">
          <Button outline gradientDuoTone="greenToBlue">
            Sign In
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link as={"div"} active={path === "/"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link as={"div"} active={path === "/about"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link as={"div"} active={path === "/poppin"}>
          <Link to="/signin">What&rsquo;s Poppin</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
