import { createContext } from "react";

export const LangContext = createContext({
  currentLang: "ko",
  changeLang: () => {},
});
