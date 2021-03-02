import { createContext } from "react";

export const CheckboxContext = createContext({
  isAllChecked: false,
  changeAllChecked: () => {},
});
