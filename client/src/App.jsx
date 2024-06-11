// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./global.css";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Builds from "./pages/Builds";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import Blog from "./pages/Blog";
import FooterComp from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute";
import CreatePost from "./pages/CreatePost";
import UpdatePost from "./pages/UpdatePost";
import PostPage from "./pages/PostPage";
import ScrollToTop from "./components/ScrollToTop";
import Tools from "./pages/footerComponents/Tools";
import Portfolio from "./pages/footerComponents/Portfolio";
import Books from "./pages/footerComponents/Books";
import Courses from "./pages/footerComponents/Courses";
import PrivacyPolicy from "./pages/footerComponents/PrivacyPolicy";
import TermsConditions from "./pages/footerComponents/TermsConditions";
import Search from "./pages/Search";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/search" element={<Search />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/books" element={<Books />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:postId" element={<UpdatePost />} />
        </Route>
        <Route path="/Blog" element={<Blog />} />
        <Route path="/builds" element={<Builds />} />
        <Route path="/post/:postSlug" element={<PostPage />} />
      </Routes>
      <FooterComp />
    </BrowserRouter>
  );
}

export default App;
