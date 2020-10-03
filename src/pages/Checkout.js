import React from "react";
import UserContext from "../context/user";
import CartContext from "../context/cart";
import HomeContext from "../context/home";
import { Redirect, useHistory } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import EmptyCart from "../components/Cart/EmptyCart";
import submitOrder from "../strapi/submitOrder";
import UserLoading from "../components/UserLoading";
// import {
//   CardElement,
//   StripeProvider,
//   Elements,
//   injectStripe,
// } from "react-stripe-elements";
import bg from "../assets/bg_2.jpg";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const { user } = React.useContext(UserContext);
  const { cart, total, clearCart } = React.useContext(CartContext);
  const { loading, setLoading, notify } = React.useContext(HomeContext);
  const history = useHistory();

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [state, setState] = React.useState("select");
  const [address, setAddress] = React.useState("");
  const [city, setCity] = React.useState("");
  const [postcode, setPostcode] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [error, setError] = React.useState("");
  const [payment, setPaymentMethod] = React.useState("");
  const [agree, setAgree] = React.useState(false);

  const isEmpty =
    !firstName ||
    !lastName ||
    !state ||
    state === "select" ||
    !address ||
    !city ||
    !postcode ||
    !email ||
    !phone ||
    payment === "" ||
    loading ||
    !agree;

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    setError("");
    let order = await submitOrder({
      firstname: firstName,
      lastname: lastName,
      totalprice: total,
      items: cart,
      userToken: user.token,
      state,
      address,
      city,
      postalcode: postcode,
      email,
      phone,
      payment,
    });
    if (order) {
      setLoading(false);
      notify("✔️ Your order has been placed");
      clearCart();
      history.push("/");
      return;
    } else {
      setLoading(false);
      notify("❌ An error has occured. Try again");
    }

    // const response = await props.stripe
    //   .createToken()
    //   .catch((error) => console.log(error));

    // const response = await props.stripe
    //   .createToken()
    //   .catch((error) => console.log(error));

    // console.log(response);
    // const { token } = response;
    // if (token) {
    //   console.log(token);
    // } else {
    //   setLoading(false);
    //   setError(response.error.message);
    // }
  }

  if (loading) {
    return <UserLoading />;
  }

  if (!user.token) {
    return <Redirect to="/" />;
  } else if (cart.length < 1) {
    return (
      <>
        <ToastContainer />
        <EmptyCart />
      </>
    );
  } else {
    return (
      <>
        <Hero
          image={bg}
          title="checkout"
          breadName="checkout"
          singleProduct={false}
        />
        <ToastContainer />
        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7">
                <form className="billing-form">
                  <h3 className="mb-4 billing-heading">Billing Details</h3>
                  <div className="row align-items-end">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="firstname">Firt Name</label>
                        <input
                          type="text"
                          name="firstname"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          className="form-control"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="lastname">Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="lastname"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div className="w-100"></div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="state">State</label>
                        <div className="select-wrap">
                          <div className="icon">
                            <span className="ion-ios-arrow-down">
                              <IoIosArrowDown />
                            </span>
                          </div>
                          <select
                            name="state"
                            className="form-control"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                          >
                            <option value="select">Select</option>
                            <option value="balochistan">Balochistan</option>
                            <option value="gilgit">Gilgit Baltistan</option>
                            <option value="kpk">Khyber Pakhtunkhwa</option>
                            <option value="punjab">Punjab</option>
                            <option value="sindh">Sindh</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="w-100"></div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="streetaddress">Street Address</label>
                        <input
                          type="text"
                          className="form-control"
                          name="streetaddress"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          placeholder="House number and street name"
                        />
                      </div>
                    </div>
                    {/* <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Appartment, suite, unit etc: (optional)"
                        />
                      </div>
                    </div> */}
                    <div className="w-100"></div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="towncity">Town / City</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                          name="towncity"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="postcodezip">Postcode / ZIP</label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder=""
                          name="postcodezip"
                          value={postcode}
                          onChange={(e) => setPostcode(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="w-100"></div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                          type="tel"
                          className="form-control"
                          placeholder=""
                          name="phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="emailaddress">Email Address</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder=""
                          name="emailaddress"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="w-100"></div>
                    <div className="col-md-12">
                      {/* <div className="stripe-input">
                        <label htmlFor="card-element">
                          Credit or Debit Card
                        </label>
                        <p className="stripe-info">
                          Test using using card :{" "}
                          <span>4242 4242 4242 4242</span>
                          <br />
                          enter the zip code
                          <br />
                          enter cvc
                        </p>
                      </div> */}
                      {/* <div class="form-group mt-4">
                        <div class="radio">
                          <label class="mr-3">
                            <input type="radio" name="optradio" /> Create an
                            Account?{" "}
                          </label>
                          <label>
                            <input type="radio" name="optradio" /> Ship to
                            different address
                          </label>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-xl-5">
                <div className="row mt-5 pt-3">
                  <div className="col-md-12 d-flex mb-5">
                    <div className="cart-detail cart-total p-3 p-md-4">
                      <h3 className="billing-heading mb-4">Cart Total</h3>
                      <p className="d-flex">
                        <span>Subtotal</span>
                        <span>${total}</span>
                      </p>
                      <p className="d-flex">
                        <span>Delivery</span>
                        <span>$0.00</span>
                      </p>
                      {/* <p class="d-flex">
                        <span>Discount</span>
                        <span>$3.00</span>
                      </p> */}
                      <hr />
                      <p className="d-flex total-price">
                        <span>Total</span>
                        <span>${total}</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="cart-detail p-3 p-md-4">
                      <h3 className="billing-heading mb-4">Payment Method</h3>
                      {/* <div class="form-group">
                        <div class="col-md-12">
                          <div class="radio">
                            <label>
                              <input
                                type="radio"
                                name="optradio"
                                class="mr-2"
                              />{" "}
                              Direct Bank Tranfer
                            </label>
                          </div>
                        </div>
                      </div> */}
                      <div className="form-group">
                        <div className="col-md-12">
                          <div className="radio">
                            <label>
                              <input
                                type="radio"
                                name="optradio"
                                className="mr-2"
                                value="Cash On Delivery"
                                onChange={(e) => {
                                  setPaymentMethod(e.target.value);
                                }}
                              />{" "}
                              Cash on Delivery
                            </label>
                          </div>
                        </div>
                      </div>
                      {/* <div className="form-group">
                        <div className="col-md-12">
                          <div className="radio">
                            <label>
                              <input
                                type="radio"
                                name="optradio"
                                className="mr-2"
                                value="Bank"
                                onChange={(e) => {
                                  setPaymentMethod(e.target.value);
                                }}
                              />{" "}
                              Credit/ Debit Card
                            </label>
                          </div>
                        </div>
                      </div> */}
                      <hr />
                      {/* {payment === "Bank" && (
                        <div className="form-group">
                          <div className="col-md-12">
                            <div className="stripe-input">
                              <p className="stripe-info">
                                Test using card :{" "}
                                <span>4242 4242 4242 4242</span>
                                <br />
                                Enter the Zip Code
                                <br />
                                Enter CVC
                              </p>
                            </div>
                            <CardElement className="card-element"></CardElement>
                          </div>
                        </div>
                      )} */}

                      {error && (
                        <p className="text-danger container">{error}</p>
                      )}
                      <div className="form-group">
                        <div className="col-md-12">
                          <div className="checkbox">
                            <label>
                              <input
                                type="checkbox"
                                value={agree}
                                onChange={(e) => setAgree(!agree)}
                                className="mr-2"
                              />{" "}
                              I have read and accept the terms and conditions
                            </label>
                          </div>
                        </div>
                      </div>
                      <p>
                        {isEmpty ? (
                          <span className="container text-danger">
                            Please fill all form fields
                          </span>
                        ) : (
                          <span
                            className="btn btn-primary py-3 px-4"
                            onClick={(e) => handleSubmit(e)}
                          >
                            Place an order
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Newsletter />
      </>
    );
  }
};

// const CardForm = injectStripe(Checkout);

// const StripeWrapper = () => {
//   return (
//     <StripeProvider apiKey="pk_test_51HX96yJf0QVgN2Q138pJPzer8sh3jPx8pIOqUAhDwfxtvAhusB0SDEFxZknLT6H54P1USwVETPtYKMgsopDcFaWB00TPKNVO4Y">
//       <Elements>
//         <CardForm></CardForm>
//       </Elements>
//     </StripeProvider>
//   );
// };

// export default StripeWrapper;

export default Checkout;
