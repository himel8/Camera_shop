import React from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
import FlashSale from "../FlashSale/FlashSale";
import Footer from "../../Shared/Footer/Footer";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <FlashSale />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
