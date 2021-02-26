import { useState, useCallback, useEffect } from "react";
let logoutTimer; // int

export const useAuth = () => {
  const [strUserID, setUserID] = useState();
  const [strToken, setToken] = useState(null);
  const [strTokenExpirationDate, setTokenExpirationDate] = useState();

  // 자동 로그인 여부 체크
  useEffect(() => {
    const storageToken = JSON.parse(localStorage.getItem("userData"));
    if (storageToken) {
      setUserID(storageToken.userId);
      setToken(storageToken.token);
      const expirationDate = new Date(storageToken.expiration);
      console.log(`expirationDate:`, expirationDate);
      setTokenExpirationDate(expirationDate);
    }
  }, []);

  const login = useCallback(({ strUserID, strToken, expirationDate }) => {
    console.log(strUserID);
    console.log(strToken);
    setUserID(strUserID);
    setToken(strToken);
    expirationDate = new Date(expirationDate);
    console.log(`expirationDate:`, expirationDate);
    setTokenExpirationDate(expirationDate);

    localStorage.setItem(
      "userData",
      JSON.stringify({
        userId: strUserID,
        token: strToken,
        expiration: expirationDate.toISOString(),
      })
    );
  }, []);

  const logout = useCallback(() => {
    setUserID(null);
    setToken(null);
    setTokenExpirationDate(null);
    localStorage.removeItem("userData");
  }, []);

  // Timer
  useEffect(() => {
    if (strToken && strTokenExpirationDate) {
      const strRemainingTime =
        strTokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, strRemainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  });

  return { strUserID, strToken, strTokenExpirationDate, login, logout };
};
