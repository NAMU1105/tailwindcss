import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Header from "./container/header";
import Footer from "./container/footer";
import Auth from "./pages/auth";
import Users from "./pages/users";
import NewPassword from "./pages/newPassword";

import { AuthContext } from "../src/context/auth-context";
import { LangContext } from "../src/context/lang-context";
import { useAuth } from "../src/utils/hooks/auth-hooks";
import { useLang } from "../src/utils/hooks/lang-hooks";
import ConfirmEmail from "./pages/confirmEmail";
import Dashboard from "./pages/dashboard";

// import { Main } from "./assets/styles/pages";

const App = () => {
  const { strUserID, strToken, login, logout } = useAuth();
  const { strCurrentLang, changeLangHandler } = useLang();

  return (
    <>
      <LangContext.Provider
        value={{
          strCurrentLang,
          changeLang: changeLangHandler,
        }}
      >
        <AuthContext.Provider
          value={{
            userID: strUserID,
            token: strToken,
            login: login,
            logout: logout,
          }}
        >
          <div className="App font-inter">
            <Router>
              <Header />
              <main className="min-h-content">
                <Switch>
                  <Route path="/" exact>
                    <Dashboard />
                  </Route>
                  <Route path="/users" exact>
                    <Users />
                  </Route>
                  <Route path="/auth" exact>
                    <Auth />
                  </Route>
                  <Route path="/password" exact>
                    <NewPassword />
                  </Route>
                  <Route path="/confirmemail" exact>
                    <ConfirmEmail />
                  </Route>
                  <Redirect to="/" />
                </Switch>
              </main>
              <Footer />
            </Router>
          </div>
        </AuthContext.Provider>
      </LangContext.Provider>
    </>
  );
};

export default App;
