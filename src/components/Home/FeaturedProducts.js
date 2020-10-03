import React from "react";
import ProductsContext from "../../context/products";
import Loading from "../Loading";
import ProductList from "../Product/ProductList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FeaturedProducts = () => {
  const { loading, featured } = React.useContext(ProductsContext);

  if (loading) {
    return <Loading />;
  }
  return (
    <section className="ftco-section">
      <ToastContainer />
      <div className="container">
        <div className="row justify-content-center mb-3 pb-3">
          <div className="col-md-12 heading-section text-center">
            <span className="subheading">Featured Products</span>
            <h2 className="mb-4">Our Products</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {featured.map((item) => {
            return <ProductList key={item.id} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
