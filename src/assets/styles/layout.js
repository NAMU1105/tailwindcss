import styled, { css } from "styled-components";
import tw from "twin.macro";

export const ContainerLayout = styled.section.attrs({
  className:
    "min-h-content flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-20",
})``;
// "min-h-content flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8",

export const ChartContainer = styled.div`
  position: relative;
  margin: auto;

  ${(props) =>
    props.responsiveWidth &&
    css`
      width: ${props.responsiveWidth}vw;
    `}
  ${(props) =>
    props.responsiveHight &&
    css`
      height: ${props.responsiveHight}vh;
    `}
`;

export const DropdownMenuWrapper = styled.div.attrs({
  className:
    "absolute overflow-hidden flex flex-col -left-full mt-2 bg-white rounded-md shadow-md transform transition-transform ease-in-out duration-200 scale-y-100 origin-top-left ",
})`
  & {
    > ul > li {
      ${tw`px-5 py-2 min-w-10 cursor-pointer hover:bg-gray-50`}
    }
  }
`;
// ${(props) =>
//   props.show &&
//   css`
//     transform: scaleY(1);
//   `};
// `;
