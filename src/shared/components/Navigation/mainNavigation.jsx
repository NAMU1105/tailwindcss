import React, { useState } from 'react';

import MainHeader from './mainHeader';
import NavLinks from './navLinks';
import SideDrawer from './sideDrawer';
import Backdrop from '../UIElements/backdrop';

const MainNavigation = (props) => {
    const [drawerIsOpen, setDrawerOpen] = useState(false);

    const closeDrawerHanlder = () => {
        setDrawerOpen(false);
    };
    const openDrawerHanlder = () => {
        setDrawerOpen(true);
    };

    return (
        <>
            <MainHeader onClick={openDrawerHanlder}>
                <NavLinks />
            </MainHeader>

            {drawerIsOpen && <Backdrop onClick={closeDrawerHanlder} />}
            <SideDrawer show={drawerIsOpen}>
                <NavLinks />
            </SideDrawer>
            {/* <SideDrawer show={drawerIsOpen} /> */}
        </>
    );
};

export default MainNavigation;
