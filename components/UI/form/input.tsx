import React from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import styled from "styled-components";

const COLOR_VARIANT_MAPS = {
  white: "text-white",
  black: "text-black",
  primary: "",
  secondary: "",
  danger: "",
};
const BGCOLOR_VARIANT_MAPS = {
  white: "",
  black: "",
  primary: "",
  secondary: "",
  danger: "",
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
};

export const Input: React.FC<InputProps> = (props: InputProps) => {
  return (
    <div className={``}>
      <label
        htmlFor={props.name}
        className="block font-medium text-gray-700 capitalize"
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
