import React, { useState, useContext, useRef, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

//context
import { strAuth } from "../utils/strings/base";
import { LangContext } from "../context/lang-context";
import { AuthContext } from "../context/auth-context";

// css
import { DropdownMenuWrapper } from "../assets/styles/layout";

// image
import KoreaFlag from "../assets/images/flags/korea.svg";
import USFlag from "../assets/images/flags/us.jpg";

// components
import HeaderMobile from "./headerMobile";
import NavLinks from "../components/navigation/navLinks";
import Logo from "../components/stateless/logo";
import Button from "../components/form/button";
import { SearchBarInput } from "../components/form/input";

const Header = (props) => {
  const [isOpenHeaderMobile, setToggleHeaderMobile] = useState("hidden");
  const [isOpenSettingDropdown, setToggleSettingDropdown] = useState(false);
  const [isOpenProductDropdown, setToggleProductDropdown] = useState(false);

  const objLangContext = useContext(LangContext);
  const objAuthContext = useContext(AuthContext);

  const settingDropdownRef = useRef();
  const productDropdownRef = useRef();

  const history = useHistory();

  // 모바일 화면 시 나오는 메뉴 토글하는 함수
  const toggleHeaderMobile = () => {
    if (isOpenHeaderMobile === "hidden") {
      setToggleHeaderMobile("");
    } else {
      setToggleHeaderMobile("hidden");
    }
  };

  // 드롭다운 메뉴 토글 상태 바꿔주는 함수
  const toggleSettingDropdown = () => {
    setToggleSettingDropdown((prev) => !prev);
  };
  const toggleProductDropdown = () => {
    setToggleProductDropdown((prev) => !prev);
  };

  // 드롭다운 외부영역 클릭 시 드롭다운 닫히게 하는 함수
  const handleClickOutside = ({ target }) => {
    if (
      !settingDropdownRef.current ||
      !settingDropdownRef.current.contains(target)
    ) {
      setToggleSettingDropdown(false);
    }
    if (
      !productDropdownRef.current ||
      !productDropdownRef.current.contains(target)
    ) {
      setToggleProductDropdown(false);
    }
  };

  // 언어 설정 바꾸는 함수
  const changeLang = (lang) => {
    objLangContext.changeLang(lang);
  };

  // 전체 화면 띄우는 함수
  const popFullScreen = () => {
    /* Get the documentElement (<html>) to display the page in fullscreen */
    const elem = document.documentElement;

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE11 */
      elem.msRequestFullscreen();
    }
  };

  // 로그아웃
  const logout = () => {
    objAuthContext.logout();
  };
  // 드롭다운 외부영역의 클릭을 감지하여 드롭다운의 상태값을 바꾸기 위해 window객체에 이벤트리스너를 붙인다.
  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 bg-header h-header z-10	">
      <div className="px-4 sm:px-20">
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6"> */}
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 lg:justify-start lg:space-x-10">
          <div className="flex lg:flex-1 items-center">
            <Logo
              withLink
              type={{ type: "LogoHorizontalLight" }}
              classStyle="h-8 w-auto sm:h-10"
            />
            {/* 검색창 */}
            <SearchBarInput classStyle="ml-5" />
          </div>

          {/* 반응형 햄버거 메뉴 */}
          <div className="-mr-2 -my-2 lg:hidden">
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
          <nav className="hidden lg:flex lg:items-center space-x-10">
            <NavLinks linkType="button" withMenu>
              4DREPLAY
            </NavLinks>
            <NavLinks linkType="a" to="/users">
              USERS
            </NavLinks>
            <NavLinks linkType="a" to="/orders">
              ORDERS
            </NavLinks>

            <div
              className="relative"
              ref={productDropdownRef}
              onClick={toggleProductDropdown}
            >
              <NavLinks linkType="button">PRODUCTS</NavLinks>
              {isOpenProductDropdown && (
                <DropdownMenuWrapper left="-10">
                  <ul>
                    <li onClick={() => history.push("/products")}>
                      <Link to="/products">PRODUCTS</Link>
                    </li>
                    <li onClick={() => history.push("/products/new")}>
                      <Link to="/products/new">ADD PRODUCT</Link>
                    </li>
                  </ul>
                </DropdownMenuWrapper>
              )}
            </div>
            {/* 알림 메뉴 */}
            <NavLinks linkType="button" withMenu noArrow>
              <svg
                className="hidden lg:inline-block w-5 animate-wiggle text-gray-500 h-5 mt-2 group-hover:text-gray-900 "
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

              <span className="hidden lg:flex h-3 relative">
                <span className="hidden lg:absolute -top-2.5 -left-1.5 lg:inline-flex rounded-full h-4 w-4 bg-purple-500 text-black">
                  {/* 3 */}
                </span>
              </span>
            </NavLinks>
            {/* 전체화면 메뉴 */}
            <NavLinks linkType="button" noArrow>
              <svg
                onClick={popFullScreen}
                className="hidden text-gray-500 h-5 mt-2 group-hover:text-gray-900 lg:w-5 "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                />
              </svg>
            </NavLinks>
          </nav>
          <div className="hidden lg:flex items-center justify-end lg:flex-1 lg:w-0">
            {/* 언어 변경 메뉴 */}
            <img
              className="w-14 mr-2 cursor-pointer"
              src={KoreaFlag}
              alt="flag"
              onClick={() => {
                changeLang("ko");
              }}
            />

            <img
              className="w-14 mr-2 cursor-pointer"
              src={USFlag}
              alt="flag"
              onClick={() => {
                changeLang("en");
              }}
            />

            {/* 로그인한 유저 정보를 보여준다. */}
            {objAuthContext.token ? (
              // <span>{objAuthContext.userID}</span>
              // TODO: 프로필 사진을 사용하려면 추후 로그인 시 서버에서 받아서 컨텍스트에 넣어야 한다
              <div
                className="relative"
                onClick={toggleSettingDropdown}
                ref={settingDropdownRef}
              >
                <img
                  className="w-10 rounded-full cursor-pointer"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                  alt="photo"
                />
                {isOpenSettingDropdown && (
                  <DropdownMenuWrapper>
                    <ul>
                      <li>profile</li>
                      <li>
                        <Link to="/users">users</Link>
                      </li>
                      <li>
                        <Link to="/products">products</Link>
                      </li>
                      <li>
                        <Link to="/settings">settings</Link>
                      </li>
                      <li className="border-t-2" onClick={logout}>
                        log out
                      </li>
                    </ul>
                  </DropdownMenuWrapper>
                )}
              </div>
            ) : (
              <Button href="/auth" notFullWidth>
                {strAuth.signIn}
              </Button>
            )}
          </div>
        </div>
      </div>
      <HeaderMobile show={isOpenHeaderMobile} onToggle={toggleHeaderMobile} />
    </header>
  );
};

export default Header;
