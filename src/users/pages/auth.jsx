import React, { useState } from 'react';
import { Container } from '../../style/index';

const SIGNUP = 'SIGN UP';
const LOGIN = 'LOG IN';

const Auth = (props) => {
    const [isLoginMode, setLoginMode] = useState(true);

    const changeModeHandler = () => {
        setLoginMode((prevState) => !prevState);
    };

    return (
        <Container>
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
                            <input type="hidden" name="autoLogin" />
                            <input
                                type="checkbox"
                                className="mr-1"
                                name="autoLogin"
                                id="autoLogin"
                            />
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
                        <span className="text-lg text-white ">
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
                    {/* plugin test - 지울예정 */}
                    {/* <article className="prose">
                        <p class="line-clamp-3">
                            Et molestiae hic earum repellat aliquid est
                            doloribus delectus. Enim illum odio porro ut omnis
                            dolor debitis natus. Voluptas possimus deserunt sit
                            delectus est saepe nihil. Qui voluptate possimus et
                            quia. Eligendi voluptas voluptas dolor cum. Rerum
                            est quos quos id ut molestiae fugit.
                        </p>

                        <h3>When a heading comes after a paragraph …</h3>
                        <p>
                            When a heading comes after a paragraph, we need a
                            bit more space, like I already mentioned above. Now
                            let's see what a more complex list would look like.
                        </p>

                        <code className="language-html">TEST</code>
                    </article> */}

                    <div class="aspect-w-16 aspect-h-9">
                        <iframe
                            title="hjk"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <button className="bg-gray-dark px-3 py-1 mb-5 rounded-sm transition duration-500 ease-in-out hover:bg-primary-red">
                        {isLoginMode ? LOGIN : SIGNUP}
                    </button>
                    {isLoginMode ? (
                        <button href="/" onClick={changeModeHandler}>
                            아직 계정이 없으신가요?
                        </button>
                    ) : (
                        <button href="/" onClick={changeModeHandler}>
                            이미 계정이 있으신가요?
                        </button>
                    )}
                </form>
            </div>
        </Container>
    );
};

export default Auth;
