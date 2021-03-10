import React from "react";
import { useField } from "formik";
// import styled from "styled-components";
import { classNames } from "../../util/utils";

// TODO: 반복되는 코드 줄이기
// 1. maps 통일
// 2. ringwidth같은 공통 적인 속성 따로 만든 다음에 상속하기

// //////////////////////////////////////////////////////////////

const COLOR_VARIANT_MAPS = {
  white: "text-white",
  black: "text-black",
  primary: "text-primary",
  secondary: "text-secondary-navy",
  danger: "text-danger",
};
const BGCOLOR_VARIANT_MAPS = {
  white: "bg-white",
  black: "bg-black",
  primary: "bg-primary",
  secondary: "bg-secondary-navy",
  danger: "bg-danger",
};
const RING_COLOR_VARIANT_MAPS = {
  black: "ring-black border-black focus:ring-black focus:border-black",
  primary:
    "ring-primary border-primary focus:ring-primary focus:border-primary",
  secondary:
    "ring-secondary-navy border-secondary-navy focus:ring-secondary-navy focus:border-secondary-navy",
  danger: "ring-danger border-danger focus:ring-danger focus:border-danger",
};
const SIZE_VARIANT_MAPS = {
  md: "w-1/3",
  lg: "w-1/2",
  full: "w-full font-lg",
  auto: "w-auto",
};
const DISALBED_INPUT = "bg-gray-600 cursor-default text-gray-800";

const TEXT_TRANSFORM_VARIANT_MAPS = {
  uppercase: "uppercase",
  capitalize: "capitalize",
  lowercase: "lowercase",
};

// --
const RING_WIDTH_VARIANT_MAPS = {
  sm: "ring-2 border-2",
  md: "ring-4 border-4",
  lg: "ring-8 border-8",
};

interface InputProps {
  name: string;
  id?: string;
  label: string;
  placeholder?: string;
  //   no Label이면 클래스 이름을 sr-only로 한다.
  noLabel?: boolean;
  type: "email" | "text" | "password";
  multiLine?: boolean; //multiline일 경우 textarea
  required?: boolean;
  design?: "filled" | "outlined";
  disabled?: boolean;
  color?: "white" | "black" | "primary" | "secondary" | "danger";
  bgColor?: "white" | "black" | "primary" | "secondary" | "danger";
  ringcolor?: "white" | "black" | "primary" | "secondary" | "danger";
  ringwidth?: "sm" | "md" | "lg";
  texttransform?: "uppercase" | "capitalize" | "lowercase";
  align?: "inline-flex" | "";
  filedsize?: "md" | "lg" | "full" | "auto";
}

////****************************** */
// inputText
////****************************** */
export const InputField: React.FC<InputProps> = (props) => {
  const [field, { error, touched }] = useField({
    name: props.name,
  });
  return (
    <div className={`flex flex-col`}>
      {props.multiLine ? (
        <textarea
          className={
            props.disabled
              ? `${DISALBED_INPUT}`
              : classNames`form-input border-gray-500 border rounded-md
        ${COLOR_VARIANT_MAPS[props.color]}
        ${BGCOLOR_VARIANT_MAPS[props.bgColor]}
        ${RING_COLOR_VARIANT_MAPS[props.ringcolor]}
        ${SIZE_VARIANT_MAPS[props.filedsize]}
        ${TEXT_TRANSFORM_VARIANT_MAPS[props.texttransform]}
        ${RING_WIDTH_VARIANT_MAPS[props.ringwidth]}
        `
          }
          {...field}
          {...props}
        ></textarea>
      ) : (
        <input
          className={
            props.disabled
              ? `${DISALBED_INPUT}`
              : classNames`form-input border-gray-500 border rounded-md
        ${COLOR_VARIANT_MAPS[props.color]}
        ${BGCOLOR_VARIANT_MAPS[props.bgColor]}
        ${RING_COLOR_VARIANT_MAPS[props.ringcolor]}
        ${SIZE_VARIANT_MAPS[props.filedsize]}
        ${TEXT_TRANSFORM_VARIANT_MAPS[props.texttransform]}
        ${RING_WIDTH_VARIANT_MAPS[props.ringwidth]}
        `
          }
          {...field}
          {...props}
        />
      )}
      {error && touched && <div className={``}>{error}</div>}
    </div>
  );
};

////****************************** */
// checkbox
////****************************** */
// TODO: checkbox icon 도 커스텀
const COLOR_VARIANT_MAPS_CHECKBOX = {
  primary: "text-primary",
  secondary: "text-secondary-navy",
  danger: "text-danger-dark",
};
const RING_COLOR_VARIANT_MAPS_CHECKBOX = {
  primary: "ring-primary",
  secondary: "ring-secondary-navy",
  danger: "ring-danger-dark",
};

const ROUND_VARIANT_MAPS_CHECKBOX = {
  sm: " rounded-sm",
  md: " rounded-md",
  lg: " rounded-lg",
  full: "rounded-full",
};

const FONT_SIZE_VARIANT_CHECKBOX = {
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

const BOX_SIZE_VARIANT_CHECKBOX = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
  xl: "w-8 h-8",
};

const DISABLED_CHECKBOX = `cursor-default text-gray-500 border-gray-500`;

interface CheckboxProps {
  label: string;
  name: string;
  color?: "primary" | "secondary" | "danger";
  ringColor?: "primary" | "secondary" | "danger";
  ringWidth?: "sm" | "md" | "lg";
  rounded?: "sm" | "md" | "lg" | "full";
  boxSize?: "sm" | "md" | "lg" | "xl";
  fontSize?: "sm" | "base" | "lg" | "xl";
  disabled?: boolean;
}
export const Checkbox: React.FC<CheckboxProps> = ({ children, ...props }) => {
  const [field, meta] = useField({
    name: props.name,
  });

  return (
    <div className={`inline-flex flex-col`}>
      <label htmlFor={props.name} className=" items-center">
        <input
          type="checkbox"
          disabled={props.disabled}
          className={
            props.disabled
              ? `${DISABLED_CHECKBOX}`
              : classNames`form-checkbox mr-2 border border-gray-700 ring-current focus:border-current	
          ${ROUND_VARIANT_MAPS_CHECKBOX[props.rounded]}
          ${RING_COLOR_VARIANT_MAPS_CHECKBOX[props.ringColor]}
          ${RING_WIDTH_VARIANT_MAPS[props.ringWidth]}
          ${FONT_SIZE_VARIANT_CHECKBOX[props.fontSize]}
          ${BOX_SIZE_VARIANT_CHECKBOX[props.boxSize]}
          ${COLOR_VARIANT_MAPS_CHECKBOX[props.color]}`
          }
          {...field}
          {...props}
        />
        <span>{props.label}</span>
        {children}
      </label>
      {meta.touched && meta.error ? <div className="error"></div> : null}
    </div>
  );
};

////****************************** */
// radio
////****************************** */
const COLOR_VARIANT_MAPS_RADIO = {
  primary: "text-primary",
  secondary: "text-secondary-navy",
  danger: "text-danger-dark",
};
const RING_COLOR_VARIANT_MAPS_RADIO = {
  primary: "ring-primary",
  secondary: "ring-secondary-navy",
  danger: "ring-danger-dark",
};

const ROUND_VARIANT_MAPS_RADIO = {
  sm: " rounded-sm",
  md: " rounded-md",
  lg: " rounded-lg",
  full: "rounded-full",
};
const RING_WIDTH_VARIANT_MAPS_RADIO = {
  sm: "ring-2",
  md: "ring-4",
  lg: "ring-7",
};

const FONT_SIZE_VARIANT_RADIO = {
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

const BOX_SIZE_VARIANT_RADIO = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
  xl: "w-8 h-8",
};

const DISABLED_RADIO = `cursor-default text-gray-500 border-gray-500`;

interface RadioProps {
  label: string;
  name: string;
  align?: "row" | "col";
  color?: "primary" | "secondary" | "danger";
  ringcolor?: "primary" | "secondary" | "danger";
  ringwidth?: "sm" | "md" | "lg";
  rounded?: "sm" | "md" | "lg" | "full";
  radiosize?: "sm" | "md" | "lg" | "xl";
  fontSize?: "sm" | "base" | "lg" | "xl";
  disabled?: boolean;
}
export const Radio: React.FC<RadioProps> = ({ children, ...props }) => {
  const [field, meta] = useField({
    name: props.name,
  });

  return (
    <div className={`inline-flex flex-col`}>
      <label htmlFor={props.name} className="items-center">
        <input
          type="radio"
          disabled={props.disabled}
          className={
            props.disabled
              ? `${DISABLED_RADIO}`
              : classNames`form-radio mr-2 border border-gray-700 ring-current focus:border-current	
          ${ROUND_VARIANT_MAPS_RADIO[props.rounded]}
          ${COLOR_VARIANT_MAPS_RADIO[props.color]}
          ${RING_COLOR_VARIANT_MAPS_RADIO[props.ringcolor]}
          ${RING_WIDTH_VARIANT_MAPS_RADIO[props.ringwidth]}
         
          ${BOX_SIZE_VARIANT_RADIO[props.radiosize]}
          ${COLOR_VARIANT_MAPS_RADIO[props.color]}`
          }
          // {...props.disabled&&disabled={true}}
          {...field}
          {...props}
        />
        <span
          className={classNames`${FONT_SIZE_VARIANT_RADIO[props.fontSize]}`}
        >
          {props.label}
        </span>
        {children}
      </label>
      {meta.touched && meta.error ? <div className="error"></div> : null}
    </div>
  );
};

////****************************** */
// select
////****************************** */
interface SelectProps {
  label: string;
  name: string;
  multiSelect?: boolean;
  color?: "primary" | "secondary" | "danger";
  bgColor?: "primary" | "secondary" | "danger";
  disabled?: boolean;
}

export const Select: React.FC<SelectProps> = ({ children, ...props }) => {
  const [field, meta] = useField({
    name: props.name,
  });

  return (
    <>
      <label className="sr-only" htmlFor={props.name}>
        <span>{props.label}</span>
        <select
          disabled={props.disabled}
          className="form-select"
          {...field}
          {...props}
        >
          {children}
        </select>
      </label>
      {/* {meta.touched && meta.error ? <div className="error"></div> : null} */}
    </>
  );
};
