import React, { useState, useContext } from "react";
// import { NavLink } from "react-router-dom";

import { strAuth } from "../utils/strings/base";
import { LangContext } from "../context/lang-context";

import KoreaFlag from "../assets/images/flags/korea.svg";
import USFlag from "../assets/images/flags/us.jpg";

import HeaderMobile from "./headerMobile";
import NavLinks from "../components/navigation/navLinks";
import Logo from "../components/UI/logo";
import Button from "../components/form/button";

const Header = (props) => {
  const [isOpenHeaderMobile, setToggleHeaderMobile] = useState("hidden");

  const objLangContext = useContext(LangContext);
  const strCurrentLang = objLangContext.strCurrentLang;
  console.log(objLangContext);

  const toggleHeaderMobile = () => {
    if (isOpenHeaderMobile === "hidden") {
      setToggleHeaderMobile("");
    } else {
      setToggleHeaderMobile("hidden");
    }
  };

  const changeLang = (lang) => {
    console.log(lang);
    objLangContext.changeLang(lang);
  };

  return (
    <header className="sticky top-0 bg-header h-header z-10	">
      <div className="px-4 sm:px-20">
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6"> */}
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <Logo
            withLink
            type={{ type: "LogoHorizontalLight" }}
            classStyle="h-8 w-auto sm:h-10"
          />

          {/* 반응형 햄버거 메뉴 */}
          <div className="-mr-2 -my-2 md:hidden">
            <Button planeText hamburger onClick={toggleHeaderMobile}>
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
          {/* TODO: 메뉴 종류도 하드코딩이 아니라 백엔드에서 넘어오는 정보로 만들 수 있도록 고려해보기 */}
          <nav className="hidden md:flex md:items-center space-x-10">
            <NavLinks linkType="button" withMenu>
              4DREPLAY
            </NavLinks>
            <NavLinks linkType="a">USERS</NavLinks>
            <NavLinks linkType="a">DOCS</NavLinks>
            <NavLinks linkType="button" withMenu>
              MORE
            </NavLinks>
            {/* 알림 메뉴 */}
            <NavLinks linkType="button" withMenu noArrow>
              <svg
                className="animate-wiggle text-gray-500 h-5 w-5 mt-2 group-hover:text-gray-900 "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>

              <span className="flex h-3 relative">
                {/* <span className="animate-ping absolute inline-flex h-full w-10/12 rounded-full bg-purple-400 opacity-75"></span> */}
                <span className="absolute -top-2.5 -left-1.5 inline-flex rounded-full h-4 w-4 bg-purple-500 text-black">
                  {/* 3 */}
                </span>
              </span>
            </NavLinks>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            {/* <NavLink
              to="/auth"
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Sign in
            </NavLink> */}

            {/* <a
              href="/auth"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-layout hover:bg-layout-dark"
            >
              Sign in
            </a> */}
            {/* 언어 변경 메뉴 */}
            {/* <NavLinks linkType="a"> */}
            <img
              className="w-14 mr-2 cursor-pointer"
              src={KoreaFlag}
              alt="flag"
              onClick={() => {
                changeLang("ko");
              }}
            />
            {/* </NavLinks> */}
            {/* <NavLinks linkType="a"> */}
            <img
              className="w-14 mr-2 cursor-pointer"
              src={USFlag}
              alt="flag"
              onClick={() => {
                changeLang("en");
              }}
            />
            {/* </NavLinks> */}
            <Button href="/auth" notFullWidth>
              {strAuth.signIn}
            </Button>
          </div>
        </div>
      </div>
      <HeaderMobile show={isOpenHeaderMobile} onToggle={toggleHeaderMobile} />
    </header>
  );
};

export default Header;
