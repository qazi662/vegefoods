import axios from "axios";
import url from "../utils/url";

async function submitOrder({
  firstname,
  lastname,
  totalprice,
  items,
  userToken,
  state,
  address,
  city,
  postalcode,
  email,
  phone,
  payment,
}) {
  const response = await axios
    .post(
      `${url}/orders`,
      {
        firstname,
        lastname,
        totalprice,
        items,
        state,
        address,
        city,
        postalcode,
        email,
        phone,
        payment,
      },
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    )
    .catch((error) => console.log(error));
  return response;
}
export default submitOrder;
