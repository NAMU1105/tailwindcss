import React from "react";
import { useField } from "formik";
import styled from "styled-components";

const InputWrapper = styled.div`
  position: relative;
  width: 50%;
  height: 50px;
  background-color: blue;
  overflow: hidden;

  & > input {
    width: 100%;
    height: 100%;
    color: #595f6e;
    padding-top: 20px;
    border: none;
    outline: none;
  }

  & > label {
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    border-bottom: 1px solid black;

    & > span {
      position: absolute;
      bottom: 5px;
      left: 0px;
      transition: all 0.3s ease;
    }
  }

  & > label::after {
    content: "";
    position: absolute;
    left: 0px;
    bottom: -1px;
    height: 100%;
    width: 100%;
    border-bottom: 3px solid #5fa8d3;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }

  //   & > input:focus + label span,
  //   input:valid + label span {
  //     transform: translateY(-150%);
  //     font-size: 14px;
  //     color: #5fa8d3;
  //   }
  //   & > input:focus + .label::after,
  //   input:valid + label::after {
  //     transform: translateX(0%);
  //   }

  & > input:focus + label span {
    transform: translateY(-150%);
    font-size: 14px;
    color: #5fa8d3;
  }

  & > input:focus + label::after {
    transform: translateX(0%);
  }
`;

const DESIGN_VARIANT_MAPS = {
  default: "!bg-transparent border-2",
  filled: "bg-opacity-100",
  outlined: "bg-opacity-100",
};

type InputProps = {
  label: string;
  type: "email" | "text" | "password";
  multiLine?: boolean;
  required?: boolean;
  placeholder?: string;
  design?: "default" | "filled" | "outlined";
  size?: "sm" | "md" | "lg";
  diabled?: boolean;
  color?: "default" | "white" | "black" | "primary" | "secondary" | "danger";
  bgColor?: "default" | "white" | "black" | "primary" | "secondary" | "danger";
};

export const Input: React.FC<InputProps> = (props: InputProps) => {
  return (
    <InputWrapper>
      <input type={props.type} placeholder={props.placeholder} />
      <label htmlFor="">
        <span>{props.label}</span>
      </label>
    </InputWrapper>
  );
};

export const PlaineInput: React.FC<InputProps> = (props: InputProps) => {
  return (
    <div className="w-1/2">
      <label htmlFor="price" className="block font-medium text-gray-700">
        Price
      </label>
      <input
        type="text"
        name="price"
        id="price"
        className="w-full mt-1 rounded-md pl-3 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        placeholder="0.00"
      />
    </div>
  );
};
