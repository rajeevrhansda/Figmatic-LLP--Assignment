import React from "react";
import "./Content.css";
import Image from "../../../data/img/image.jpg";
import Data from "../../../data/Data";
// import User from "../../../data/"
const Content = () => {
  return (
    <div className="content">
      <div className="page-header">
        <div className="page-name"><h2>KNOWLEDGE</h2></div>
        <div className="page-user">
          <button className="user-button">Create Course</button>
          <img className="user-image" src={Image} alt="user" />  
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
      </div>
      {/* ----------------PAGE HEADER-------END------------- */}

      <div className="page-content">
        <div className="category">
          <div className="category-left">
            <h4>ALL</h4>
            <h4>LIVE</h4>
            <h4>DRAFT</h4>
            <h4>ARCHIVED</h4>
          </div>
          <div className="category-right">
              <select name="plan" id="plan">
                  <option defaultValue="none" selected disabled hidden>Select team</option>
                  <option value="free">Free</option>
                  <option value="starter">Starter </option>
                  <option value="professional">Professional</option>
                  <option value="corporate">Corporate</option>
                  </select>
          </div>
        </div>
        <div className="folders">
          {Data.map((item) => (
            <div key={item.id} className="folder-item">
              <img className="folder-image" src={Image} alt="product" />
              <div className="product-details">
                <h5>{item.title}</h5>
                <p>Last updated : {item.updated}</p>
                <p>Lession Minutes: {item.lesson} Minutes: {item.minutes}</p>
                <button className="product-button">{item.category}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
