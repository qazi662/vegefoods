import React from "react";
import bg3 from "../../assets/bg_3.jpg";
import Ticker from "../Ticker";

const Customers = () => {
  return (
    <section
      className="ftco-section ftco-counter img"
      id="section-counter"
      style={{ backgroundImage: `url(${bg3})` }}
    >
      <div className="container">
        <div className="row justify-content-center py-5">
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-3 d-flex justify-content-center counter-wrap">
                <div className="block-18 text-center">
                  <div className="text">
                    <strong className="number" data-number="10000">
                      <Ticker className="customer-text" end={100} suffix="" />
                    </strong>
                    <span>Happy Customers</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex justify-content-center counter-wrap">
                <div className="block-18 text-center">
                  <div className="text">
                    <strong className="number" data-number="100">
                      <Ticker className="customer-text" end={10} suffix="" />
                    </strong>
                    <span>Branches</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex justify-content-center counter-wrap">
                <div className="block-18 text-center">
                  <div className="text">
                    <strong className="number" data-number="1000">
                      <Ticker className="customer-text" end={20} suffix="" />
                    </strong>
                    <span>Partner</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex justify-content-center counter-wrap">
                <div className="block-18 text-center">
                  <div className="text">
                    <strong className="number" data-number="100">
                      <Ticker className="customer-text" end={50} suffix="" />
                    </strong>
                    <span>Awards</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
