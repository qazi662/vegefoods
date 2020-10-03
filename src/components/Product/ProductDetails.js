import React from "react";
import { IoIosAdd, IoIosRemove, IoIosStarOutline } from "react-icons/io";
import ModalImage from "react-modal-image";
import CartContext from "../../context/cart";
import HomeContext from "../../context/home";

const ProductDetails = ({ product }) => {
  const { notify } = React.useContext(HomeContext);

  const [quantity, setQuantity] = React.useState(1);

  const { addToCart } = React.useContext(CartContext);

  const {
    title,
    description,
    image: { url },
    price,
  } = product;

  const decreaseAmount = () => {
    if (quantity === 1) {
      setQuantity(1);
    } else {
      setQuantity(quantity - 1);
    }
  };
  const increaseAmount = () => {
    if (quantity === 20) {
      setQuantity(20);
    } else {
      setQuantity(quantity + 1);
    }
  };

  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-5">
            <div>
              <ModalImage
                small={url}
                large={url}
                alt={title}
                hideDownload={true}
                hideZoom={true}
                showRotate={false}
                className="img-fluid search-pointer"
              />
            </div>
          </div>
          <div className="col-lg-6 product-details pl-md-5">
            <h3>{title}</h3>
            <div className="rating d-flex">
              <p className="text-left mr-4">
                <span className="mr-2 d-inline text-primary">5.0</span>
                <span className="d-inline text-primary">
                  <IoIosStarOutline className="ion-ios-star-outline" />
                </span>
                <span className="d-inline text-primary">
                  <IoIosStarOutline className="ion-ios-star-outline" />
                </span>
                <span className="d-inline text-primary">
                  <IoIosStarOutline className="ion-ios-star-outline" />
                </span>
                <span className="d-inline text-primary">
                  <IoIosStarOutline className="ion-ios-star-outline" />
                </span>
                <span className="d-inline text-primary">
                  <IoIosStarOutline className="ion-ios-star-outline" />
                </span>
              </p>
              <p className="text-left mr-4">
                <span className="mr-2" style={{ color: "#000" }}>
                  100 <span style={{ color: "#bbb" }}>Rating</span>
                </span>
              </p>
              <p className="text-left">
                <span className="mr-2" style={{ color: "#000" }}>
                  500 <span style={{ color: "#bbb" }}>Sold</span>
                </span>
              </p>
            </div>
            <p className="price">
              <span>${price}</span>
            </p>
            <p>{description}</p>
            <div className="row mt-4">
              <div className="col-md-6">
                <div className="form-group d-flex">
                  <div className="select-wrap">
                    <div className="icon">
                      <span className="ion-ios-arrow-down"></span>
                    </div>
                    <select name="" id="" className="form-control">
                      <option value="">Small</option>
                      <option value="">Medium</option>
                      <option value="">Large</option>
                      <option value="">Extra Large</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="w-100"></div>
              <div className="input-group col-md-6 d-flex mb-3">
                <span className="input-group-btn mr-2">
                  <button
                    type="button"
                    className="quantity-left-minus btn"
                    onClick={() => {
                      decreaseAmount();
                    }}
                  >
                    <i className="ion-ios-remove">
                      <IoIosRemove />
                    </i>
                  </button>
                </span>
                <input
                  type="text"
                  id="quantity"
                  name="quantity"
                  className="form-control input-number"
                  value={quantity}
                  readOnly
                  min="1"
                  max="100"
                />
                <span className="input-group-btn ml-2">
                  <button
                    type="button"
                    className="quantity-right-plus btn"
                    onClick={() => {
                      increaseAmount();
                    }}
                  >
                    <i className="ion-ios-add">
                      <IoIosAdd />
                    </i>
                  </button>
                </span>
              </div>
              <div className="w-100"></div>
              <div className="col-md-12">
                <p style={{ color: "#000" }}>600 kg available</p>
              </div>
            </div>
            <p>
              <span
                onClick={() => {
                  const newProduct = { ...product, amount: quantity };
                  addToCart(newProduct);
                  notify("✔️ Added to Your Shopping Cart");
                }}
                className="btn btn-black py-3 px-5"
              >
                Add to Cart
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
