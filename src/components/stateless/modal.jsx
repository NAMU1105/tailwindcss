import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import tw from "twin.macro";

const ModalWrapper = styled.div.attrs({
  className:
    "fixed z-50 top-1/2 left-1/2 w-3/12 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-md rounded-md overflow-hidden	",
})`
  & {
    > header {
      ${tw`w-full py-4 px-2 bg-gray-500 text-white`}
      >h2 {
        ${tw`m-2`}
      }
    }

    > .content {
      ${tw`py-4 px-2`}
    }
    > footer {
      ${tw`py-4 px-2 text-right`}
    }
  }
`;

const Modal = (props) => {
  return ReactDOM.createPortal(
    <ModalWrapper>
      <header className={props.header}>
        <h2>{props.header}</h2>
      </header>
      <div className="content">{props.children}</div>
      <footer>{props.footer}</footer>
    </ModalWrapper>,
    document.getElementById("modal-hook")
  );
};

export default Modal;
