import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/sidebar";
import Feed from "../../components/feed/feed";
import Rightbar from "../../components/rightbar/righbar";
import "./Home.css";
const Home = () => {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
};

export default Home;
