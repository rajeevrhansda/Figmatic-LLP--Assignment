import React from "react";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import "./dashboard.css";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navbar/>
      <Content/>
    </div>
  );
};

export default Dashboard;
