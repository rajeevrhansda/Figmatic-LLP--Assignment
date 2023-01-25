import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    // <div>
    <>
      <nav className="navbar">
        <div className="navbar-name">Remote SalesFuel</div>
        <div className="navbar-items-container">
          <div className="navbar-items">
            <i class="fa-solid fa-house-user"></i>
            <a href="/">DASHBOARD</a>
          </div>
          <div className="navbar-items active">
            <i class="fa-solid fa-graduation-cap"></i>
            <a href="/">KNOWLEDGE</a>
          </div>
          <div className="navbar-items">
            <i class="fa-solid fa-user"></i>
            <a href="/">MEMBERS</a>
          </div>
          <div className="navbar-items">
            <i class="fa-brands fa-teamspeak"></i>
            <a href="/">TEAMS</a>
          </div>
          <div className="navbar-items">
            <i class="fa-solid fa-folder"></i>
            <a href="/">VAULT</a>
          </div>
          <div className="navbar-items">
            <i class="fa-solid fa-house-user"></i>
            <a href="/">CHAT</a>
          </div>
        </div>
        <div className="setting-container">
        <div className="navbar-items">
        <i class="fa-solid fa-gear"></i>
            <a href="/">SETTINGS</a>
          </div>
          <div className="navbar-items">
          <i class="fa-solid fa-building"></i>     
            <a href="/">COMPANY</a>
          </div>
          <div className="navbar-items">
          <i class="fa-solid fa-circle-user"></i> 
            <a href="/">MY PROFILE</a>
          </div>
        </div>
        <h5 className="poweredby"> Powered By TeamJeenyus</h5>
      </nav>
    </>
  );
};

export default Navbar;
