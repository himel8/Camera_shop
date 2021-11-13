import React from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
import FlashSale from "../FlashSale/FlashSale";
import Footer from "../../Shared/Footer/Footer";
import Products from "../Products/Products";
import ReviewsData from "../ReviewsData/ReviewsData";
import Newsalatter from "../Newslatter/Newsalatter";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <FlashSale />
      <Products />
      <ReviewsData />
      <Newsalatter />
      <Footer />
    </div>
  );
};

export default Home;
