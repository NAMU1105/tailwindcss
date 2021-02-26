import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

import HeaderMenu from "./headerMenu";

export const Button = styled.button.attrs({
  className:
    "text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-layout-light",
})``;

const NavLinks = (props) => {
  const { linkType, noArrow, to = "/", withMenu, children } = props;
  const [isHidden, setisHidden] = useState(true);

  const toggleMenu = () => {
    setisHidden((prev) => !prev);
  };

  let elem;

  if (linkType === "a") {
    elem = (
      <NavLink
        to={to}
        className="uppercase text-base font-medium text-gray-500 hover:text-gray-900"
      >
        {children}
      </NavLink>
    );
  } else if (linkType === "button" && noArrow) {
    elem = (
      <div className="relative">
        <Button type="button" aria-expanded="false" onClick={toggleMenu}>
          {children}
        </Button>

        {withMenu && <HeaderMenu show={isHidden} />}
      </div>
    );
  } else {
    elem = (
      <div className="relative">
        <Button type="button" aria-expanded="false" onClick={toggleMenu}>
          {children}
          {isHidden ? (
            <svg
              className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </Button>

        {withMenu && <HeaderMenu show={isHidden} />}
      </div>
    );
  }
  return <>{elem}</>;
};

export default NavLinks;
