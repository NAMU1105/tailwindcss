import React from "react";
import { useField } from "formik";
import styled from "styled-components";

import { strAuth } from "../../utils/strings/base";

const ErrorMessage = styled.span.attrs({
  className: "text-right	text-red-500 text-xxs font-bold mb-2 px-1.2 block",
})``;

const ErrorInput = "border-b-2 border-red-500";
// const ErrorInput = styled.input.attrs({
//   className: "border-red-500 border-solid	border-b-2	",
// })``;

// input
export const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  // TODO: 이메일 인증 시 하나의 인풋에 하나의 값만 입력 가능하게
  const handleChange = () => {
    if (!props.type || !props.checkonchange) return;
    // console.log(field.value);
    // console.log(label);
    if (label === "confirm code") {
      // field.value = "wpow";
    }
  };

  return (
    <>
      <label htmlFor={props.id || props.name} className="sr-only">
        {label}
      </label>
      <input
        className={
          meta.touched && meta.error
            ? props.customstyle + ErrorInput
            : props.customstyle
        }
        {...field}
        {...props}
        onKeyUp={handleChange}
      />
      {/* <input className={props.customstyle} {...field} {...props} /> */}
      {meta.touched && meta.error ? (
        // TODO: 여기 부분을 enum값으로...
        // meta.erro가 이제 strAuth의 키값이 되어준다.
        // <ErrorMessage className="error">{meta.error}</ErrorMessage>
        <ErrorMessage className="error">{strAuth[meta.error]}</ErrorMessage>
      ) : null}
    </>
  );
};

export const SearchBarInput = (props) => {
  return (
    <div
      className={`hidden lg:flex justify-between items-center bg-background-gray p-2 rounded-3xl ${props.classStyle}`}
    >
      {/* 검색 아이콘 */}
      <a href="/" className="">
        <svg
          className="animate-wiggle text-gray-500 h-5 w-5 group-hover:text-gray-900 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </a>
      {/* 검색 인풋창 */}
      <input
        type="text"
        name="input_text"
        className="bg-background-gray w-full outline-none"
        placeholder="Search..."
        autoComplete="off"
      />
    </div>
  );
};

// checkbox
export const Checkbox = ({ children, ...props }) => {
  const [field, meta] = useField(props, "checkbox");

  return (
    <>
      <input
        className={props.customstyle}
        type="checkbox"
        {...field}
        {...props}
      />
      {children}
      {meta.touched && meta.error ? (
        <ErrorMessage className="error">{strAuth[meta.error]}</ErrorMessage>
      ) : null}
    </>
  );
};

// select
export const Select = ({ label, ...props }) => {
  const [field, meta] = useField(props, "checkbox");

  return (
    <>
      <label className="sr-only" htmlFor={props.id || props.name}>
        {label}
      </label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <ErrorMessage className="error">{strAuth[meta.error]}</ErrorMessage>
      ) : null}
    </>
  );
};

// export default Input;
