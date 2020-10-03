import React from "react";
import { IoIosClose } from "react-icons/io";
import CartContext from "../../context/cart";
import { IoIosAdd, IoIosRemove } from "react-icons/io";

const CartItem = ({ id, title, price, amount, image }) => {
  const { removeItem, decreaseAmount, increaseAmount } = React.useContext(
    CartContext
  );

  // const [stateAmount, setStateAmount] = React.useState(amount);

  // const handleChange = (e) => {
  //   let value = e.target.value;
  //   if (value > 20) {
  //     value = 20;
  //   } else if (value < 1) {
  //     value = 1;
  //   }
  //   setStateAmount(value);
  // };

  // if (stateAmount !== amount) {
  //   changeAmount(id, stateAmount);
  // }

  return (
    <tr className="text-center">
      <td className="product-remove">
        <span
          className="cursor-pointer"
          onClick={() => {
            removeItem(id);
          }}
        >
          <span className="ion-ios-close">
            <IoIosClose />
          </span>
        </span>
      </td>

      <td className="image-prod">
        <div
          className="img"
          style={{ backgroundImage: `url("${image}")` }}
        ></div>
      </td>

      <td className="product-name">
        <h3>{title}</h3>
        {/* <p>Far far away, behind the word mountains, far from the countries</p> */}
      </td>

      <td className="price">${price}</td>

      <td className="quantity">
        <div className="input-group mb-3 row ">
          <button
            className="col-2 d-flex justify-content-center align-items-center"
            onClick={() => decreaseAmount(id, amount)}
          >
            <i className="ion-ios-remove cursor-pointer">
              <IoIosRemove />
            </i>
          </button>
          <input
            type="number"
            name="quantity"
            className="quantity form-control input-number col-8"
            value={amount}
            readOnly
            min="1"
            max="20"
          />
          <button
            className="col-2 d-flex align-items-center justify-content-center"
            onClick={() => increaseAmount(id, amount)}
          >
            <i className="ion-ios-remove cursor-pointer">
              <IoIosAdd />
            </i>
          </button>
        </div>
      </td>

      <td className="total">${amount * price}</td>
    </tr>
  );
};

export default CartItem;
