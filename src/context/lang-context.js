import { createContext } from "react";

export const LangContext = createContext({
  strCurrentLang: "ko",
  changeLang: () => {},
});
