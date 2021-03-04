import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const LoadingWrapper = styled.div.attrs({
  className: "w-10 h-10 relative",
})`
  & > {
    span {
      ${tw`absolute w-4 h-4 bg-indigo-500 rounded-sm animate-chase`}
    }

    span:nth-child(2) {
      ${tw`delay-75`}
    }
    span:nth-child(3) {
      ${tw`delay-150`}
    }
  }
`;

const Loading = (props) => {
  return (
    <LoadingWrapper>
      <span></span>
      <span></span>
      <span></span>
    </LoadingWrapper>
  );
};
export default Loading;
