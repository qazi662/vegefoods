import React from "react";
import Hero from "../components/Hero";
import bg from "../assets/image_3.jpg";
import ProductContext from "../context/products";
import Loading from "../components/Loading";
import Newsletter from "../components/Newsletter";
import ProductList from "../components/Product/ProductList";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Shop = () => {
  const { loading, products } = React.useContext(ProductContext);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <ToastContainer />
      <Hero image={bg} title="shop" breadName="shop" singleProduct={false} />
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 mb-5 text-center">
              <ul className="product-category">
                <li>
                  <Link to="*" className="active">
                    All
                  </Link>
                </li>
                <li>
                  <Link to="*">Vegetables</Link>
                </li>
                <li>
                  <Link to="*">Fruits</Link>
                </li>
                <li>
                  <Link to="*">Juice</Link>
                </li>
                <li>
                  <Link to="*">Dried</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            {products.map((item) => {
              return <ProductList key={item.id} {...item} />;
            })}
          </div>
          <div className="row mt-5">
            <div className="col text-center">
              <div className="block-27">
                <ul>
                  <li>
                    <Link to="*">&lt;</Link>
                  </li>
                  <li className="active">
                    <span>1</span>
                  </li>
                  <li>
                    <Link to="*">2</Link>
                  </li>
                  <li>
                    <Link to="*">3</Link>
                  </li>
                  <li>
                    <Link to="*">4</Link>
                  </li>
                  <li>
                    <Link to="*">5</Link>
                  </li>
                  <li>
                    <Link to="*">&gt;</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  );
};

export default Shop;
