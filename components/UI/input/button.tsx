import React, { ReactNode } from "react";
// import styled, { css } from "styled-components";
// import tw from "twin.macro";

// TODO: outline 속성 추가

const COLOR_VARIANT_MAPS = {
  white: "text-white",
  black: "text-black",
  primary: "text-primary hover:text-primary-dark",
  secondary: "text-secondary-navy",
  danger: "text-danger hover:text-danger-dark",
};

const BGCOLOR_VARIANT_MAPS = {
  primary: "bg-primary hover:bg-primary-dark",
  secondary: "bg-text-secondary-navy",
  danger: "text-danger hover:text-danger-dark",
  transparent: "!bg-transparent",
};

const DESIGN_VARIANT_MAPS = {
  contained: "rounded-md",
  text: "bg-transparent",
  outlined: "!bg-transparent border-2 rounded-md",
  withIcon: "",
};

const SIZE_VARIANT_MAPS = {
  sm: "w-auto text-sm",
  md: "w-24 text-md",
  lg: "w-6/12 text-lg",
  full: "w-full text-lg",
};

const DISABLED_VARIANT_MAPS = {
  true: "cursor-default bg-disabled text-gray-800",
};

const TEXT_TRANSFORM_VARIANT_MAPS = {
  uppercase: "uppercase",
  capitalize: "capitalize",
  lowercase: "lowercase",
};

type ButtonProps = {
  type?: "button" | "link";
  color?: "white" | "black" | "primary" | "secondary" | "danger";
  bgColor?: "primary" | "secondary" | "danger" | "transparent";
  design?: "contained" | "text" | "outlined" | "withIcon";
  size?: "sm" | "md" | "lg" | "full";
  disabled?: "true" | "false";
  textTransform?: "uppercase" | "capitalize" | "lowercase";
  href?: string;
  children?: ReactNode;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  if (props.type === "button") {
    return (
      <a
        href={props.href}
        className={`cursor-pointer inline-flex items-center justify-center px-5 py-3 text-base font-medium rounded-md
          ${COLOR_VARIANT_MAPS[props.color]}
          ${BGCOLOR_VARIANT_MAPS[props.bgColor]}
          ${DESIGN_VARIANT_MAPS[props.design]}
          ${SIZE_VARIANT_MAPS[props.size]}
          ${DISABLED_VARIANT_MAPS[props.disabled]}
          ${TEXT_TRANSFORM_VARIANT_MAPS[props.textTransform]}  
          `}
      >
        {props.children}
      </a>
    );
  } else {
    return (
      <button
        onClick={props.onClick}
        className={`cursor-pointer inline-flex items-center justify-center px-5 py-3 text-base font-medium rounded-md
       ${COLOR_VARIANT_MAPS[props.color]}
       ${BGCOLOR_VARIANT_MAPS[props.bgColor]}
       ${DESIGN_VARIANT_MAPS[props.design]}
       ${SIZE_VARIANT_MAPS[props.size]}
       ${DISABLED_VARIANT_MAPS[props.disabled]}
       ${TEXT_TRANSFORM_VARIANT_MAPS[props.textTransform]}  
       `}
      >
        {props.children}
      </button>
    );
  }
};

Button.defaultProps = {
  type: "button",
  color: "white",
  bgColor: "transparent",
  design: "contained",
  size: "full",
  disabled: "false",
  textTransform: "uppercase",
};
// Button.defaultProps = defaultProps;

export default Button;
