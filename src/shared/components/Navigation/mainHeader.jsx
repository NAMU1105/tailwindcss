import React from 'react';
import { TestStyled } from '../../../style/index';

const MainHeader = (props) => {
  const showMenuList = () => {
    document.querySelector('#userMenu').classList.toggle('hidden');
  };

  return (
    <header className="bg-primary-red h-header flex items-center px-5 ">
      <h1>4D REPLAY</h1>

      <nav className="hidden xs:block">{props.children}</nav>
      <button onClick={props.onClick} className="bg-red-100 xs:hidden">
        open drawer
      </button>
      <TestStyled href="#" className="ml-auto relative" onClick={showMenuList}>
        User님 환영합니다.
      </TestStyled>
      <ul
        className="absolute bg-red-300 top-20 right-5 hidden hamburgerList"
        id="userMenu"
      >
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
