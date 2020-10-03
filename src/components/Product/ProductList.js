import React from "react";
import { Link } from "react-router-dom";
import { IoIosCart, IoIosHeart, IoIosMenu } from "react-icons/io";
import CartContext from "../../context/cart";
import HomeContext from "../../context/home";

const ProductList = ({ title, id, price, image }) => {
  const { notify } = React.useContext(HomeContext);

  const { addToCart } = React.useContext(CartContext);

  const product = { id, image, title, price, amount: 1 };

  return (
    <div className="col-md-6 col-lg-3 ">
      <div className="product">
        <Link to={`shop/${id}`} className="img-prod">
          <img className="img-fluid" src={image.url} alt={title} />
          {/* <span class="status">30%</span> */}
          <div className="overlay"></div>
        </Link>
        <div className="text py-3 pb-4 px-3 text-center">
          <h3>
            <Link to={`shop/${id}`}>{title}</Link>
          </h3>
          <div className="d-flex">
            <div className="pricing">
              <p className="price">
                <span className="mr-2">${price}</span>
                {/* <span class="price-sale">$80.00</span> */}
              </p>
            </div>
          </div>
          <div className="bottom-area d-flex px-3">
            <div className="m-auto d-flex">
              <Link
                to={`shop/${id}`}
                className="featured-bottom add-to-cart d-flex justify-content-center align-items-center text-center"
              >
                <IoIosMenu />
              </Link>
              <div
                className="featured-bottom buy-now d-flex justify-content-center align-items-center mx-1"
                onClick={() => {
                  addToCart(product);
                  notify("✔️ Added to Your Shopping Cart");
                }}
              >
                <IoIosCart />
              </div>
              <div className="featured-bottom heart d-flex justify-content-center align-items-center ">
                <IoIosHeart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
