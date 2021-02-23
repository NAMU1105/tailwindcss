import React from "react";

import styled, { css } from "styled-components";
import tw from "twin.macro";

import Button from "../components/form/button";
import HeaderMenuItem from "../components/navigation/headerMenuItem";
import Logo from "../components/UI/logo";

{
  /* <!--
        Mobile menu, show/hide based on mobile menu state.
    
        Entering: "duration-200 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95"
      --> */
}

const MainHeaderMobile = (props) => {
  const { show, onToggle } = props;

  return (
    <div
      className={`absolute top-0 inset-x-0 p-2 transition transform origin-top-right ${show}`}
      id="dropdown-mobile"
    >
      <div className="px-4 sm:px-20 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
        <div className="pt-5 pb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Logo classStyle="w-16" />
              {/* <span className="uppercase">4DREPLAY</span> */}
            </div>

            <div className="-mr-2">
              <Button onClick={onToggle} planeText hamburger type="button">
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </Button>
            </div>
          </div>

          <div className="mt-6">
            <nav className="grid gap-y-8">
              <HeaderMenuItem mobile title="Analytics">
                {
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                }
              </HeaderMenuItem>

              <HeaderMenuItem mobile title="Engagement">
                {
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                    />
                  </svg>
                }
              </HeaderMenuItem>
              <HeaderMenuItem mobile title="Security">
                {
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                }
              </HeaderMenuItem>
              <HeaderMenuItem mobile title="Integration">
                {
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                }
              </HeaderMenuItem>
              <HeaderMenuItem mobile title="Automation">
                {
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                }
              </HeaderMenuItem>
            </nav>
          </div>
        </div>

        {/* footer */}
        <div className="py-6 space-y-6">
          <div className="grid grid-cols-2 gap-y-4 gap-x-8">
            <a
              href="/"
              className="text-base font-medium text-gray-900 hover:text-gray-700"
            >
              Pricing
            </a>
            {/* <Button planeText href="/" alignLeft notFullWidth color="#18181b">
              Pricing
            </Button> */}

            <a
              href="/"
              className="text-base font-medium text-gray-900 hover:text-gray-700"
            >
              Docs
            </a>

            <a
              href="/"
              className="text-base font-medium text-gray-900 hover:text-gray-700"
            >
              Enterprise
            </a>

            <a
              href="/"
              className="text-base font-medium text-gray-900 hover:text-gray-700"
            >
              Blog
            </a>

            <a
              href="/"
              className="text-base font-medium text-gray-900 hover:text-gray-700"
            >
              Help Center
            </a>

            <a
              href="/"
              className="text-base font-medium text-gray-900 hover:text-gray-700"
            >
              Guides
            </a>

            <a
              href="/"
              className="text-base font-medium text-gray-900 hover:text-gray-700"
            >
              Security
            </a>

            <a
              href="/"
              className="text-base font-medium text-gray-900 hover:text-gray-700"
            >
              Events
            </a>
          </div>
          <div>
            <Button href="/auth">Sign up</Button>

            <p className="mt-6 text-center text-base font-medium text-gray-500">
              Existing customer?
              <a href="/" className="text-indigo-600 hover:text-indigo-500">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeaderMobile;
