import { useState } from "react";
import { strAuth } from "../strings/base";

export const useLang = () => {
  const [strCurrentLang, setCurrentLang] = useState("ko");

  const changeLangHandler = () => {
    // console.log(strAuth.getString("tooLong", "en"));

    if (strCurrentLang === "ko") {
      strAuth.setLanguage("en");
      setCurrentLang("en");
      document.documentElement.setAttribute("lang", "en");
      // console.log(document.documentElement.getAttribute("lang"));
    } else {
      strAuth.setLanguage("ko");
      setCurrentLang("ko");
      document.documentElement.setAttribute("lang", "ko");
      // console.log(document.documentElement.getAttribute("lang"));
    }
  };

  return { strCurrentLang, changeLangHandler };
};
