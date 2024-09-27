import React from "react";
import "../CSS/LoaderImg.css";
import LoadeImg from "../Assets/Explainer Video_ CricketID.gif";

const LoaderImg = () => {
  return (
    <div className="img-section">
      <h1>Loading please wait...</h1>
      <img src={LoadeImg} alt="" />
    </div>
  );
};

export default LoaderImg;
