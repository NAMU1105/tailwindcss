import React, { ReactNode, useEffect, useState } from "react";
import ReactDOM from "react-dom";

interface BackdropProps {
  children: ReactNode;
}

const Backdrop: React.FC<BackdropProps> = (props: BackdropProps) => {
  return ReactDOM.createPortal(
    <div className="w-screen h-screen bg-black opacity-70 relative z-30">
      {props.children}
    </div>,
    document.getElementById("backdrop-hook")
  );
};

let isMonted = false;
export const BackDrop = () => {
  const [showBackdrop, setShowBackdrop] = useState(false);

  useEffect(() => {
    if (!isMonted) isMonted = true;

    if (isMonted) {
      setShowBackdrop(true);
    }
  }, []);

  return (
    <>
      {showBackdrop && (
        <Backdrop>
          <div>test</div>
        </Backdrop>
      )}
    </>
  );
};
