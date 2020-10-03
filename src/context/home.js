import React from "react";
import axios from "axios";
import url from "../utils/url";
import { toast } from "react-toastify";

const HomeContext = React.createContext();

export const HomeProvider = ({ children }) => {
  const [loading, setLoading] = React.useState(false);
  const [carousels, setCarousels] = React.useState([]);
  const [deal, setDeal] = React.useState();
  const [dealLoading, setDealLoading] = React.useState(false);

  const notify = (message) =>
    toast.dark(message, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: 0,
    });

  React.useEffect(() => {
    setLoading(true);
    axios.get(`${url}/heroes`).then((response) => {
      setCarousels(response.data);
      setLoading(false);
    });
    setDealLoading(true);
    axios.get(`${url}/deal-of-the-day`).then((response) => {
      setDeal(response.data);
      setDealLoading(false);
    });
    return () => {};
  }, []);

  return (
    <HomeContext.Provider
      value={{ loading, carousels, deal, dealLoading, notify, setLoading }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export default HomeContext;
