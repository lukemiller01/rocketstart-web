import React from "react";
import "./loading.css";

const Loading = () => {
  return (
    <div className="ring">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
