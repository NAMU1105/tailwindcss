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

// context
import { AuthContext } from "../src/context/auth-context";
import { LangContext } from "../src/context/lang-context";
// custom hooks
import { useAuth } from "../src/utils/hooks/auth-hooks";
import { useLang } from "../src/utils/hooks/lang-hooks";

// components
import ConfirmEmail from "./pages/confirmEmail";
import Dashboard from "./pages/dashboard";
import EditUser from "./pages/editUser";
import Orders from "./pages/orders";
import AddPost from "./pages/addPost";
import AddProduct from "./pages/addProduct";

// import { Main } from "./assets/styles/pages";

const App = () => {
  const { strUserID, strToken, login, logout } = useAuth();
  const { strCurrentLang, changeLangHandler } = useLang();

  // TODO: 로그인, 비로그인 유저 라우터 나누기
  // TODO: 라우터들 파일 빼서 따로 관리하기
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
                  {/* 제품 등록 */}
                  <Route path="/products/new" exact>
                    {/* <Route path={["/products/new", "editProduct"]} exact> */}
                    <AddProduct />
                  </Route>
                  {/* 제품 상세페이지 */}
                  {/* <Route path="/:products/:productId" exact>
                    <UdatePlaces />
                  </Route> */}
                  {/* 글 작성 */}
                  <Route path="/posts/new" exact>
                    <AddPost />
                  </Route>
                  {/* 주문관리 */}
                  <Route path="/orders" exact>
                    <Orders />
                  </Route>
                  {/* 유저리스트 */}
                  <Route path="/users" exact>
                    <Users />
                  </Route>
                  {/* <Route path="/editUser" exact>
                    <EditUser />
                  </Route> */}
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
