import React from "react";
import Carousel from "../components/Home/Carousel";
import DealOfTheDay from "../components/Home/DealOfTheDay";
import FeaturedProducts from "../components/Home/FeaturedProducts";
import HomeCategories from "../components/Home/HomeCategories";
import Sponsors from "../components/Home/Sponsors";
import Newsletter from "../components/Newsletter";
import Services from "../components/Services";
import Testimony from "../components/Testimony";

const Home = () => {
  return (
    <>
      <Carousel />
      <Services />
      <HomeCategories />
      <FeaturedProducts />
      <DealOfTheDay />
      <Testimony />
      <Sponsors />
      <Newsletter />
    </>
  );
};

export default Home;
