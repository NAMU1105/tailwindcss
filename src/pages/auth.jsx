import React, { useState, useContext } from "react";
import { useHistory } from "react-router";
import { Formik, Form, ErrorMessage } from "formik";

// strings
import { strAuth } from "../utils/strings/base";
// utils
import { SignupSchema, LoginSchema } from "../utils/validator";
import { LangContext } from "../context/lang-context";
import { AuthContext } from "../context/auth-context";
// css
import { ContainerLayout } from "../assets/styles/layout";
import { HeadingFirst } from "../assets/styles/base";
// component
import Logo from "../components/UI/logo";
import Button from "../components/form/button";
import { Input, Checkbox } from "../components/form/input";

import Sprite from "../assets/images/sprite.svg";

const enumInputStyles = {
  loginEmail:
    "sm:text-sm rounded-t-md appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-layout focus:border-layout focus:z-10 ",
  signupEmail:
    "sm:text-sm appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-layout focus:border-layout focus:z-10 ",
  password:
    "sm:text-sm appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-layout focus:border-layout focus:z-10 ",
  firstName:
    "sm:text-sm w-full	 appearance-none rounded-none relative block  px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-tl-md focus:outline-none focus:ring-layout focus:border-layout focus:z-10 ",
  lastName:
    "sm:text-sm w-full	 appearance-none rounded-none relative block  px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-tr-md focus:outline-none focus:ring-layout focus:border-layout focus:z-10 ",
  checkbox:
    "h-4 w-4 text-layout-dark focus:ring-layout border-gray-300 rounded",
};

const Auth = (props) => {
  const [isLoginMode, setLoginMode] = useState(true);
  const history = useHistory();
  const objLangContext = useContext(LangContext);
  const objAuthContext = useContext(AuthContext);
  const strCurrentLang = objLangContext.strCurrentLang;

  const changeModeHandler = () => {
    setLoginMode((prevState) => !prevState);
  };

  // const submitAuth = () => {
  //   const strDirection = isLoginMode ? "/" : "confirmemail";
  //   history.push(strDirection);
  // };

  return (
    <ContainerLayout>
      <div className="max-w-md w-full space-y-8">
        <div>
          <Logo classStyle="mx-auto h-12 w-auto" />

          <HeadingFirst>
            {isLoginMode ? "Welcome Back!" : "Create a new account"}
          </HeadingFirst>
        </div>

        <Formik
          initialValues={{
            strEmail: "",
            strPassword: "",
            strFirstName: "",
            strLastName: "",
            isAgreed: false,
            isAutoLoginChecked: false,
          }}
          validationSchema={isLoginMode ? LoginSchema : SignupSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);

              const tokenExpirationDate = new Date(
                new Date().getTime() + 1000 * 60 * 60
              );

              // TODO:  조건에 모두 부합하면 페이지 이동
              // 테스트용 더미 데이터 넣어둠
              objAuthContext.login({
                strUserID: values.strEmail,
                strToken: "fakeToken",
                expirationDate: tokenExpirationDate,
              });

              if (isLoginMode) {
                history.push("/");
              } else {
                history.push({
                  pathname: "/confirmemail",
                  state: { email: values.strEmail },
                });
              }
              // const strDirection = isLoginMode ? "/" : "confirmemail";
              // history.push(strDirection);
            }, 400);
          }}
        >
          {({ errors, touched, handleSubmit, isSubmitting }) => (
            <Form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <input type="hidden" name="remember" value="true" />
              <div className="rounded-md -space-y-px">
                {/* 회원가입 */}
                {!isLoginMode && (
                  <div className="flex w-full">
                    <div className="flex flex-col w-full">
                      {/* 이름 */}
                      <Input
                        label="firstName"
                        name="strFirstName"
                        type="text"
                        placeholder={strAuth.firstName}
                        customstyle={enumInputStyles["firstName"]}
                      />
                    </div>

                    {/* 성 */}
                    <div className="flex flex-col w-full">
                      <Input
                        label="lastName"
                        name="strLastName"
                        type="text"
                        placeholder={strAuth.lastName}
                        customstyle={enumInputStyles["lastName"]}
                      />
                    </div>
                  </div>
                )}
                {/* 이메일 */}
                <div>
                  <Input
                    label="Email"
                    name="strEmail"
                    type="email"
                    placeholder={strAuth.email}
                    customstyle={
                      isLoginMode
                        ? enumInputStyles["loginEmail"]
                        : enumInputStyles["signupEmail"]
                    }
                  />
                  {/* <ErrorMessage name="strEmail" /> */}
                  {/* {errors.strEmail && touched.strEmail && errors.strEmail} */}
                </div>

                {/* 비밀번호 */}
                {/* <div> */}
                <Input
                  label="Password"
                  name="strPassword"
                  type="password"
                  placeholder={strAuth.password}
                  customstyle={enumInputStyles["password"]}
                />
                {/* </div> */}
              </div>

              {/* 자동로그인 체크박스, 비밀번호 재발급 link */}
              <div className="flex items-center justify-between">
                {isLoginMode ? (
                  <>
                    <div className="flex items-center">
                      <Checkbox name="isAutoLoginChecked">
                        <label
                          htmlFor="remember_me"
                          className="ml-2 block text-sm text-gray-900"
                        >
                          {strAuth.autoLogin}
                        </label>
                      </Checkbox>
                    </div>
                    <div className="text-sm">
                      <Button href="/password" planeText>
                        {strAuth.forgotPassword}
                      </Button>
                    </div>
                  </>
                ) : (
                  // 약관 동의
                  <div className="flex items-center">
                    <Checkbox
                      id="agreeTerm"
                      name="isAgreed"
                      customstyle={enumInputStyles["checkbox"]}
                    >
                      <label
                        htmlFor="agreeTerm"
                        className="ml-2 block text-sm text-gray-900"
                      >
                        {strAuth.agreeFirst}{" "}
                        <a href="/" className="text-layout-dark">
                          {strAuth.termsOfUse}
                        </a>{" "}
                        {strAuth.agreeSecond}
                        <a href="/" className="text-layout-dark">
                          {" "}
                          {strAuth.customerPolicy}
                        </a>
                        {strCurrentLang === "ko" && strAuth.agreeThird}
                      </label>
                    </Checkbox>
                  </div>
                )}
                <ErrorMessage name="agreeTerm" />
              </div>

              <div>
                {/* 제출 버튼 */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  // onClick={submitAuth}
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <svg
                      className="h-5 w-5 text-layout group-hover:text-layout-light"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  {isSubmitting
                    ? "Submitting..."
                    : isLoginMode
                    ? strAuth.signIn
                    : strAuth.signUp}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
        {/* SNS 로그인/회원가입 */}
        <div>
          <h3 className="text-center">
            {isLoginMode ? strAuth.snsLogin : strAuth.snsSignUp}
          </h3>
          <ul className="flex justify-center mt-5">
            <li>
              <svg className="w-12 h-8 hover:fill-current text-layout cursor-pointer">
                <use xlinkHref={`${Sprite}#icon-google2`}></use>
              </svg>
            </li>
            <li>
              <svg className="w-12 h-8 hover:fill-current text-layout cursor-pointer">
                <use xlinkHref={`${Sprite}#icon-facebook2`}></use>
              </svg>
            </li>
            <li>
              <svg className="w-12 h-8 hover:fill-current text-layout cursor-pointer">
                <use xlinkHref={`${Sprite}#icon-linkedin`}></use>
              </svg>
            </li>
          </ul>
        </div>

        {/* 로그인/회원가입 상태 변경 */}
        <Button onClick={changeModeHandler} planeText>
          {isLoginMode ? strAuth.changeToSignUp : strAuth.changeToSignIn}
        </Button>

        {/* <Button onClick={objLangContext.changeLang}>
          change Lang(for test)
        </Button> */}
      </div>
    </ContainerLayout>
  );
};

export default Auth;
