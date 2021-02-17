// navLink 파일을 하나 만들어서, export할 때 navLink리스트를 같이 보내는 방안 고려해보기
// context에 로그인 정보를 담고 있는지 여부에 따라서
// -> 로그인 했을 경우에 로그인한 사람들에게 보여주는 메뉴들을 담은 어레이를 넘긴다.
import React from 'react';

// TODO: 2중배열로 가야 할 것 같다.
// 2중 배열에 적합한 구조를 생각해보기
// NavItem이라는 컴포넌트를 만들고 하위 배열을 전달해서 호버 시에 하위 메뉴들도 보이게 만들기
// const menus = ['beauty', 'food', 'pet', 'home deco'];
const menus = {
    beauty: ['beauty1', 'beauty2', 'beauty3'],
    food: ['food', 'food', 'food'],
    pet: ['pet', 'pet', 'pet'],
};

const NavLinks = (props) => {
    return (
        // sidenav에서는 col, header에서는 row
        <ul className="flex flex-col xs:flex-row">
            {Object.keys(menus).map((menu) => (
                <li key={menu} className="cursor-pointer py-3 ml-3">
                    {menu}
                </li>
            ))}
        </ul>
    );
};

export default NavLinks;
