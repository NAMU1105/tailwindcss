import React, { useState } from 'react';
import { Container, TestResponsiveStyled } from '../../style/index';

const SIGNUP = 'SIGN UP';
const LOGIN = 'LOG IN';

const Auth = (props) => {
  const [isLoginMode, setLoginMode] = useState(true);

  const changeModeHandler = () => {
    setLoginMode((prevState) => !prevState);
  };

  return (
    <Container>
      {/* //////////////////////////////////////////////////////////* */}
      {/* ! customization test, 삭제 예정 */}
      {/* <button className="btn-blue">test</button> */}
      {/* <div className="flexAllCentered w-full">
                        <span>test</span>
                        <span>test</span>
                        <span>test</span>
                        <span>test</span>
                    </div> */}

      {/* ! rotate, custom rotate */}
      {/* <div>
        <button className="rotate-45 text-red-500">default rotate</button>
        <button className="text-white rotate-5/9 bg-green-800">
          custom rotate
        </button>
      </div>
      <span className="text-white active:bg-red-300 hover:bg-green-200">
        variant test
      </span> */}

      {/* ! odd element */}
      {/* <div>
        <span className="rounded-full bg-blue-300 odd:bg-green-800">test</span>
        <span className="rounded-circle bg-blue-300 odd:bg-green-800">
          test
        </span>
        <span className="bg-blue-300 odd:bg-green-800">test</span>
        <span className="bg-blue-300 odd:bg-green-800">test</span>
        <span className="bg-blue-300 odd:bg-green-800">test</span>
        <span className="bg-blue-300 odd:bg-green-800">test</span>
        <span className="bg-blue-300 odd:bg-green-800">test</span>
        <span className="bg-blue-300 odd:bg-green-800">test</span>
      </div> */}
      {/* ! custom variants */}
      {/* <div>
        <span className="banana">banana</span>
        <span className="hover:banana text-white">banana hover</span>
        <button className="active:banana text-white">banana active</button>
        fill
        <button className="text-green-300 disabled:bg-gray-600">
          disabled
        </button>
      </div> */}

      {/* <div>
        <svg className="text-red-300 fill-gray-900 hover:fill-secondary-magenta">
          <path d="M18 9.87V20H2V9.87a4.25 4.25 0 0 0 3-.38V14h10V9.5a4.26 4.26 0 0 0 3 .37zM3 0h4l-.67 6.03A3.43 3.43 0 0 1 3 9C1.34 9 .42 7.73.95 6.15L3 0zm5 0h4l.7 6.3c.17 1.5-.91 2.7-2.42 2.7h-.56A2.38 2.38 0 0 1 7.3 6.3L8 0zm5 0h4l2.05 6.15C19.58 7.73 18.65 9 17 9a3.42 3.42 0 0 1-3.33-2.97L13 0z"></path>
        </svg>
      </div> */}

      {/* ! screen readers */}
      {/* <div>
        <span className="sr-only text-red-500">Settings</span>
      </div> */}

      {/* plugin component */}
      {/* <div>
        <button className="btn-pink">addcomponent test</button>
      </div> */}

      {/* <div className="flexResponsive skew-10deg"> */}
      {/* <div className="simpleFlex-md">
        <div>special</div>
        <div>special</div>
        <div>special</div>
        <div>special</div>
        <div>special</div>
        <div>special</div>
      </div> */}

      {/* <TestResponsiveStyled>test</TestResponsiveStyled> */}

      {/* ! animation */}
      {/* <div>
        <span className="flex h-3 w-3">
          <span className="animate-wiggle  md:animate-none absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
        </span>
      </div> */}

      {/* ! Adding variants  */}
      {/* <div>
        <button className="btn-blueTEST wow:text-white" disabled>
          disabled
        </button>
      </div> */}

      {/* ! Complex variants */}
      {/* <div>
        <span className="!text-red-500 md:!text-red-800">Complex variants</span>
      </div> */}

      {/* <div className="container">
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </div> */}

      {/* //////////////////////////////////////////////////////////* */}
      <div className="bg-gray-500 p-10 w-5/12">
        <h1 className="text-white mb-10  text-4xl text-center">
          {isLoginMode ? LOGIN : SIGNUP}
        </h1>
        <form className="flex flex-col" action="">
          {!isLoginMode && (
            <>
              <label htmlFor="" className="text-white">
                name
              </label>
              <input
                type="text"
                placeholder="name"
                className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              />
            </>
          )}
          <label htmlFor="" className="text-white">
            email
          </label>
          <input
            type="email"
            placeholder="email"
            className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
          />
          <label htmlFor="" className="text-white">
            password
          </label>
          <input
            type="password"
            placeholder="password"
            className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
          />
          {isLoginMode ? (
            <label htmlFor="" className="text-white mb-5">
              {/* <input type="hidden" name="autoLogin" /> */}
              <input type="checkbox" className="mr-1" id="autoLogin" />
              자동로그인
            </label>
          ) : (
            <>
              <label htmlFor="" className="text-white">
                password check
              </label>
              <input
                type="password"
                placeholder="password check"
                className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              />
              <label htmlFor="" className="text-white mb-5">
                <input type="checkbox" className="mr-1" />
                회원가입 약관 동의
              </label>
            </>
          )}

          {/* SNS signup/login */}
          <div className="flex flex-col items-center">
            <span className="text-lg text-white">
              or {isLoginMode ? LOGIN : SIGNUP} with
            </span>

            <div className="mt-2 mb-5">
              <a href="/" className="pr-1">
                google
              </a>
              <a href="/" className="pr-1">
                kakao
              </a>
              <a href="/" className="pr-1">
                naver
              </a>
            </div>
          </div>

          <button className="bg-gray-dark px-3 py-1 mb-5 rounded-sm transition duration-500 ease-in-out hover:bg-primary-red">
            {isLoginMode ? LOGIN : SIGNUP}
          </button>

          <button onClick={changeModeHandler}>
            {isLoginMode
              ? `아직 계정이 없으신가요?`
              : `이미 계정이 있으신가요?`}
          </button>
        </form>
      </div>
    </Container>
  );
};

export default Auth;
