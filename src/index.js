import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { HomeProvider } from "./context/home";
import { ProductsProvider } from "./context/products";
import { CartProvider } from "./context/cart";
import { UserProvider } from "./context/user";

ReactDOM.render(
  <UserProvider>
    <ProductsProvider>
      <HomeProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </HomeProvider>
    </ProductsProvider>
  </UserProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
