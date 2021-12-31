import React from "react";
import "../App.css";

const Main = () => {
  return (
    <div className="main">
      <div className="main-banner-container">
        <img
          src={require("../assets/banner.png")}
          alt="banner"
          className="main-banner"
        ></img>
      </div>
    </div>
  );
};

export default Main;
