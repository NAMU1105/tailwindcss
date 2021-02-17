import React from 'react';

const MainHeader = (props) => {
    return (
        <header className="bg-primary-red h-header flex items-center px-5">
            <h1>4D REPLAY</h1>
            <nav className="hidden xs:block">{props.children}</nav>
            <button onClick={props.onClick} className="bg-red-100 xs:hidden">
                open drawer
            </button>
            {/* 아래 a태그를 호버 했을 때 ul이 hidden이었다가 block으로 되는 건 여기서 못하나?
            nested는 styled랑 같이 써야 하나...? 근데 이건 nested도 아닌데... */}
            <a href="/" className="ml-auto relative">
                User님 환영합니다.
            </a>
            <ul className="absolute bg-red-300 top-20 right-5">
                <li className="cursor-pointer">
                    <a href="/" className="p-5 border-b-2 uppercase block">
                        my page
                    </a>
                </li>
                <li className="cursor-pointer">
                    <a href="/" className="p-5 uppercase block">
                        log out
                    </a>
                </li>
            </ul>
        </header>
    );
};

export default MainHeader;
