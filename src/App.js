import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Header from "./container/mainHeader";
import Footer from "./container/footer";
import Auth from "./pages/auth";
import Users from "./pages/users";
import NewPassword from "./pages/newPassword";

import { AuthContext } from "../src/context/auth-context";
import { useAuth } from "../src/utils/hooks/auth-hooks";

// import { Main } from "./assets/styles/pages";

const App = () => {
  const { userID, token, login, logout } = useAuth();

  return (
    <AuthContext.Provider
      value={{
        userID: userID,
        token: token,
        login: login,
        logout: logout,
      }}
    >
      <div className="App">
        <Router>
          <Header />
          <main className="min-h-content">
            <Switch>
              <Route path="/" exact>
                <Users />
              </Route>
              <Route path="/auth" exact>
                <Auth />
              </Route>
              <Route path="/password" exact>
                <NewPassword />
              </Route>
              <Redirect to="/" />
            </Switch>
          </main>
          <Footer />
        </Router>
      </div>
    </AuthContext.Provider>
  );
};

export default App;
