import styled, { css } from "styled-components";
import tw from "twin.macro";

export const ContainerLayout = styled.section.attrs({
  className:
    "min-h-content flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8",
})``;

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
