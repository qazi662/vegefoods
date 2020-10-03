import React from "react";

import Slider from "react-slick";

import Loading from "../Loading";
import HomeContext from "../../context/home";

const Carousel = () => {
  const { loading, carousels } = React.useContext(HomeContext);

  var settings = {
    fade: true,
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  if (loading) {
    return <Loading />;
  } else {
    return (
      <Slider {...settings}>
        {carousels.map((item) => {
          return (
            <div key={item.id} className="carousel-item">
              <div
                className="carousel-item-sub"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.15)),url("${item.background.url}")`,
                }}
              >
                <h1 className="carousel-heading text-center">{item.heading}</h1>
                <h2 className="text-center carousel-subtitle">
                  {item.subtitle}
                </h2>
              </div>
            </div>
          );
        })}
        {/* <div
        className="carousel-item"
        // style={{
        //   backgroundImage: `url(./img/${s.imagePath})`,
        // }}
      >
        <div>
          <h1 className="carousel-heading text-center">
            We serve Fresh Vegestables &amp; Fruits
          </h1>
          <h2 className="text-center carousel-subtitle">
            We deliver organic vegetables &amp; fruits
          </h2>
        </div>
      </div> */}
        {/* <div
        className="carousel-item"
        // style={{
        //   backgroundImage: `url(./img/${s.imagePath})`,
        // }}
      >
        <div>
          <h1 className="carousel-heading text-center">
            100% Fresh &amp; Organic Foods
          </h1>
          <h2 className="text-center carousel-subtitle">
            We deliver organic vegetables &amp; fruits
          </h2>
        </div>
      </div> */}
      </Slider>
    );
  }
};

export default Carousel;
