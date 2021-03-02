import React, { useContext } from "react";
import { useLocation } from "react-router";
import { Formik, Form } from "formik";
import styled, { css } from "styled-components";
import tw from "twin.macro";

import { strAuth } from "../utils/strings/base";
import { ConfirmEmailSchema } from "../utils/validator";
import { LangContext } from "../context/lang-context";

import Logo from "../components/stateless/logo";
import Gmail from "../assets/images/gmail.png";
import Outlook from "../assets/images/outlook.png";

// css
import { ContainerLayout } from "../assets/styles/layout";
import { HeadingFirst } from "../assets/styles/base";
// component
import Button from "../components/form/button";
import { Input } from "../components/form/input";

const InputItem = styled.div`
  ${tw`border border-gray-300`}

  & {
    > input {
      ${tw`shadow-none text-gray-900 text-5xl w-full text-center leading-3 border-0 bg-transparent`}
    }
  }
`;

const OpenEmail = styled.a`
  ${tw`text-sm	leading-6 text-gray-600 m-1.5 flex items-center`}

  & {
    > img {
      ${tw`mr-2`}
    }
  }
`;

// TODO: 바로 url로 이 페이지 컴포넌트 접근하는 거 막기

const ConfirmEmail = (props) => {
  const strCurrentLang = useContext(LangContext).strCurrentLang;
  const location = useLocation();
  const strEmail = location.state.email;

  return (
    <ContainerLayout>
      <div className="max-w-md w-full space-y-8">
        <div>
          <Logo classStyle="mx-auto h-12 w-auto" />
          <HeadingFirst>Confirm your verify code</HeadingFirst>
          <p>
            {strCurrentLang === "en"
              ? `${strAuth.emailConfirmSub} ${strEmail} ${strAuth.emailConfirmSubSecond}`
              : `${strEmail} ${strAuth.emailConfirmSub}`}
          </p>
        </div>

        {/* inputs */}
        <Formik
          initialValues={{
            strConfirmEmailFirst: "",
            strConfirmEmailSecond: "",
            strConfirmEmailThird: "",
            strConfirmEmailFourth: "",
            strConfirmEmailFifth: "",
            strConfirmEmailSixth: "",
          }}
          validationSchema={ConfirmEmailSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ errors, touched, handleSubmit, isSubmitting }) => (
            <Form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="flex items-center">
                <div className="flex">
                  <InputItem>
                    <Input
                      label="confirm code"
                      name="strConfirmEmailFirst"
                      type="text"
                      checkonchange="true"
                    />
                  </InputItem>
                  <InputItem>
                    <Input
                      label="confirm code"
                      name="strConfirmEmailSecond"
                      type="text"
                      checkonchange="true"
                    />
                  </InputItem>
                  <InputItem>
                    <Input
                      label="confirm code"
                      name="strConfirmEmailThird"
                      type="text"
                      checkonchange="true"
                    />
                  </InputItem>
                </div>
                <span className="block mx-5">—</span>
                <div className="flex">
                  <InputItem>
                    <Input
                      label="confirm code"
                      name="strConfirmEmailFourth"
                      type="text"
                      checkonchange="true"
                    />
                  </InputItem>
                  <InputItem>
                    <Input
                      label="confirm code"
                      name="strConfirmEmailFifth"
                      type="text"
                      checkonchange="true"
                    />
                  </InputItem>
                  <InputItem>
                    <Input
                      label="confirm code"
                      name="strConfirmEmailSixth"
                      type="text"
                      checkonchange="true"
                    />
                  </InputItem>
                </div>
                {/* <div className="flex"></div> */}
              </div>

              {/* open emails */}
              <div className="flex justify-evenly">
                <OpenEmail
                  href="https://mail.google.com/mail/u/0/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Gmail} alt="gmail" />
                  Gmail {strAuth.open}
                </OpenEmail>
                <OpenEmail
                  href="https://outlook.live.com/mail/0/inbox"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Outlook} alt="outlook" />
                  Outlook {strAuth.open}
                </OpenEmail>
              </div>

              {/* <Button type="submit">
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
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
                confirm
              </Button> */}
            </Form>
          )}
        </Formik>

        <p className="text-center">{strAuth.checkSpam}</p>
      </div>
    </ContainerLayout>
  );
};
export default ConfirmEmail;
