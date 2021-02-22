import React, { useState } from "react";
import Logo from "../components/UI/logo";

import Sprite from "../assets/images/sprite.svg";

const Auth = (props) => {
  const [isLoginMode, setLoginMode] = useState(true);

  const changeModeHandler = () => {
    setLoginMode((prevState) => !prevState);
  };

  return (
    <div className="min-h-content flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <Logo classStyle="mx-auto h-12 w-auto" />

          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {isLoginMode ? "Welcome Back!" : "Create a new account"}
          </h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            {/* 회원가입 */}
            {!isLoginMode && (
              <div className="flex">
                <label htmlFor="first-name" className="sr-only">
                  First name
                </label>
                <input
                  id="first-name"
                  name="firstName"
                  type="text"
                  autoComplete="on"
                  required
                  className="w-6/12	 appearance-none rounded-none relative block  px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-tl-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="First name"
                />
                <label htmlFor="last-name" className="sr-only">
                  Last name
                </label>
                <input
                  id="last-name"
                  name="lastName"
                  type="text"
                  autoComplete="on"
                  required
                  className="w-6/12	 appearance-none rounded-none relative block  px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-tr-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Last name"
                />
              </div>
            )}
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className={
                  isLoginMode
                    ? `  rounded-t-md appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`
                    : `appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`
                }
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            {isLoginMode ? (
              <>
                <div className="flex items-center">
                  <input
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember_me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a
                    href="/password"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </>
            ) : (
              <div className="flex items-center">
                <input
                  id="agree_term"
                  name="agree_term"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="agree_term"
                  className="ml-2 block text-sm text-gray-900"
                >
                  I have read and agree to the{" "}
                  <a href="/" className="text-indigo-600">
                    Terms of Use
                  </a>{" "}
                  and
                  <a href="/" className="text-indigo-600">
                    {" "}
                    Customer Privacy Policy.
                  </a>
                </label>
              </div>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                {/* <!-- Heroicon name: solid/lock-closed --> */}
                <svg
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              {isLoginMode ? "Sign in" : "Sign up"}
            </button>
          </div>
        </form>

        {/* sns login/signup */}
        <div>
          <h3 className="text-center">
            or {isLoginMode ? "sign in" : "sign up"} with
          </h3>
          <ul className="flex justify-center mt-5">
            <li>
              <svg className="w-12 h-8 hover:fill-current text-indigo-600 cursor-pointer">
                <use xlinkHref={`${Sprite}#icon-google2`}></use>
              </svg>
            </li>
            <li>
              <svg className="w-12 h-8 hover:fill-current text-indigo-600 cursor-pointer">
                <use xlinkHref={`${Sprite}#icon-facebook2`}></use>
              </svg>
            </li>
            <li>
              <svg className="w-12 h-8 hover:fill-current text-indigo-600 cursor-pointer">
                <use xlinkHref={`${Sprite}#icon-linkedin`}></use>
              </svg>
            </li>
          </ul>
        </div>

        {/* change login mode */}
        <button
          onClick={changeModeHandler}
          className="mx-auto h-12 w-full text-indigo-600 hover:text-indigo-800"
        >
          {isLoginMode ? `Create a new account` : `I already have an account!`}
        </button>
      </div>
    </div>
  );
};

export default Auth;
