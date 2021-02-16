import React from 'react';
// import ReactDOM from 'react-dom';

const Auth = (props) => {
    return (
        <section className="min-h-body uppercase flex flex-col justify-center items-center">
            <h1 className="text-white mb-10  text-4xl">LOG IN</h1>
            <form className="flex flex-col max-w-md" action="">
                {/* auth type에 따라 보여주는 input 엘레멘트 조절하기
                : 회원가입일 경우 비밀번호 확인 등의 엘레먼트를 화면에 띄운다. */}
                <label htmlFor="" className="text-white">
                    email
                </label>
                <input
                    type="email"
                    placeholder="email"
                    className="my-5 p-1 rounded-sm"
                />
                <label htmlFor="" className="text-white">
                    password
                </label>
                <input
                    type="password"
                    placeholder="password"
                    className="my-5 p-1 rounded-sm"
                />
                <label htmlFor="" className="text-white mb-5">
                    <input type="checkbox" className="mr-1" />
                    자동로그인
                </label>
                <button className="bg-gray-dark px-3 py-1 rounded-sm transition duration-500 ease-in-out hover:bg-primary-red">
                    LOGIN
                </button>
            </form>
        </section>
    );
};

export default Auth;
