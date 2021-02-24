import React from "react";
import { useField } from "formik";
import styled from "styled-components";

const ErrorMessage = styled.span.attrs({
  className: "text-right	text-red-500 text-xxs font-bold mb-2 px-1.2 block",
})``;

// input
export const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name} className="sr-only">
        {label}
      </label>
      <input className={props.customstyle} {...field} {...props} />
      {meta.touched && meta.error ? (
        <ErrorMessage className="error">{meta.error}</ErrorMessage>
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
        <ErrorMessage className="error">{meta.error}</ErrorMessage>
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
        <ErrorMessage className="error">{meta.error}</ErrorMessage>
      ) : null}
    </>
  );
};

// export default Input;
