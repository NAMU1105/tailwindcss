import React from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import styled from "styled-components";

const COLOR_VARIANT_MAPS = {
  white: "text-white",
  black: "text-black",
  primary: "text-primary",
  secondary: "text-secondary-navy",
  danger: "text-danger",
};
const BGCOLOR_VARIANT_MAPS = {
  white: "",
  black: "",
  primary: "",
  secondary: "",
  danger: "",
};
const SIZE_VARIANT_MAPS = {
  sm: "w-auto",
  md: "w-1/3",
  lg: "w-1/2",
  full: "w-full font-lg",
};
const DISALBED_VARIANT_MAPS = {
  true: "bg-gray-600 cursor-default text-gray-800",
};

const TEXT_TRANSFORM_VARIANT_MAPS = {
  uppercase: "uppercase",
  capitalize: "capitalize",
  lowercase: "lowercase",
};
// const COLOR_VARIANT_MAPS = {
//   white: "",
//   black: "",
//   primary: "",
//   secondary: "",
//   danger: "",
// };

type InputProps = {
  name: string;
  label: string;
  placeholder?: string;
  //   no Label이면 클래스 이름을 sr-only로 한다.
  noLabel?: boolean;
  type: "email" | "text" | "password";
  multiLine?: boolean;
  required?: boolean;
  design?: "default" | "filled" | "outlined";
  size?: "sm" | "md" | "lg" | "full";
  diabled?: boolean;
  color?: "default" | "white" | "black" | "primary" | "secondary" | "danger";
  bgColor?: "default" | "white" | "black" | "primary" | "secondary" | "danger";
  textTransform?: "uppercase" | "capitalize" | "lowercase";
};

export const Input: React.FC<InputProps> = (props: InputProps) => {
  return (
    <div className={`${SIZE_VARIANT_MAPS[props.size]}`}>
      <label
        htmlFor={props.name}
        className={
          props.noLabel
            ? `sr-only`
            : `block ${TEXT_TRANSFORM_VARIANT_MAPS[props.textTransform]}
        `
        }
      >
        {props.label}
      </label>
      <Field
        name={props.name}
        placeholder={props.placeholder}
        className="w-full mt-1 rounded-md pl-3 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
      />
    </div>
  );
};
Input.defaultProps = {
  color: "white",
  size: "full",
  textTransform: "capitalize",
};
