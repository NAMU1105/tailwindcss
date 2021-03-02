import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import tw from "twin.macro";

// import { Button } from "../../assets/styles/button";

// TODO: 자물쇠 버튼을 하나의 템플릿으로 만들어도 괜찮을 것 같다.

const ButtonWapper = styled.button.attrs({
  className:
    "uppercase group relative w-full flex justify-center items-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-layout hover:bg-layout-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-layout",
})`
  // 사이즈 커스텀 가능(다만 pure css방식으로 프롭전달해야함)
  ${(props) =>
    props.size &&
    css`
      font-size: ${props.size};
    `};

  // 색상 커스텀
  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `};

  // 삭제, 탈퇴 등 주의 요하는 처리 버튼
  ${(props) =>
    props.danger &&
    css`
      ${tw`bg-red-500`}
    `};

  // 버튼모양이 아닌 글자 형태
  ${(props) =>
    props.planeText &&
    css`
      ${tw`bg-transparent shadow-none  mx-auto h-auto w-full text-layout  focus:outline-none focus:border-transparent focus:ring-transparent hover:text-layout-dark hover:bg-transparent`}
    `};

  // 모바일 화면 등에서 나오는 햄버거 버튼
  ${(props) =>
    props.hamburger &&
    css`
      ${tw`text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none`}
    `};
  // 100프로 크기의 버튼을 만들고 싶지 않을 때
  ${(props) =>
    props.notFullWidth &&
    css`
      ${tw`w-auto  whitespace-nowrap`}
    `};

  // 왼쪽 정렬된 버튼을 원할 때
  ${(props) =>
    props.alignLeft &&
    css`
      ${tw`justify-start pl-0 mx-0`}
    `};

  // disbled된 버튼을 원할 때
  ${(props) =>
    props.disabled &&
    css`
      ${tw`bg-disabled cursor-default hover:bg-disabled`}
    `};
`;

// focus:outline-none
const Button = (props) => {
  const {
    href,
    to,
    onClick,
    children,
    type,
    disabled,
    size,
    exact,
    danger,
    inverse,
    planeText,
    hamburger,
    notFullWidth,
    alignLeft,
    color,
    style,
  } = props;

  //   앵커 태그로 만든 버튼일 때
  if (href) {
    return (
      <ButtonWapper
        as="a"
        href={href}
        size={size}
        inverse={inverse}
        danger={danger}
        planeText={planeText}
        hamburger={hamburger}
        notFullWidth={notFullWidth}
        alignLeft={alignLeft}
        color={color}
        style={style}
      >
        {children}
      </ButtonWapper>
    );
  }

  //   링크 태그로 만든 버튼일 때
  if (to) {
    return (
      <ButtonWapper
        as={Link}
        to={to}
        href={href}
        exact={exact}
        size={size}
        inverse={inverse}
        danger={danger}
        planeText={planeText}
        hamburger={hamburger}
        notFullWidth={notFullWidth}
        alignLeft={alignLeft}
        color={color}
        style={style}
      >
        {children}
      </ButtonWapper>
    );
  }
  return (
    <ButtonWapper
      disabled={disabled}
      onClick={onClick}
      type={type}
      // href={href}
      size={size}
      inverse={inverse}
      danger={danger}
      planeText={planeText}
      hamburger={hamburger}
      notFullWidth={notFullWidth}
      alignLeft={alignLeft}
      color={color}
      style={style}
    >
      {children}
    </ButtonWapper>
  );
};

export default Button;
