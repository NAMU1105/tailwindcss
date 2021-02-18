import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.section.attrs({
  className:
    'min-h-body uppercase flex flex-col justify-center items-center font-libre',
})``;

export const BackDrop = styled.div.attrs({
  className: 'absolute top-0 bg-black opacity-25 min-h-screen w-screen',
})``;
export const TestResponsiveStyled = styled.div.attrs({
  className: 'text-white md:text-pink-500',
})``;

export const TestStyled = styled.div.attrs({
  className: 'text-white',
})`
  & {
    :hover + .hamburgerList {
      ${tw`block`}
    }
  }
`;
