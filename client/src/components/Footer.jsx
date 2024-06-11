import React from "react";
import Logo from "./Logo";
import { Footer } from "flowbite-react";
import { BsFacebook, BsLinkedin, BsGithub, BsTwitterX } from "react-icons/bs";
import { Link } from "react-router-dom";

const FooterComp = () => {
  return (
    <Footer container className="border boder-t-8 border-teal-700">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mr-10">
            <Logo />
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <a
                  href="https://www.facebook.com/terrence.rosales/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  Personal Page
                </a>
                <Link to="/tools" className="footer-link">
                  Tools
                </Link>
                <Link to="/portfolio" className="footer-link">
                  Portfolio
                </Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Reads" />
              <Footer.LinkGroup col>
                <Link to="/books" className="footer-link">
                  Books
                </Link>
                <Link to="/courses" className="footer-link">
                  Courses
                </Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Link to="/privacy-policy" className="footer-link">
                  Privacy Policy
                </Link>
                <Link to="/terms-conditions" className="footer-link">
                  Terms and Conditions
                </Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Terrence Rosales"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon
              href="https://www.facebook.com/terrence.rosales/"
              icon={BsFacebook}
            />
            <Footer.Icon href="https://github.com/TerRosales" icon={BsGithub} />
            <Footer.Icon
              href="https://www.linkedin.com/in/trtinrosales/"
              icon={BsLinkedin}
            />
            <Footer.Icon href="https://x.com/RTIN104" icon={BsTwitterX} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComp;
