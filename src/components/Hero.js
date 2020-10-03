import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

const Hero = ({ image, breadName, title, singleProduct }) => {
  return (
    <div
      className="hero-wrap hero-bread"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)),url(${image})`,
      }}
    >
      <div className="container">
        <div className="row no-gutters slider-text align-items-center justify-content-center">
          <div className="col-md-9 text-center">
            <Breadcrumb className="hero-breadcrumb">
              <BreadcrumbItem>
                <Link to="/" className="breadcrumb-item">
                  Home
                </Link>
              </BreadcrumbItem>
              {singleProduct ? (
                <>
                  <BreadcrumbItem tag="span">
                    <Link to="/shop" className="breadcrumb-item">
                      Shop
                    </Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem active tag="span">
                    {breadName}
                  </BreadcrumbItem>
                </>
              ) : (
                <BreadcrumbItem active tag="span">
                  {breadName}
                </BreadcrumbItem>
              )}
            </Breadcrumb>
            <h1 className="mb-0 bread">{title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
