import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const MenuItem = styled.a.attrs({
  className: "-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50",
})`
    & {
      > svg {
        ${tw`flex-shrink-0 h-6 w-6 text-indigo-600`}
      }


    & {
      > div {
        ${tw`ml-4`}
        & {
            > p:first-child {
              ${tw`text-base font-medium text-gray-900`}
            }
            > p:last-child {
              ${tw`mt-1 text-sm text-gray-500`}
            }

      }
    }
  `;

const HeaderMenuItem = (props) => {
  const { href = "/", mobile, footer, title, subTitle, children } = props;

  if (mobile) {
    return (
      <MenuItem href={href}>
        {children}
        <span className="ml-3 text-base font-medium text-gray-900">
          {title}
        </span>
      </MenuItem>
    );
  } else if (footer) {
    return (
      <MenuItem href={href} className="text-base truncate">
        {title}
      </MenuItem>
    );
  } else {
    return (
      <MenuItem href={href}>
        {children}
        <div>
          <p>{title}</p>
          <p>{subTitle}</p>
        </div>
      </MenuItem>
    );
  }
};
export default HeaderMenuItem;
