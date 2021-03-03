import React from "react";
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

// context
import { AuthContext } from "../src/context/auth-context";
import { LangContext } from "../src/context/lang-context";
// custom hooks
import { useAuth } from "../src/utils/hooks/auth-hooks";
import { useLang } from "../src/utils/hooks/lang-hooks";

// routes
import { userRoutes, authRoutes } from "./routes/allRoutes";

// components
import ConfirmEmail from "./pages/confirmEmail";
import Dashboard from "./pages/dashboard";
import Orders from "./pages/orders";
import AddPost from "./pages/addPost";
import AddProduct from "./pages/addProduct";

// router component
import Authmiddleware from "./routes/middleware/authMiddleware";

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
              <main className="min-h-content px-4 sm:px-20">
                <Switch>
                  {authRoutes.map((route, idx) => (
                    <Authmiddleware
                      path={route.path}
                      // layout={NonAuthLayout}
                      component={route.component}
                      key={idx}
                      isAuthProtected={false}
                    />
                  ))}

                  {userRoutes.map((route, idx) => (
                    <Authmiddleware
                      path={route.path}
                      // layout={Layout}
                      component={route.component}
                      key={idx}
                      isAuthProtected={true}
                      exact
                    />
                  ))}
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
