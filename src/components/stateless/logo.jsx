import React from "react";
import LogoRoundImage from "../../assets/images/logoRound.jpg";
import LogoHorizontalLight from "../../assets/images/4DREPLAY_Horizontal_Light.png";
import LogoHorizontalDark from "../../assets/images/4DREPLAY_Horizontal_Dark.png";
import LogoVerticalDark from "../../assets/images/4DREPLAY_Vertical_Dark.png";
import LogoVertialtalLight from "../../assets/images/4DREPLAY_Vertical_Light.png";

const Logo = (props) => {
  const { withLink, classStyle, type } = props;

  let compElem;
  let strImg;

  if (!type) {
    strImg = LogoRoundImage;
  } else {
    switch (type.type) {
      case "LogoHorizontalDark":
        strImg = LogoHorizontalDark;
        break;
      case "LogoHorizontalLight":
        strImg = LogoHorizontalLight;
        break;
      case "LogoVerticalDark":
        strImg = LogoVerticalDark;
        break;
      case "LogoVertialtalLight":
        strImg = LogoVertialtalLight;
        break;

      default:
        strImg = LogoRoundImage;
        break;
    }
  }
  if (withLink) {
    compElem = (
      <div className="flex justify-start ">
        <a href="/">
          <span className="sr-only">4DREPLAY</span>
          <img className={`h-8 w-auto sm:h-6`} src={strImg} alt="logo" />
        </a>
      </div>
    );
  } else {
    compElem = <img className={classStyle} src={strImg} alt="logo" />;
  }

  return compElem;
};

export default Logo;
