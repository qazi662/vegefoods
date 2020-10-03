import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const Error = () => {
  return (
    <div className="d-flex justify-content-center align-items-center my-5 flex-column">
      <FaExclamationTriangle className="error-icon my-5" />
      <h1 className="text-uppercase">Error 404</h1>
      <h4 className="text-capitalize">Page not found</h4>
      <Link className="py-2 px-3 my-3 mb-5 text-white error-link" to="/">
        Back To Home
      </Link>
    </div>
  );
};

export default Error;
