import React from 'react';
import ReactDOM from 'react-dom';
// import NavLinks from './navLinks';

const SideDrawer = (props) => {
    let content = null;
    if (props.show) {
        content = (
            <aside
                className="w-1/3 absolute top-0 bg-gray-100 min-h-screen"
                onClick={props.onClick}
            >
                <nav>
                    <h3>MENU</h3>
                    {props.children}
                    {/* <NavLinks onHeader={false} /> */}
                </nav>
            </aside>
        );
    }
    return ReactDOM.createPortal(
        content,
        document.getElementById('drawer-hook')
    );
};
export default SideDrawer;
