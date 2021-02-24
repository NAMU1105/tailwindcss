import { useState, useCallback, useEffect } from "react";
import { strAuth } from "../strings/base";

export const useLang = () => {
  const [strCurrentLang, setCurrentLang] = useState("ko");

  const changeLangHandler = () => {
    if (strCurrentLang === "ko") {
      strAuth.setLanguage("en");
      setCurrentLang("en");
    } else {
      strAuth.setLanguage("ko");
      setCurrentLang("ko");
    }
  };

  return { strCurrentLang, changeLangHandler };
};
