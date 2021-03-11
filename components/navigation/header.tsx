import React, { useContext } from "react";
import Image from "next/image";

import { LayoutContext } from "../../context/layout-context";
import { classNames } from "../util/utils";

interface IF {}

const Header: React.FC<IF> = (props: IF) => {
  const layoutContext = useContext(LayoutContext);
  const BGCOLOR_VARIANT_MAPS = layoutContext.BGCOLOR_VARIANT_MAPS;

  return (
    <header
      className={classNames`sticky z-10 pr-4 top-0 h-header flex items-center ${
        BGCOLOR_VARIANT_MAPS[layoutContext.layoutColor].bg
      } shadow-md`}
    >
      <div className="px-4 flex items-center w-sidenav">
        <button className="mr-2" onClick={layoutContext.ToggleNavHandler}>
          <svg
            className="w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <Image
          src="/image/logo/Horizontal_Light.png"
          alt="site logo"
          width={140}
          height={20}
        />
      </div>
    </header>
  );
};
export default Header;
