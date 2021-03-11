import React from "react";
import { useField } from "formik";
// import styled from "styled-components";
import { classNames } from "../../util/utils";

// TODO: 반복되는 코드 줄이기
// 1. maps 통일
// 2. ringwidth같은 공통 적인 속성 따로 만든 다음에 상속하기

// //////////////////////////////////////////////////////////////

const FIELD_SIZE_VARIANT_MAPS = {
  md: "w-1/3",
  lg: "w-1/2",
  full: "w-full font-lg",
  auto: "w-auto",
};

const FONT_SIZE_VARIANT_MAPS = {
  sm: "text-sm",
  base: "text-b ase",
  lg: "text-lg",
  xl: "text-xl",
};

const TEXT_TRANSFORM_VARIANT_MAPS = {
  uppercase: "uppercase",
  capitalize: "capitalize",
};
const ROUND_VARIANT_MAPS = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

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

const RING_WIDTH_VARIANT_MAPS = {
  sm: "ring-2",
  md: "ring-4",
  lg: "ring-8",
};

const DISABLED_VARIANT_MAPS = {
  text: "!bg-gray-600 cursor-default text-gray-800",
  checkbox: "cursor-default text-gray-500 border-gray-500",
  radio: "cursor-default text-gray-500 border-gray-500",
  select: "!bg-gray-500 cursor-default text-gray-800",
};

const BOX_SIZE_VARIANT_MAPS = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
  xl: "w-8 h-8",
};

interface InputProps {
  name: string;
  id?: string;
  label: string;
  noLabel?: boolean;
  align?: "inline-flex" | "";
  design?: "filled" | "outlined"; //dashed, dotted..
  disabled?: boolean;
  color?: "white" | "black" | "primary" | "secondary" | "danger";
  bgcolor?: "white" | "black" | "primary" | "secondary" | "danger";
  ringcolor?: "white" | "black" | "primary" | "secondary" | "danger";
  ringwidth?: "sm" | "md" | "lg";
  texttransform?: "uppercase" | "capitalize" | "lowercase";
  fieldsize?: "md" | "lg" | "full" | "auto";
  customstyle?: string;
  rounded?: "sm" | "md" | "lg" | "full";
  textsize?: "sm" | "base" | "lg" | "xl";
  // borderStyle?:"rectangle"|"round-all"|"round-"
}

interface InputTextProps extends InputProps {
  type: "email" | "text" | "password";
  multiLine?: boolean; //multiline일 경우 textarea
  placeholder: string;
}

////****************************** */
// inputText
////****************************** */
export const InputField: React.FC<InputTextProps> = (props) => {
  const [field, { error, touched }] = useField({
    name: props.name,
  });
  return (
    <div className={``}>
      {props.multiLine ? (
        <textarea
          className={classNames`form-input border border-transparent focus:border-transparent	 rounded-md 
        ${COLOR_VARIANT_MAPS[props.color]}
        ${TEXT_TRANSFORM_VARIANT_MAPS[props.texttransform]}
        ${RING_COLOR_VARIANT_MAPS[props.ringcolor]}
        ${RING_WIDTH_VARIANT_MAPS[props.ringwidth]}
        ${FIELD_SIZE_VARIANT_MAPS[props.fieldsize]}
        ${BGCOLOR_VARIANT_MAPS[props.bgcolor]}
        ${FONT_SIZE_VARIANT_MAPS[props.textsize]}
        ${props.customstyle && props.customstyle}
        ${props.disabled && DISABLED_VARIANT_MAPS["text"]}

        `}
          {...field}
          {...props}
        ></textarea>
      ) : (
        <input
          className={
            // props.disabled              ? `${DISALBED_INPUT}`              :
            classNames`form-input border border-transparent focus:border-transparent rounded-md
        ${COLOR_VARIANT_MAPS[props.color]}
        ${TEXT_TRANSFORM_VARIANT_MAPS[props.texttransform]}
        ${RING_COLOR_VARIANT_MAPS[props.ringcolor]}
        ${RING_WIDTH_VARIANT_MAPS[props.ringwidth]}
        ${FIELD_SIZE_VARIANT_MAPS[props.fieldsize]}
        ${BGCOLOR_VARIANT_MAPS[props.bgcolor]}
        ${FONT_SIZE_VARIANT_MAPS[props.textsize]}
        ${props.customstyle && props.customstyle}
        ${props.disabled && DISABLED_VARIANT_MAPS["text"]}
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

interface CheckboxProps extends InputProps {
  boxSize?: "sm" | "md" | "lg" | "xl";
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
            // props.disabled              ? `${DISABLED_CHECKBOX}` :
            classNames`form-checkbox mr-2 border border-gray-700 ring-current focus:border-current	
          ${ROUND_VARIANT_MAPS[props.rounded]}
          ${RING_COLOR_VARIANT_MAPS[props.ringcolor]}
          ${COLOR_VARIANT_MAPS[props.color]}
          ${FIELD_SIZE_VARIANT_MAPS[props.fieldsize]}
          ${BGCOLOR_VARIANT_MAPS[props.bgcolor]}
          ${BOX_SIZE_VARIANT_MAPS[props.boxSize]}
          ${props.customstyle && props.customstyle}
          ${props.disabled && DISABLED_VARIANT_MAPS["checkbox"]}
          `
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

interface RadioProps extends InputProps {
  radiosize?: "sm" | "md" | "lg" | "xl";
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
          className={classNames`form-radio mr-2 border border-gray-700 ring-current focus:border-current	
          ${ROUND_VARIANT_MAPS[props.rounded]}
          ${COLOR_VARIANT_MAPS[props.color]}
          ${FIELD_SIZE_VARIANT_MAPS[props.fieldsize]}
          ${BGCOLOR_VARIANT_MAPS[props.bgcolor]}
          ${BOX_SIZE_VARIANT_MAPS[props.radiosize]}
          ${props.customstyle && props.customstyle}
          ${props.disabled && DISABLED_VARIANT_MAPS["radio"]}
          `}
          // {...props.disabled&&disabled={true}}
          {...field}
          {...props}
        />
        <span className={classNames`${FONT_SIZE_VARIANT_MAPS[props.textsize]}`}>
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
interface SelectProps extends InputProps {
  multiSelect?: boolean;
}

export const Select: React.FC<SelectProps> = ({ children, ...props }) => {
  const [field, meta] = useField({
    name: props.name,
  });

  return (
    <>
      <label className={`sr-only`} htmlFor={props.name}></label>
      <span>{props.label}</span>
      <select
        disabled={props.disabled}
        className={classNames`form-select mt-1 block rounded-md
        ${COLOR_VARIANT_MAPS[props.color]}
        ${TEXT_TRANSFORM_VARIANT_MAPS[props.texttransform]}
        ${RING_WIDTH_VARIANT_MAPS[props.ringwidth]}
        ${FIELD_SIZE_VARIANT_MAPS[props.fieldsize]}
        ${BGCOLOR_VARIANT_MAPS[props.bgcolor]}
        ${props.customstyle && props.customstyle}
        ${props.disabled && DISABLED_VARIANT_MAPS["select"]}
        `}
        {...field}
        {...props}
      >
        {children}
      </select>
      {/* {meta.touched && meta.error ? <div className="error"></div> : null} */}
    </>
  );
};
