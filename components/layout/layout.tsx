import React, { ReactNode, useContext, useState, useEffect } from "react";
import Sidebar from "../navigation/sidebar";
import Header from "../navigation/header";

import { LayoutContext } from "../../context/layout-context";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  const layoutContext = useContext(LayoutContext);

  useEffect(() => {
    console.log(layoutContext.isNavOpen);
  }, [layoutContext.isNavOpen]);

  return (
    <div className="content flex flex-col w-full">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="ml-sidenav p-5 w-full">{props.children}</main>
      </div>
      {/* <Footer /> */}
    </div>
  );
};
export default Layout;
