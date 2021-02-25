import React from "react";

import Sprite from "../assets/images/sprite.svg";

const Footer = (props) => {
  const strCurrentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 h-footer grid  place-items-center	text-base font-medium text-gray-700">
      <ul className="flex self-end justify-evenly w-1/5">
        <li>
          <a
            href="https://www.linkedin.com/company/4dreplay/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700"
          >
            <svg className="w-6 h-5">
              <use
                xlinkHref={`${Sprite}#icon-linkedin2`}
                className="fill-current"
              ></use>
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UClDdv8u-xhIQREDIFmFNnpQ"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700"
          >
            <svg className="w-6 h-5 mt-0.5">
              <use
                xlinkHref={`${Sprite}#icon-youtube`}
                className="fill-current"
              ></use>
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/4dreplay"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700"
          >
            <svg className="w-6 h-5">
              <use
                xlinkHref={`${Sprite}#icon-twitter`}
                className="fill-current"
              ></use>
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/4dreplay/?hl=ko"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700"
          >
            <svg className="w-6 h-5">
              <use
                xlinkHref={`${Sprite}#icon-instagram`}
                className="fill-current"
              ></use>
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/4DReplay/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700"
          >
            <svg className="w-6 h-5">
              <use
                xlinkHref={`${Sprite}#icon-facebook`}
                className="fill-current"
              ></use>
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://vimeo.com/4dreplay"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700"
          >
            <svg className="w-6 h-5 ">
              <use
                xlinkHref={`${Sprite}#icon-vimeo`}
                className="fill-current"
              ></use>
            </svg>
          </a>
        </li>
      </ul>
      <span>© {strCurrentYear} 4DREPLAY All rights reserved</span>
    </footer>
  );
};

export default Footer;
