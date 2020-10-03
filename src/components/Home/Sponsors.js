import React from "react";
import partner1 from "../../assets/partner-1.png";
import partner2 from "../../assets/partner-2.png";
import partner3 from "../../assets/partner-3.png";
import partner4 from "../../assets/partner-4.png";
import partner5 from "../../assets/partner-5.png";

const Sponsors = () => {
  return (
    <section className="ftco-section ftco-partner">
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="partner">
              <img src={partner1} className="img-fluid" alt="microsoft" />
            </div>
          </div>
          <div className="col-sm">
            <div className="partner">
              <img src={partner2} className="img-fluid" alt="android" />
            </div>
          </div>
          <div className="col-sm ">
            <div className="partner">
              <img src={partner3} className="img-fluid" alt="java" />
            </div>
          </div>
          <div className="col-sm">
            <div className="partner">
              <img src={partner4} className="img-fluid" alt="google" />
            </div>
          </div>
          <div className="col-sm">
            <div className="partner">
              <img src={partner5} className="img-fluid" alt="adobe" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
