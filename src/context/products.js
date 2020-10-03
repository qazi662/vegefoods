import React, { useState } from "react";
import url from "../utils/url";
import axios from "axios";
import { featuredProducts } from "../utils/helpers";

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [featured, setFeatured] = useState([]);

  React.useEffect(() => {
    setLoading(true);
    axios.get(`${url}/products`).then((response) => {
      const featured = featuredProducts(response.data);
      setProducts(response.data);
      setFeatured(featured);
      setLoading(false);
    });
    return () => {};
  }, []);

  return (
    <ProductsContext.Provider value={{ products, featured, loading }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
