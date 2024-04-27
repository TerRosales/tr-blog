import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import DashSidebar from "../components/DashSidebar";
import DashProfile from "../components/DashProfile";
import DashPosts from "../components/DashPosts";
import DashUsers from "../components/DashUsers";
const Dashboard = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFormUrl = urlParams.get("tab");
    if (tabFormUrl) {
      setTab(tabFormUrl);
    }
  }, [location.search]);
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div>
        {/* Sidebar */}
        <DashSidebar />
      </div>
      {/* Profile . . . */}
      {tab === "profile" && <DashProfile />}
      {/* Users */}
      {tab === "users" && <DashUsers />}
      {/* Posts */}
      {tab === "posts" && <DashPosts />}
    </div>
  );
};

export default Dashboard;
