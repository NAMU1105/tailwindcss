// import React, { useReducer, useEffect } from "react";

// import { validate } from "../../util/validators";

// import styles from "./input.module.css";

// const inputReducer = (state, action) => {
//   switch (action.type) {
//     case "CHANGE":
//       return {
//         ...state,
//         value: action.val,
//         isValid: validate(action.val, action.validators),
//       };

//     //   처음 페이지가 로드 됐을 때부터 에러 메시지가 뜨는 것이 아니라,
//     //   한 번 터치 된 후에 발리데이션을 진행하기 위해 touch 액션을 추가함
//     case "TOUCH":
//       return {
//         ...state,
//         isTouched: true,
//       };
//     default:
//       return state;
//   }
// };

// const Input = (props) => {
//   const [inputState, dispatch] = useReducer(inputReducer, {
//     value: props.initialValue || "",
//     isTouched: false,
//     isValid: props.initialValid || false,
//   });

//   const changeHandler = (event) => {
//     dispatch({
//       type: "CHANGE",
//       val: event.target.value,
//       validators: props.validators,
//     });
//   };

//   const touchHandler = () => {
//     dispatch({
//       type: "TOUCH",
//     });
//   };

//   // id, value, isValid값을 newPlace에 전달
//   useEffect(() => {
//     props.onInput(props.id, inputState.value, inputState.isValid);
//   }, [props.onInput, inputState.value, inputState.isValid]);

//   const element =
//     props.element === "input" ? (
//       <input
//         id={props.id}
//         type={props.type}
//         placeholder={props.placeholder}
//         onChange={changeHandler}
//         onBlur={touchHandler}
//         value={inputState.value}
//         autoComplete={props.offAutoComplete || "on"}
//       />
//     ) : (
//       <textarea
//         id={props.id}
//         rows={props.rows || 3}
//         onChange={changeHandler}
//         onBlur={touchHandler}
//         value={inputState.value}
//       />
//     );

//   return (
//     <div
//       className={`${styles.form} ${
//         !inputState.isValid && inputState.isTouched && styles.formInvalid
//       }`}
//     >
//       <label htmlFor={props.id}>{props.label}</label>
//       {element}
//       {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
//     </div>
//   );
// };
// export default Input;
