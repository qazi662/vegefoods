import React from "react";
import Hero from "../components/Hero";
import bg from "../assets/bg_1.jpg";
import Video from "../components/About/Video";
import Customers from "../components/About/Customers";
import Testimony from "../components/Testimony";
import Services from "../components/Services";
import Newsletter from "../components/Newsletter";

const About = () => {
  return (
    <>
      <Hero
        image={bg}
        title="about us"
        breadName="about"
        singleProduct={false}
      />
      <Video />
      <Newsletter />
      <Customers />
      <Testimony />
      <Services />
    </>
  );
};

export default About;
