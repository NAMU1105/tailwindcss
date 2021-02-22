import React from "react";

import Sprite from "../assets/images/sprite.svg";

const Footer = (props) => {
  const strCurrentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 h-footer grid  place-items-center	text-base font-medium text-gray-500">
      <ul className="flex self-end justify-evenly w-1/5">
        <li>
          <a href="https://www.linkedin.com/company/4dreplay/" target="_blank">
            <svg className="w-6 h-5">
              <use xlinkHref={`${Sprite}#icon-linkedin2`}></use>
            </svg>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UClDdv8u-xhIQREDIFmFNnpQ">
            <svg className="w-6 h-5 mt-0.5">
              <use xlinkHref={`${Sprite}#icon-youtube`}></use>
            </svg>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/4dreplay">
            <svg className="w-6 h-5">
              <use xlinkHref={`${Sprite}#icon-twitter`}></use>
            </svg>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/4dreplay/?hl=ko">
            <svg className="w-6 h-5">
              <use xlinkHref={`${Sprite}#icon-instagram`}></use>
            </svg>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/4DReplay/">
            <svg className="w-6 h-5">
              <use xlinkHref={`${Sprite}#icon-facebook`}></use>
            </svg>
          </a>
        </li>
        <li>
          <a href="https://vimeo.com/4dreplay">
            <svg className="w-6 h-5 ">
              <use xlinkHref={`${Sprite}#icon-vimeo`}></use>
            </svg>
          </a>
        </li>
      </ul>
      <span className="text-xl">
        © {strCurrentYear} 4DREPLAY All rights reserved
      </span>
    </footer>
  );
};

export default Footer;
