import React from "react";
import ReactDOM from "react-dom";

import styled from "styled-components";

const BackdropWrapper = styled.div.attrs({
  className: "fixed t-0 left-0 w-full h-screen bg-backdrop z-20",
})``;

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <BackdropWrapper onClick={props.onClick}></BackdropWrapper>,
    document.getElementById("backdrop-hook")
  );
};

export default Backdrop;
