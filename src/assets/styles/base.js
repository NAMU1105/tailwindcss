import styled, { css } from "styled-components";
// import tw from "twin.macro";

/*
typography
*/
export const HeadingFirst = styled.h1.attrs({
  className: "my-5 text-center text-3xl font-extrabold text-gray-900",
})`
  ${(props) =>
    props.align &&
    css`
      text-align: ${props.align};
    `};
`;
