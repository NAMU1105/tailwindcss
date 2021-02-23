import React from "react";

import styled, { css } from "styled-components";
import tw from "twin.macro";

import Button from "../form/button";
import HeaderMenuItem from "./headerMenuItem";

const HeaderMenu = styled.div`
  margin-top: 0.75rem;
  left: -100%;
  transform: scaleY(1);
  transition: transform 0.2s ease-out;
  transform-origin: 0px 0px;

  position: absolute;
  z-index: 10;

  ${(props) =>
    props.show &&
    css`
      transform: scaleY(0);
    `};
  & {
    > div {
      ${tw`rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden`}

      > div:first-child {
        ${tw`relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8`}
      }
      // footer
      // > div:nth-child(2) {
      > .headerMenuFooter {
        ${tw`px-5 py-5 bg-gray-50 sm:px-8 sm:py-8`}
      }
    }
  }
`;

const MainHeaderMenu = (props) => {
  const { show } = props;
  return (
    <HeaderMenu id="mainHeaderMenu" show={show}>
      <div>
        <div>
          <HeaderMenuItem
            title="Help Center"
            subTitle="  Get all of your questions answered in our forums or contact support."
          >
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
          </HeaderMenuItem>
          <HeaderMenuItem
            title="Help Center"
            subTitle="  Get all of your questions answered in our forums or contact support."
          >
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
          </HeaderMenuItem>
          <HeaderMenuItem
            title="Help Center"
            subTitle="  Get all of your questions answered in our forums or contact support."
          >
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
          </HeaderMenuItem>
          <HeaderMenuItem
            title="Help Center"
            subTitle="  Get all of your questions answered in our forums or contact support."
          >
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
          </HeaderMenuItem>
        </div>

        {/* footer */}
        <div className="headerMenuFooter" id="headerMenuFooter">
          <div>
            <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">
              Recent Posts
            </h3>
            <ul className="mt-4 space-y-4">
              <HeaderMenuItem footer title="Boost your conversion rate" />
              <HeaderMenuItem
                footer
                title="How to use search engine optimization to drive traffic to your site"
              />
              <HeaderMenuItem footer title="Improve your customer experience" />
            </ul>
          </div>
          <div className="mt-5 text-sm">
            <Button planeText alignLeft href="/">
              View all posts <span aria-hidden="true">&rarr;</span>
            </Button>
          </div>
        </div>
      </div>
    </HeaderMenu>
  );
};

export default MainHeaderMenu;
