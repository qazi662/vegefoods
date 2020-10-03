import React from "react";
import person1 from "../assets/person_1.jpg";
import person2 from "../assets/person_2.jpg";
import person3 from "../assets/person_3.jpg";
import person4 from "../assets/person_4.jpg";

import Slider from "react-slick";

const Testimony = () => {
  var settings = {
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
  };

  return (
    <section className="ftco-section testimony-section">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section text-center">
            <span className="subheading">Testimony</span>
            <h2 className="mb-4">Our satisfied customer says</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Slider {...settings} className="carousel-testimony">
              {/* <div class="carousel-testimony owl-carousel"> */}
              <div className="item">
                <div className="testimony-wrap p-4 pb-5">
                  <div
                    className="user-img mb-5"
                    style={{ backgroundImage: `url(${person1})` }}
                  >
                    <span className="quote d-flex align-items-center justify-content-center">
                      <i className="icon-quote-left"></i>
                    </span>
                  </div>
                  <div className="text text-center">
                    <p className="mb-5 pl-4 line">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <p className="name">Garreth Smith</p>
                    <span className="position">Marketing Manager</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap p-4 pb-5">
                  <div
                    className="user-img mb-5"
                    style={{ backgroundImage: `url(${person2})` }}
                  >
                    <span className="quote d-flex align-items-center justify-content-center">
                      <i className="icon-quote-left"></i>
                    </span>
                  </div>
                  <div className="text text-center">
                    <p className="mb-5 pl-4 line">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <p className="name">Garreth Smith</p>
                    <span className="position">Interface Designer</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap p-4 pb-5">
                  <div
                    className="user-img mb-5"
                    style={{ backgroundImage: `url(${person3})` }}
                  >
                    <span className="quote d-flex align-items-center justify-content-center">
                      <i className="icon-quote-left"></i>
                    </span>
                  </div>
                  <div className="text text-center">
                    <p className="mb-5 pl-4 line">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <p className="name">Garreth Smith</p>
                    <span className="position">UI Designer</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap p-4 pb-5">
                  <div
                    className="user-img mb-5"
                    style={{ backgroundImage: `url(${person4})` }}
                  >
                    <span className="quote d-flex align-items-center justify-content-center">
                      <i className="icon-quote-left"></i>
                    </span>
                  </div>
                  <div className="text text-center">
                    <p className="mb-5 pl-4 line">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <p className="name">Garreth Smith</p>
                    <span className="position">Web Developer</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap p-4 pb-5">
                  <div
                    className="user-img mb-5"
                    style={{ backgroundImage: `url(${person3})` }}
                  >
                    <span className="quote d-flex align-items-center justify-content-center">
                      <i className="icon-quote-left"></i>
                    </span>
                  </div>
                  <div className="text text-center">
                    <p className="mb-5 pl-4 line">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <p className="name">Garreth Smith</p>
                    <span className="position">System Analyst</span>
                  </div>
                </div>
                {/* </div> */}
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimony;
