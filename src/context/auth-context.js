import { createContext } from "react";

export const AuthContext = createContext({
  userID: null,
  token: null,
  login: () => {
    console.log("login");
  },
  logout: () => {},
});
