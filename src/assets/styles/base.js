import styled, { css } from "styled-components";
import tw from "twin.macro";

/*
typography
*/
export const HeadingFirst = styled.h1.attrs({
  className: "mt-6 text-center text-3xl font-extrabold text-gray-900",
})`
  ${(props) =>
    props.align &&
    css`
      text-align: ${props.align};
    `};
`;
