import React from "react";
import { Link } from "react-router-dom";
import categoryImg from "../../assets/category.jpg";
import categoryOne from "../../assets/category-1.jpg";
import categoryTwo from "../../assets/category-2.jpg";
import categoryThree from "../../assets/category-3.jpg";
import categoryFour from "../../assets/category-4.jpg";

const HomeCategories = () => {
  return (
    <section className="ftco-section ftco-category ftco-no-pt">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-6 order-md-last align-items-stretch d-flex">
                <div
                  className="category-wrap-2 img align-self-stretch d-flex"
                  style={{ backgroundImage: `url(${categoryImg})` }}
                >
                  <div className="text text-center">
                    <h2>Vegetables</h2>
                    <p>Protect the health of every home</p>
                    <p>
                      <Link to="/shop" className="btn btn-primary">
                        Shop now
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <Link
                  to="/shop"
                  className="category-wrap img mb-4 d-flex align-items-end"
                  style={{ backgroundImage: `url(${categoryOne})` }}
                >
                  <div className="text px-3 py-1">
                    <h2 className="mb-0">
                      <p className="text-white home-category-name">Fruits</p>
                    </h2>
                  </div>
                </Link>
                <Link
                  to="/shop"
                  className="category-wrap img d-flex align-items-end"
                  style={{ backgroundImage: `url(${categoryTwo})` }}
                >
                  <div className="text px-3 py-1">
                    <h2 className="mb-0">
                      <p className="text-white home-category-name">
                        Vegetables
                      </p>
                    </h2>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <Link
              to="/shop"
              className="category-wrap img mb-4 d-flex align-items-end"
              style={{ backgroundImage: `url(${categoryThree})` }}
            >
              <div className="text px-3 py-1">
                <h2 className="mb-0">
                  <p className="text-white home-category-name">Juices</p>
                </h2>
              </div>
            </Link>
            <Link
              to="/shop"
              className="category-wrap img d-flex align-items-end"
              style={{ backgroundImage: `url(${categoryFour})` }}
            >
              <div className="text px-3 py-1">
                <h2 className="mb-0">
                  <p className="text-white home-category-name">Dried</p>
                </h2>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCategories;
