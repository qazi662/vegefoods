import React from "react";
import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center my-5">
      <GiShoppingCart className="empty-cart-icon" />
      <h2 className="text-uppercase">No items in cart</h2>
      <Link className="py-2 px-3 my-3 mb-5 text-white error-link" to="/shop">
        Go To Shop
      </Link>
    </div>
  );
};

export default EmptyCart;
