import React from "react";
import EmptyCart from "../components/Cart/EmptyCart";
import CartContext from "../context/cart";
import { Link } from "react-router-dom";
import CartItem from "../components/Cart/CartItem";
import Hero from "../components/Hero";
import bg from "../assets/bg_1.jpg";
import Newsletter from "../components/Newsletter";
import LoginModal from "../components/LoginModal";
import UserContext from "../context/user";

const Cart = () => {
  const { user } = React.useContext(UserContext);

  const { cart, total } = React.useContext(CartContext);

  if (cart.length === 0) {
    return <EmptyCart />;
  } else {
    return (
      <>
        <Hero
          image={bg}
          title="My Shopping Cart"
          breadName="cart"
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
                        <th>&nbsp;</th>
                        <th>Product name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((item) => {
                        return <CartItem key={item.id} {...item} />;
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="row justify-content-end">
              <div className="col-lg-4 mt-5 cart-wrap">
                <div className="cart-total mb-3">
                  <h3>Cart Totals</h3>
                  <p className="d-flex">
                    <span>Subtotal</span>
                    <span>$20.60</span>
                  </p>
                  <p className="d-flex">
                    <span>Delivery</span>
                    <span>$0.00</span>
                  </p>
                  {/* <p className="d-flex">
                    <span>Discount</span>
                    <span>$3.00</span>
                  </p> */}
                  <hr />
                  <p className="d-flex total-price">
                    <span>Total</span>
                    <span>${total}</span>
                  </p>
                </div>
                <span>
                  {user.token ? (
                    <Link to="/checkout" className="btn btn-primary py-3 px-4">
                      Proceed to Checkout
                    </Link>
                  ) : (
                    <LoginModal
                      buttonClassName="btn btn-primary py-3 px-4"
                      buttonLabel="Login or Signup"
                    />
                  )}
                </span>
              </div>
            </div>
          </div>
        </section>
        <LoginModal />
        <Newsletter />
      </>
    );
  }
};

export default Cart;
