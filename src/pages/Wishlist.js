import React from "react";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import bg from "../assets/bg_1.jpg";

const Wishlist = () => {
  return (
    <>
      <Hero
        image={bg}
        title="my wishlist"
        breadName="wishlist"
        singleProduct={false}
      />
      <section className="ftco-section ftco-cart">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="cart-list">
                <table className="table">
                  <thead className="thead-primary">
                    <tr className="text-center">
                      <th>&nbsp;</th>
                      <th>Product List</th>
                      <th>&nbsp;</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  );
};

export default Wishlist;
