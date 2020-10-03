import React from "react";
import { useParams } from "react-router-dom";
import ProductsContext from "../context/products";
import Loading from "../components/Loading";
import Hero from "../components/Hero";
import bg from "../assets/image_3.jpg";
import ProductDetails from "..//components/Product/ProductDetails";
import Newsletter from "../components/Newsletter";
import RelatedProducts from "../components/Product/RelatedProducts";
import { ToastContainer } from "react-toastify";

const SingleProduct = () => {
  const { id } = useParams();
  const { products } = React.useContext(ProductsContext);
  const product = products.find((item) => item.id === parseInt(id));
  if (products.length === 0) {
    return <Loading />;
  } else {
    const { title } = product;
    return (
      <>
        <ToastContainer />
        <Hero image={bg} title="shop" breadName={title} singleProduct={true} />
        <ProductDetails product={product} />
        <RelatedProducts />
        <Newsletter />
      </>
    );
  }
};
export default SingleProduct;
