import react, { useState, useCallback } from "react";
import { strAuth } from "../strings/base";

export const useLang = () => {
  const [strCurrentLang, setCurrentLang] = useState("ko");

  const changeLangHandler = (lang) => {
    strAuth.setLanguage(lang);
    setCurrentLang(lang);
    document.documentElement.setAttribute("lang", lang);
  };

  // const changeLangHandler = useCallback((lang) => {
  //   strAuth.setCurrentLang("en");
  // }, []);

  return { strCurrentLang, changeLangHandler };
};
