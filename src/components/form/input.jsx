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

  // 이메일 인증 시 하나의 인풋에 하나의 값만 입력 가능하게
  const handleChange = () => {
    if (!props.type || !props.checkonchange) return;
    console.log(field.value);
    // console.log(label);
    if (label === "confirm code") {
      field.value = "wpow";
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
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <ErrorMessage className="error">{strAuth[meta.error]}</ErrorMessage>
      ) : null}
    </>
  );
};

// export default Input;
