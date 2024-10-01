import React from "react";
// import Navbar from "../Components/Navbar";
import Navbars from "../Components/Navbars";
import Banners from "../Components/Banners";
import MatchCards from "../Components/MatchCards";
import "../CSS/Home.css";
import Blogs from "../Components/Blogs";

const Home = () => {
  return (
    <div className="home-section">
      <div className="home-container">
        <Navbars />
        <div className="banner-comp">
          <Banners />
        </div>
        <MatchCards />
        <Blogs />
      </div>
    </div>
  );
};

export default Home;
