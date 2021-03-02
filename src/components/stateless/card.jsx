import React from "react";

const Card = (props) => {
  return (
    <div
      className={`flex flex-col bg-gray-100 rounded-lg p-5 mb-5 ${props.style}`}
    >
      {props.children}
    </div>
  );
};

export default Card;
