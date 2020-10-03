import React from "react";

const UserLoading = () => {
  return (
    <div id="ftco-loader" className="show">
      <svg className="circular" width="48px" height="48px">
        <circle
          className="path-bg"
          cx="24"
          cy="24"
          r="22"
          fill="none"
          strokeWidth="4"
          stroke="#eeeeee"
        />
        <circle
          className="path"
          cx="24"
          cy="24"
          r="22"
          fill="none"
          strokeWidth="4"
          strokeMiterlimit="10"
          stroke="#82ae46"
        />
      </svg>
    </div>
  );
};

export default UserLoading;
